
import React from 'react';
import { Search } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { JobListing } from './jobListingsData';
import JobCard from './JobCard';

interface JobListProps {
  jobs: JobListing[];
  viewMode: 'grid' | 'list';
  savedJobs: number[];
  handleSaveJob: (jobId: number) => void;
  handleApply: (jobId: number) => void;
  resetFilters: () => void;
}

const JobList: React.FC<JobListProps> = ({ 
  jobs, 
  viewMode, 
  savedJobs, 
  handleSaveJob, 
  handleApply, 
  resetFilters 
}) => {
  if (jobs.length === 0) {
    return (
      <Card className="col-span-full p-8 text-center">
        <div className="flex flex-col items-center justify-center py-12">
          <Search className="h-16 w-16 text-gray-300 mb-4" />
          <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
          <p className="text-gray-500 mb-4">
            We couldn't find any jobs matching your criteria.
          </p>
          <Button onClick={resetFilters}>
            Reset Filters
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "space-y-4"}>
      {jobs.map(job => (
        <JobCard
          key={job.id}
          job={job}
          viewMode={viewMode}
          savedJobs={savedJobs}
          handleSaveJob={handleSaveJob}
          handleApply={handleApply}
        />
      ))}
    </div>
  );
};

export default JobList;
