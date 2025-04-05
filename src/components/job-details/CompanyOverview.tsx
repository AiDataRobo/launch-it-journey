
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import { JobListing } from '../job-search/data/jobListingsData';
import { companyLogos } from '../job-search/data/companyLogos';

interface CompanyOverviewProps {
  job: JobListing;
  handleShareJob: () => void;
}

export const CompanyOverview: React.FC<CompanyOverviewProps> = ({ job, handleShareJob }) => {
  return (
    <CardContent className="p-6">
      <h2 className="text-xl font-semibold mb-4">Company Overview</h2>
      <div className="flex items-center mb-4">
        <img
          src={companyLogos[job.company as keyof typeof companyLogos]}
          alt={job.company}
          className="w-16 h-16 rounded-md object-cover border mr-4"
        />
        <div>
          <h3 className="font-medium text-lg">{job.company}</h3>
          <p className="text-sm text-gray-500">Technology · 50-200 employees</p>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4">
        {job.company} is a leading company in the {job.category} sector, known for its innovative solutions and excellent work culture.
      </p>
      
      <Button variant="outline" className="w-full" onClick={handleShareJob}>
        <ExternalLink className="h-4 w-4 mr-2" />
        Visit Company Website
      </Button>
    </CardContent>
  );
};
