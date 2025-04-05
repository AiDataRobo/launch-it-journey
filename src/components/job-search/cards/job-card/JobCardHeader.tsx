
import React from 'react';
import { Building, MapPin } from 'lucide-react';
import { companyLogos } from '../../data/companyLogos';
import { JobListing } from '../../data/jobListingsData';

interface JobCardHeaderProps {
  job: JobListing;
  viewMode: 'grid' | 'list';
}

export const JobCardHeader: React.FC<JobCardHeaderProps> = ({ job, viewMode }) => {
  return (
    <div className={viewMode === 'grid' ? "mb-4" : "mr-4 mb-4 md:mb-0"}>
      <img 
        src={companyLogos[job.company as keyof typeof companyLogos]} 
        alt={job.company} 
        className={viewMode === 'grid' ? "w-12 h-12 rounded-md object-cover border" : "w-14 h-14 rounded-md object-cover border"}
      />
    </div>
  );
};
