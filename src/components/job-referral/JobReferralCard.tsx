
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin, Calendar, Users, ExternalLink } from 'lucide-react';
import { JobReferralPost } from '@/hooks/use-job-referrals';

interface JobReferralCardProps {
  job: JobReferralPost;
  onRequestReferral: (jobId: string) => void;
}

const JobReferralCard: React.FC<JobReferralCardProps> = ({ job, onRequestReferral }) => {
  return (
    <Card className="group transition-all hover:border-jobonboard-purple/50 hover:shadow-md">
      <CardContent className="p-5">
        <div className="mb-4 flex items-center">
          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
            {job.company_logo ? (
              <img src={job.company_logo} alt={`${job.company} logo`} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-500">
                {job.company.charAt(0)}
              </div>
            )}
          </div>
          <div className="ml-3">
            <h3 className="font-semibold line-clamp-1">{job.title}</h3>
            <p className="text-sm text-gray-600">{job.company}</p>
          </div>
        </div>

        <div className="mb-4 space-y-2 text-sm">
          <div className="flex items-center text-gray-600">
            <MapPin className="mr-2 h-4 w-4" />
            {job.location}
          </div>
          <div className="flex items-center text-gray-600">
            <Briefcase className="mr-2 h-4 w-4" />
            {job.job_type}
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="mr-2 h-4 w-4" />
            Posted {job.postedDate}
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="mr-2 h-4 w-4" />
            {job.referral_count} referrals available
          </div>
        </div>

        <div className="mb-3 flex flex-wrap gap-2">
          {job.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-800">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t bg-gray-50 px-5 py-3">
        <div className={`rounded-full px-3 py-1 text-xs font-medium ${
          job.urgency === 'High' ? 'bg-red-100 text-red-800' :
          job.urgency === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
          'bg-green-100 text-green-800'
        }`}>
          {job.urgency} urgency
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-1 text-gray-600"
            asChild
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-3.5 w-3.5" />
              <span>View</span>
            </a>
          </Button>
          
          <Button 
            size="sm" 
            className="bg-jobonboard-purple hover:bg-jobonboard-purple-light"
            onClick={() => onRequestReferral(job.id)}
          >
            Request Referral
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default JobReferralCard;
