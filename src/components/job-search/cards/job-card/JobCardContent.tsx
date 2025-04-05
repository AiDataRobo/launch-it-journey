
import React from 'react';
import { Building, MapPin, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { JobListing } from '../../data/jobListingsData';

interface JobCardContentProps {
  job: JobListing;
  viewMode: 'grid' | 'list';
}

export const JobCardContent: React.FC<JobCardContentProps> = ({ job, viewMode }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="mb-3 md:mb-0">
          <h3 className="text-xl font-semibold">{job.title}</h3>
          <div className="flex items-center mt-1 text-gray-600">
            <Building className="h-4 w-4 mr-1" />
            <span className="mr-4">{job.company}</span>
            <MapPin className="h-4 w-4 mr-1" />
            <span>{job.location}</span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-jobonboard-purple font-medium">{job.salary}</div>
          <div className="text-sm text-gray-500">{job.type}</div>
          <div className="text-xs text-gray-400 flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>Posted {job.posted}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-3 space-y-3">
        {viewMode === 'list' && (
          <p className="text-gray-600 line-clamp-2">{job.description}</p>
        )}
        <div className="flex flex-wrap gap-2">
          {job.skills.map(skill => (
            <Badge key={skill} variant="outline" className="bg-jobonboard-purple/10 text-jobonboard-purple border-jobonboard-purple/20">
              {skill}
            </Badge>
          ))}
          {job.isRemote && (
            <Badge className="bg-green-100 text-green-800 border-green-200">
              Remote
            </Badge>
          )}
          {job.urgent && (
            <Badge className="bg-red-100 text-red-800 border-red-200">
              Urgent
            </Badge>
          )}
          {job.fresherFriendly && (
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">
              Fresher Friendly
            </Badge>
          )}
          {job.featured && viewMode === 'grid' && (
            <Badge className="bg-jobonboard-purple text-white">
              Featured
            </Badge>
          )}
        </div>
      </div>
    </>
  );
};
