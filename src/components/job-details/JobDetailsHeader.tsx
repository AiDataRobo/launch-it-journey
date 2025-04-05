
import React from 'react';
import { Building, MapPin, Clock, DollarSign, Bookmark, BookmarkCheck, Share2, Flag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import { JobListing } from '../job-search/data/jobListingsData';
import { companyLogos } from '../job-search/data/companyLogos';

interface JobDetailsHeaderProps {
  job: JobListing;
  isSaved: boolean;
  handleSaveJob: () => void;
  handleShareJob: () => void;
  handleReportJob: () => void;
}

export const JobDetailsHeader: React.FC<JobDetailsHeaderProps> = ({
  job,
  isSaved,
  handleSaveJob,
  handleShareJob,
  handleReportJob
}) => {
  return (
    <CardContent className="p-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">{job.title}</h1>
          <div className="flex items-center mt-2 text-gray-600">
            <Building className="h-4 w-4 mr-1" />
            <span className="mr-4">{job.company}</span>
            <MapPin className="h-4 w-4 mr-1" />
            <span>{job.location}</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-jobonboard-purple/10 text-jobonboard-purple border-jobonboard-purple/20">
              {job.type}
            </Badge>
            <Badge variant="outline" className="bg-jobonboard-blue/10 text-jobonboard-blue border-jobonboard-blue/20">
              {job.experience}
            </Badge>
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
          </div>
        </div>
        <img
          src={companyLogos[job.company as keyof typeof companyLogos]}
          alt={job.company}
          className="w-16 h-16 rounded-md object-cover border"
        />
      </div>
      
      <div className="flex flex-wrap justify-between items-center mt-6 pt-6 border-t">
        <div className="space-y-2 mb-4 md:mb-0">
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 mr-2 text-gray-500" />
            <span className="text-lg font-medium">{job.salary}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-gray-500" />
            <span className="text-sm text-gray-600">Posted {job.posted}</span>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleSaveJob}
            className={isSaved ? "text-jobonboard-purple" : ""}
          >
            {isSaved ? (
              <BookmarkCheck className="h-4 w-4 mr-1 fill-jobonboard-purple text-jobonboard-purple" />
            ) : (
              <Bookmark className="h-4 w-4 mr-1" />
            )}
            {isSaved ? "Saved" : "Save"}
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleShareJob}
          >
            <Share2 className="h-4 w-4 mr-1" />
            Share
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleReportJob}
          >
            <Flag className="h-4 w-4 mr-1" />
            Report
          </Button>
        </div>
      </div>
    </CardContent>
  );
};
