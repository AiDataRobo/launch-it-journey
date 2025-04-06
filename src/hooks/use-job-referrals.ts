
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { format, formatDistanceToNow } from 'date-fns';
import { useAuth } from '@/context/AuthContext';
import { toast } from '@/hooks/use-toast';

export interface JobReferralPost {
  id: string;
  title: string;
  company: string;
  company_logo: string | null;
  location: string;
  job_type: string;
  tags: string[];
  posted_date: string;
  urgency: 'Low' | 'Medium' | 'High';
  referral_count: number;
  description: string;
  requirements: string[];
}

export interface ReferralRequest {
  id: string;
  job_id: string;
  job: {
    title: string;
    company: string;
  };
  provider_name?: string;
  reason: string;
  resume_url: string | null;
  status: 'Pending' | 'Accepted' | 'Rejected' | 'Expired';
  feedback: string | null;
  requested_at: string;
  updated_at: string;
}

export function useJobReferrals() {
  const [jobPostings, setJobPostings] = useState<JobReferralPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { user } = useAuth();

  const fetchJobPostings = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('job_referral_postings')
        .select('*')
        .eq('active', true)
        .order('posted_date', { ascending: false });

      if (error) {
        throw error;
      }

      // Format the data for frontend use
      const formattedData = data.map(job => ({
        ...job,
        postedDate: formatDistanceToNow(new Date(job.posted_date), { addSuffix: true }),
      }));

      setJobPostings(formattedData);
    } catch (err) {
      console.error('Error fetching job postings:', err);
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUserReferralRequests = async () => {
    if (!user) return [];

    try {
      const { data, error } = await supabase
        .from('referral_requests')
        .select(`
          *,
          job:job_id(title, company)
        `)
        .eq('requester_id', user.id);

      if (error) {
        throw error;
      }

      // Format the requests for frontend use
      return data.map(request => ({
        id: request.id,
        job_id: request.job_id,
        job: request.job,
        provider_name: null, // We'd need another join to get this
        reason: request.reason,
        resume_url: request.resume_url,
        status: request.status,
        feedback: request.feedback,
        requested_at: format(new Date(request.requested_at), 'yyyy-MM-dd'),
        updated_at: request.updated_at
      }));
    } catch (err) {
      console.error('Error fetching referral requests:', err);
      throw err;
    }
  };

  const submitReferralRequest = async (jobId: string, reason: string, resumeFile: File | null) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to request referrals.",
        variant: "destructive"
      });
      return null;
    }

    try {
      let resumeUrl = null;

      // Upload resume if provided
      if (resumeFile) {
        const fileName = `${user.id}/${Date.now()}_${resumeFile.name}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('resumes')
          .upload(fileName, resumeFile);

        if (uploadError) {
          throw uploadError;
        }
        
        resumeUrl = fileName;
      }

      // Create the referral request
      const { data, error } = await supabase
        .from('referral_requests')
        .insert([
          {
            job_id: jobId,
            requester_id: user.id,
            reason,
            resume_url: resumeUrl,
          }
        ])
        .select()
        .single();

      if (error) {
        throw error;
      }

      return data;
    } catch (err) {
      console.error('Error submitting referral request:', err);
      toast({
        title: "Request Failed",
        description: err.message || "Failed to submit referral request.",
        variant: "destructive"
      });
      return null;
    }
  };

  useEffect(() => {
    fetchJobPostings();
  }, []);

  return {
    jobPostings,
    isLoading,
    error,
    fetchJobPostings,
    fetchUserReferralRequests,
    submitReferralRequest
  };
}
