
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import { JobListing } from '../job-search/data/jobListingsData';

interface JobDescriptionProps {
  job: JobListing;
  handleApplyJob: () => void;
}

export const JobDescription: React.FC<JobDescriptionProps> = ({ job, handleApplyJob }) => {
  return (
    <CardContent className="p-6">
      <h2 className="text-xl font-semibold mb-4">Job Description</h2>
      <p className="text-gray-700 mb-6">{job.description}</p>
      
      <h3 className="text-lg font-semibold mb-3">Responsibilities</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
        <li>Lead the development of frontend components using React and TypeScript</li>
        <li>Collaborate with designers to implement UI/UX designs with precision</li>
        <li>Work with backend developers to integrate APIs and ensure data consistency</li>
        <li>Write clean, maintainable, and reusable code following best practices</li>
        <li>Participate in code reviews and provide constructive feedback</li>
      </ul>
      
      <h3 className="text-lg font-semibold mb-3">Requirements</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
        <li>{job.experience} level experience in software development</li>
        <li>Strong understanding of modern JavaScript and web technologies</li>
        <li>Experience with responsive design and cross-browser compatibility</li>
        <li>Excellent problem-solving skills and attention to detail</li>
        <li>Ability to work in a fast-paced, collaborative environment</li>
      </ul>
      
      <h3 className="text-lg font-semibold mb-3">Required Skills</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        {job.skills.map((skill, index) => (
          <Badge key={index} variant="outline" className="bg-jobonboard-purple/10 text-jobonboard-purple border-jobonboard-purple/20">
            {skill}
          </Badge>
        ))}
      </div>
      
      <div className="mt-8">
        <Button 
          onClick={handleApplyJob}
          size="lg" 
          className="w-full md:w-auto bg-jobonboard-purple hover:bg-jobonboard-purple/90"
        >
          Apply Now
        </Button>
      </div>
    </CardContent>
  );
};
