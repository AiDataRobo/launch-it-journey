
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { JobListing } from '../data/jobListingsData';
import { 
  JobCardHeader, 
  JobCardContent, 
  JobCardActions, 
  JobCardDialog 
} from './job-card';

interface JobCardProps {
  job: JobListing;
  viewMode: 'grid' | 'list';
  savedJobs: number[];
  handleSaveJob: (jobId: number) => void;
  handleApply: (jobId: number) => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, viewMode, savedJobs, handleSaveJob, handleApply }) => {
  return (
    <Card 
      className={`hover:border-jobonboard-purple/50 transition-all ${
        job.featured ? "border-jobonboard-purple/30 bg-gradient-to-br from-white to-jobonboard-purple/5" : ""
      }`}
    >
      <CardContent className="p-6">
        <div className={viewMode === 'grid' ? "flex flex-col" : "flex flex-col md:flex-row"}>
          <JobCardHeader job={job} viewMode={viewMode} />
          <div className="flex-1">
            <JobCardContent job={job} viewMode={viewMode} />
            
            <Dialog>
              <JobCardActions 
                jobId={job.id}
                savedJobs={savedJobs}
                handleSaveJob={handleSaveJob}
                handleApply={handleApply}
              />
              
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="hidden">
                  View Details
                </Button>
              </DialogTrigger>
              
              <JobCardDialog 
                job={job}
                savedJobs={savedJobs}
                handleSaveJob={handleSaveJob}
                handleApply={handleApply}
              />
            </Dialog>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
