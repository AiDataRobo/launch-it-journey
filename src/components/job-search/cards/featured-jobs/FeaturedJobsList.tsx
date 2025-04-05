
import React from 'react';
import { FeaturedJobCard } from './FeaturedJobCard';
import { JobListing } from '../../data/jobListingsData';

interface FeaturedJobsListProps {
  jobs: JobListing[];
  savedJobs: number[];
  handleSaveJob: (jobId: number) => void;
  handleApply: (jobId: number) => void;
}

export const FeaturedJobsList: React.FC<FeaturedJobsListProps> = ({
  jobs,
  savedJobs,
  handleSaveJob,
  handleApply
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {jobs
        .filter(job => job.featured)
        .slice(0, 2)
        .map(job => (
          <FeaturedJobCard
            key={job.id}
            job={job}
            savedJobs={savedJobs}
            handleSaveJob={handleSaveJob}
            handleApply={handleApply}
          />
        ))}
    </div>
  );
};
