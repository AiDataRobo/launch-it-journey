
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Briefcase, MapPin, Building, Search } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const JobSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock job listings
  const jobListings = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechGlobal Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120,000 - $150,000',
      posted: '2 days ago',
      skills: ['React', 'TypeScript', 'Tailwind CSS']
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      company: 'Creative Solutions',
      location: 'Remote',
      type: 'Contract',
      salary: '$90,000 - $110,000',
      posted: '1 week ago',
      skills: ['Figma', 'User Research', 'Prototyping']
    },
    {
      id: 3,
      title: 'Full Stack Engineer',
      company: 'StartUp Innovations',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$130,000 - $160,000',
      posted: '3 days ago',
      skills: ['Node.js', 'React', 'MongoDB']
    }
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Job Search</h1>
          <p className="text-gray-600 mt-2">Find your next career opportunity</p>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Job title, keywords, or company" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="Location or Remote" className="pl-10" />
              </div>
              <Button className="bg-jobonboard-purple hover:bg-jobonboard-purple/90">
                Search Jobs
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Job Type</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="full-time" className="mr-2" />
                      <label htmlFor="full-time">Full-time</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="part-time" className="mr-2" />
                      <label htmlFor="part-time">Part-time</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="contract" className="mr-2" />
                      <label htmlFor="contract">Contract</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="remote" className="mr-2" />
                      <label htmlFor="remote">Remote</label>
                    </div>
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="font-medium mb-2">Experience Level</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="entry" className="mr-2" />
                      <label htmlFor="entry">Entry Level</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="mid" className="mr-2" />
                      <label htmlFor="mid">Mid Level</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="senior" className="mr-2" />
                      <label htmlFor="senior">Senior Level</label>
                    </div>
                  </div>
                </div>
                <Separator />
                <Button variant="outline" className="w-full">Reset Filters</Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-muted-foreground">{jobListings.length} jobs found</p>
                <select className="border rounded p-2 text-sm">
                  <option>Most Recent</option>
                  <option>Relevance</option>
                  <option>Salary: High to Low</option>
                  <option>Salary: Low to High</option>
                </select>
              </div>
              
              {jobListings.map(job => (
                <Card key={job.id} className="hover:border-jobonboard-purple/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <div className="flex items-center mt-1 text-gray-600">
                          <Building className="h-4 w-4 mr-1" />
                          <span className="mr-4">{job.company}</span>
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {job.skills.map(skill => (
                            <Badge key={skill} variant="outline" className="bg-jobonboard-purple/10 text-jobonboard-purple border-jobonboard-purple/20">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 text-right">
                        <div className="text-jobonboard-purple font-medium">{job.salary}</div>
                        <div className="text-sm text-gray-500 mt-1">{job.type}</div>
                        <div className="text-xs text-gray-400 mt-1">Posted {job.posted}</div>
                      </div>
                    </div>
                    <div className="flex justify-end mt-4 gap-2">
                      <Button variant="outline">Save</Button>
                      <Button className="bg-jobonboard-purple hover:bg-jobonboard-purple/90">Apply</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default JobSearch;
