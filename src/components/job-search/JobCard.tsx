
import React from 'react';
import { Building, MapPin, Clock, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { JobListing } from './jobListingsData';
import { companyLogos } from './companyLogos';

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
          <div className={viewMode === 'grid' ? "mb-4" : "mr-4 mb-4 md:mb-0"}>
            <img 
              src={companyLogos[job.company as keyof typeof companyLogos]} 
              alt={job.company} 
              className={viewMode === 'grid' ? "w-12 h-12 rounded-md object-cover border" : "w-14 h-14 rounded-md object-cover border"}
            />
          </div>
          <div className="flex-1">
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
            
            <Dialog>
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
              
              <div className="mt-4 flex justify-between items-center">
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </DialogTrigger>
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
              
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{job.title}</DialogTitle>
                  <DialogDescription className="flex items-center text-base text-foreground mt-1">
                    <Building className="h-4 w-4 mr-1" />
                    <span className="font-medium mr-4">{job.company}</span>
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{job.location}</span>
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Job Description</h3>
                      <p className="text-gray-700">{job.description}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Required Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map(skill => (
                          <Badge key={skill} variant="outline" className="bg-jobonboard-purple/10 text-jobonboard-purple border-jobonboard-purple/20">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">About the Company</h3>
                      <p className="text-gray-700">
                        {job.company} is a leading company in the {job.category} sector, known for its innovative solutions and excellent work culture.
                      </p>
                    </div>
                  </div>
                  
                  <div className="md:col-span-1">
                    <Card>
                      <CardContent className="p-4 space-y-4">
                        <div className="text-center mb-4">
                          <img 
                            src={companyLogos[job.company as keyof typeof companyLogos]} 
                            alt={job.company} 
                            className="w-16 h-16 rounded-md object-cover border mx-auto"
                          />
                          <h3 className="font-medium mt-2">{job.company}</h3>
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Salary:</span>
                            <span className="font-medium">{job.salary}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Job Type:</span>
                            <span>{job.type}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Experience:</span>
                            <span>{job.experience}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Posted:</span>
                            <span>{job.posted}</span>
                          </div>
                        </div>
                        
                        <div className="pt-4">
                          <Button 
                            className="w-full bg-jobonboard-purple hover:bg-jobonboard-purple/90 mb-2"
                            onClick={() => handleApply(job.id)}
                          >
                            Apply Now
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full" 
                            onClick={() => handleSaveJob(job.id)}
                          >
                            {savedJobs.includes(job.id) ? (
                              <>
                                <Heart className="h-4 w-4 mr-1 fill-jobonboard-purple text-jobonboard-purple" />
                                Remove from Saved
                              </>
                            ) : (
                              <>
                                <Heart className="h-4 w-4 mr-1" />
                                Save this Job
                              </>
                            )}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <DialogFooter>
                  <Button 
                    className="bg-jobonboard-purple hover:bg-jobonboard-purple/90"
                    onClick={() => handleApply(job.id)}
                  >
                    Apply for this Job
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
