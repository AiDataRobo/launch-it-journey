
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface JobCardActionsProps {
  jobId: number;
  savedJobs: number[];
  handleSaveJob: (jobId: number) => void;
  handleApply: (jobId: number) => void;
}

export const JobCardActions: React.FC<JobCardActionsProps> = ({ 
  jobId, 
  savedJobs, 
  handleSaveJob, 
  handleApply 
}) => {
  return (
    <div className="mt-4 flex justify-between items-center">
      <Link to={`/job-details/${jobId}`}>
        <Button variant="outline" size="sm">
          View Details
        </Button>
      </Link>
      <div className="flex space-x-2">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => handleSaveJob(jobId)}
          className={savedJobs.includes(jobId) ? "text-jobonboard-purple" : ""}
        >
          {savedJobs.includes(jobId) ? (
            <Heart className="h-4 w-4 mr-1 fill-jobonboard-purple text-jobonboard-purple" />
          ) : (
            <Heart className="h-4 w-4 mr-1" />
          )}
          Save
        </Button>
        <Button 
          size="sm" 
          className="bg-jobonboard-purple hover:bg-jobonboard-purple/90"
          onClick={() => handleApply(jobId)}
        >
          Apply Now
        </Button>
      </div>
    </div>
  );
};
