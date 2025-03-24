
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const JobRecommendations = () => {
  const jobs = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovators Inc.",
      location: "San Francisco, CA (Remote)",
      salary: "$120,000 - $150,000",
      matchScore: 95,
      postDate: "2 days ago",
      tags: ["React", "TypeScript", "UI/UX"],
    },
    {
      title: "Full Stack Engineer",
      company: "FutureSoft Solutions",
      location: "New York, NY (Hybrid)",
      salary: "$110,000 - $135,000",
      matchScore: 88,
      postDate: "1 week ago",
      tags: ["JavaScript", "Node.js", "MongoDB"],
    },
    {
      title: "Product Manager",
      company: "Growth Ventures",
      location: "Austin, TX (On-site)",
      salary: "$125,000 - $155,000",
      matchScore: 82,
      postDate: "3 days ago",
      tags: ["Product Strategy", "Agile", "B2B"],
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex items-center justify-between">
          Recommended Jobs
          <Button variant="link" className="text-jobonboard-purple h-auto p-0">
            View All
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {jobs.map((job, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{job.title}</h3>
                  <p className="text-sm text-muted-foreground">{job.company}</p>
                  <p className="text-sm text-muted-foreground">{job.location}</p>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  {job.matchScore}% Match
                </Badge>
              </div>
              
              <div className="mt-2 flex items-center text-sm text-muted-foreground">
                <span className="mr-4">{job.salary}</span>
                <span>{job.postDate}</span>
              </div>
              
              <div className="mt-3 flex flex-wrap gap-2">
                {job.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-4 flex gap-2">
                <Button size="sm" className="bg-jobonboard-purple hover:bg-jobonboard-purple-light">
                  Apply Now
                </Button>
                <Button size="sm" variant="outline">
                  Save
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <Button variant="outline" className="w-full mt-4">
          Load More Jobs
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobRecommendations;
