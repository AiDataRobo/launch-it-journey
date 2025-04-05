
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { allJobListings } from '@/components/job-search/data/jobListingsData';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import {
  JobDetailsHeader,
  JobDescription,
  CompanyOverview,
  SimilarJobs,
  QuickApply,
  JobNotFound
} from '@/components/job-details';

const JobDetails = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const [job, setJob] = useState(allJobListings.find(job => job.id === parseInt(jobId || '0')));
  const [isSaved, setIsSaved] = useState(false);
  const [similarJobs, setSimilarJobs] = useState<typeof allJobListings>([]);
  const { toast } = useToast();
  
  useEffect(() => {
    // Find job based on the URL parameter
    const foundJob = allJobListings.find(job => job.id === parseInt(jobId || '0'));
    setJob(foundJob);
    
    // Find similar jobs based on category
    if (foundJob) {
      const similar = allJobListings
        .filter(j => j.category === foundJob.category && j.id !== foundJob.id)
        .slice(0, 3);
      setSimilarJobs(similar);
    }
    
    // Scroll to top when job changes
    window.scrollTo(0, 0);
  }, [jobId]);
  
  if (!job) {
    return (
      <DashboardLayout>
        <div className="container mx-auto px-4 py-8">
          <JobNotFound />
        </div>
      </DashboardLayout>
    );
  }
  
  const handleSaveJob = () => {
    setIsSaved(!isSaved);
    toast({
      title: isSaved ? "Job removed" : "Job saved",
      description: isSaved 
        ? "Job has been removed from your saved list" 
        : "Job has been added to your saved list",
    });
  };
  
  const handleShareJob = () => {
    if (navigator.share) {
      navigator.share({
        title: `${job.title} at ${job.company}`,
        text: `Check out this job: ${job.title} at ${job.company}`,
        url: window.location.href,
      })
      .catch(() => {
        navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link copied to clipboard",
          description: "You can now paste the link anywhere",
        });
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied to clipboard",
        description: "You can now paste the link anywhere",
      });
    }
  };
  
  const handleReportJob = () => {
    toast({
      title: "Job reported",
      description: "Thank you for your feedback. Our team will review this job posting.",
    });
  };
  
  const handleApplyJob = () => {
    toast({
      title: "Application started",
      description: "You're being redirected to the application form",
    });
    // Here you would navigate to an application form or open a modal
  };
  
  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Back to search link */}
        <Link 
          to="/job-search" 
          className="inline-flex items-center text-jobonboard-purple mb-6 hover:underline"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Job Search
        </Link>
        
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Job details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job header */}
            <Card>
              <JobDetailsHeader
                job={job}
                isSaved={isSaved}
                handleSaveJob={handleSaveJob}
                handleShareJob={handleShareJob}
                handleReportJob={handleReportJob}
              />
            </Card>
            
            {/* Job description */}
            <Card>
              <JobDescription job={job} handleApplyJob={handleApplyJob} />
            </Card>
          </div>
          
          {/* Right column - Company info and similar jobs */}
          <div className="space-y-6">
            {/* Company info */}
            <Card>
              <CompanyOverview job={job} handleShareJob={handleShareJob} />
            </Card>
            
            {/* Similar jobs */}
            <Card>
              <SimilarJobs similarJobs={similarJobs} />
            </Card>
            
            {/* Quick apply */}
            <Card>
              <QuickApply handleApplyJob={handleApplyJob} />
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default JobDetails;
