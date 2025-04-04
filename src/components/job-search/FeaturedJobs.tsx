
import React from 'react';
import { Building, MapPin, Clock, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { JobListing } from './jobListingsData';
import { companyLogos } from './companyLogos';

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
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <span className="text-jobonboard-purple">✨</span> Featured Opportunities
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {jobs
          .filter(job => job.featured)
          .slice(0, 2)
          .map(job => (
            <Card key={`featured-${job.id}`} className="border-jobonboard-purple/30 bg-gradient-to-br from-white to-jobonboard-purple/5 hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <img 
                      src={companyLogos[job.company as keyof typeof companyLogos]} 
                      alt={job.company} 
                      className="w-14 h-14 rounded-md object-cover border"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <div className="flex items-center mt-1 text-gray-600">
                          <Building className="h-4 w-4 mr-1" />
                          <span className="mr-4">{job.company}</span>
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <Badge className="bg-jobonboard-purple text-white">Featured</Badge>
                    </div>
                    
                    <div className="mt-3 space-y-3">
                      <p className="text-gray-600 line-clamp-2">{job.description}</p>
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
                      </div>
                    </div>
                    
                    <div className="mt-4 flex justify-between items-center">
                      <div>
                        <span className="text-jobonboard-purple font-medium">{job.salary}</span>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>Posted {job.posted}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleSaveJob(job.id)}
                          className={savedJobs.includes(job.id) ? "text-jobonboard-purple" : ""}
                        >
                          {savedJobs.includes(job.id) ? (
                            <Heart className="h-4 w-4 mr-1 fill-jobonboard-purple text-jobonboard-purple" />
                          ) : (
                            <Heart className="h-4 w-4 mr-1" />
                          )}
                          Save
                        </Button>
                        <Button 
                          size="sm" 
                          className="bg-jobonboard-purple hover:bg-jobonboard-purple/90"
                          onClick={() => handleApply(job.id)}
                        >
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
