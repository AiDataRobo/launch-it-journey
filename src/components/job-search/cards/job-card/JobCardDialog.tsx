
import React from 'react';
import { Building, MapPin, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter 
} from '@/components/ui/dialog';
import { JobListing } from '../../data/jobListingsData';
import { companyLogos } from '../../data/companyLogos';
import { Link } from 'react-router-dom';

interface JobCardDialogProps {
  job: JobListing;
  savedJobs: number[];
  handleSaveJob: (jobId: number) => void;
  handleApply: (jobId: number) => void;
}

export const JobCardDialog: React.FC<JobCardDialogProps> = ({ 
  job, 
  savedJobs, 
  handleSaveJob, 
  handleApply 
}) => {
  return (
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
                <Link to={`/job-details/${job.id}`} className="w-full">
                  <Button className="w-full bg-jobonboard-purple hover:bg-jobonboard-purple/90 mb-2">
                    View Full Details
                  </Button>
                </Link>
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
  );
};
