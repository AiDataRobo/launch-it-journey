
import React from 'react';
import { JobListing } from '../data/jobListingsData';
import { FeaturedJobsHeader } from './featured-jobs/FeaturedJobsHeader';
import { FeaturedJobsList } from './featured-jobs/FeaturedJobsList';

interface FeaturedJobsProps {
  jobs: JobListing[];
  savedJobs: number[];
  handleSaveJob: (jobId: number) => void;
  handleApply: (jobId: number) => void;
}

const FeaturedJobs: React.FC<FeaturedJobsProps> = ({ 
  jobs, 
  savedJobs, 
  handleSaveJob, 
  handleApply 
}) => {
  if (!jobs.some(job => job.featured)) {
    return null;
  }
  
  return (
    <div className="mb-8">
      <FeaturedJobsHeader />
      <FeaturedJobsList 
        jobs={jobs} 
        savedJobs={savedJobs} 
        handleSaveJob={handleSaveJob} 
        handleApply={handleApply} 
      />
    </div>
  );
};

export default FeaturedJobs;
