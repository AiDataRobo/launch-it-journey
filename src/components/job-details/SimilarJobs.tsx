
import React from 'react';
import { Link } from 'react-router-dom';
import { Building, MapPin } from 'lucide-react';
import { CardContent } from '@/components/ui/card';
import { JobListing } from '../job-search/data/jobListingsData';

interface SimilarJobsProps {
  similarJobs: JobListing[];
}

export const SimilarJobs: React.FC<SimilarJobsProps> = ({ similarJobs }) => {
  return (
    <CardContent className="p-6">
      <h2 className="text-xl font-semibold mb-4">Similar Jobs</h2>
      
      {similarJobs.length > 0 ? (
        <div className="space-y-4">
          {similarJobs.map((similarJob) => (
            <div key={similarJob.id} className="border rounded-lg p-4 hover:border-jobonboard-purple/50 transition-all">
              <Link to={`/job-details/${similarJob.id}`}>
                <h3 className="font-medium hover:text-jobonboard-purple">{similarJob.title}</h3>
              </Link>
              <div className="flex items-center mt-1 text-gray-600 text-sm">
                <Building className="h-3 w-3 mr-1" />
                <span className="mr-3">{similarJob.company}</span>
                <MapPin className="h-3 w-3 mr-1" />
                <span>{similarJob.location}</span>
              </div>
              <div className="mt-2 text-sm text-jobonboard-purple font-medium">
                {similarJob.salary}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center py-4">No similar jobs found</p>
      )}
    </CardContent>
  );
};
