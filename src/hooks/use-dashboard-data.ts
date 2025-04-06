
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';

export interface DashboardStats {
  applicationCount: number;
  referralCount: number;
  pendingReferrals: number;
  interviewsScheduled: number;
  profileCompleteness: number;
  recentActivity: RecentActivity[];
}

export interface RecentActivity {
  id: string;
  type: 'application' | 'referral' | 'interview' | 'profile';
  title: string;
  company?: string;
  timestamp: string;
  status?: string;
}

export function useDashboardData() {
  const [stats, setStats] = useState<DashboardStats>({
    applicationCount: 0,
    referralCount: 0,
    pendingReferrals: 0,
    interviewsScheduled: 0,
    profileCompleteness: 75, // Default value
    recentActivity: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { user } = useAuth();

  const fetchDashboardData = async () => {
    if (!user) {
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      // Fetch referral requests count
      const { count: referralCount, error: referralError } = await supabase
        .from('referral_requests')
        .select('*', { count: 'exact', head: true })
        .eq('requester_id', user.id);

      if (referralError) throw referralError;

      // Fetch pending referrals count
      const { count: pendingCount, error: pendingError } = await supabase
        .from('referral_requests')
        .select('*', { count: 'exact', head: true })
        .eq('requester_id', user.id)
        .eq('status', 'Pending');

      if (pendingError) throw pendingError;

      // Fetch profile data to calculate completeness
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (profileError && profileError.code !== 'PGRST116') {
        throw profileError;
      }

      // Calculate profile completeness (simplified version)
      let profileCompleteness = 50; // Base value for having an account
      if (profileData?.full_name) profileCompleteness += 25;
      
      // Fetch recent activity
      const { data: recentReferrals, error: recentError } = await supabase
        .from('referral_requests')
        .select('id, job_id, status, requested_at, job:job_id(title, company)')
        .eq('requester_id', user.id)
        .order('requested_at', { ascending: false })
        .limit(5);

      if (recentError) throw recentError;

      // Format recent activity
      const recentActivity: RecentActivity[] = (recentReferrals || []).map((ref) => ({
        id: ref.id,
        type: 'referral',
        title: ref.job?.title || 'Unknown Job',
        company: ref.job?.company || 'Unknown Company',
        timestamp: ref.requested_at,
        status: ref.status
      }));

      // Update dashboard stats
      setStats({
        applicationCount: 0, // We don't have this data yet
        referralCount: referralCount || 0,
        pendingReferrals: pendingCount || 0,
        interviewsScheduled: 0, // We don't have this data yet
        profileCompleteness,
        recentActivity
      });
    } catch (err) {
      console.error('Error fetching dashboard data:', err);
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, [user]);

  return {
    stats,
    isLoading,
    error,
    refreshData: fetchDashboardData
  };
}
