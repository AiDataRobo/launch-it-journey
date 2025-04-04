
import React from 'react';
import { Filter, Clock } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { JobListing } from './jobListingsData';
import { companyLogos } from './companyLogos';

interface FiltersSidebarProps {
  jobType: string[];
  experienceLevel: string[];
  toggleJobTypeFilter: (type: string) => void;
  toggleExperienceFilter: (level: string) => void;
  resetFilters: () => void;
  recentJobs: JobListing[];
}

const FiltersSidebar: React.FC<FiltersSidebarProps> = ({
  jobType,
  experienceLevel,
  toggleJobTypeFilter,
  toggleExperienceFilter,
  resetFilters,
  recentJobs
}) => {
  return (
    <div className="md:col-span-1">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Filter className="h-5 w-5 mr-2" /> Filters
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Job Type</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="full-time" 
                  className="mr-2"
                  checked={jobType.includes('Full-time')}
                  onChange={() => toggleJobTypeFilter('Full-time')}
                />
                <label htmlFor="full-time">Full-time</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="part-time" 
                  className="mr-2"
                  checked={jobType.includes('Part-time')}
                  onChange={() => toggleJobTypeFilter('Part-time')}
                />
                <label htmlFor="part-time">Part-time</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="contract" 
                  className="mr-2"
                  checked={jobType.includes('Contract')}
                  onChange={() => toggleJobTypeFilter('Contract')}
                />
                <label htmlFor="contract">Contract</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="internship" 
                  className="mr-2"
                  checked={jobType.includes('Internship')}
                  onChange={() => toggleJobTypeFilter('Internship')}
                />
                <label htmlFor="internship">Internship</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="freelance" 
                  className="mr-2"
                  checked={jobType.includes('Freelance')}
                  onChange={() => toggleJobTypeFilter('Freelance')}
                />
                <label htmlFor="freelance">Freelance</label>
              </div>
            </div>
          </div>
          <Separator />
          
          <div>
            <h3 className="font-medium mb-2">Experience Level</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="fresher" 
                  className="mr-2"
                  checked={experienceLevel.includes('Fresher')}
                  onChange={() => toggleExperienceFilter('Fresher')}
                />
                <label htmlFor="fresher">Fresher</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="junior" 
                  className="mr-2"
                  checked={experienceLevel.includes('Junior')}
                  onChange={() => toggleExperienceFilter('Junior')}
                />
                <label htmlFor="junior">Junior</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="mid" 
                  className="mr-2"
                  checked={experienceLevel.includes('Mid')}
                  onChange={() => toggleExperienceFilter('Mid')}
                />
                <label htmlFor="mid">Mid-Level</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="senior" 
                  className="mr-2"
                  checked={experienceLevel.includes('Senior')}
                  onChange={() => toggleExperienceFilter('Senior')}
                />
                <label htmlFor="senior">Senior</label>
              </div>
            </div>
          </div>
          <Separator />
          
          <div>
            <h3 className="font-medium mb-2">Skills</h3>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="cursor-pointer hover:bg-jobonboard-purple/10 hover:text-jobonboard-purple">React</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-jobonboard-purple/10 hover:text-jobonboard-purple">JavaScript</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-jobonboard-purple/10 hover:text-jobonboard-purple">Python</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-jobonboard-purple/10 hover:text-jobonboard-purple">Node.js</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-jobonboard-purple/10 hover:text-jobonboard-purple">Java</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-jobonboard-purple/10 hover:text-jobonboard-purple">TypeScript</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-jobonboard-purple/10 hover:text-jobonboard-purple">Figma</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-jobonboard-purple/10 hover:text-jobonboard-purple">UI/UX</Badge>
              </div>
            </div>
          </div>
          <Separator />
          
          <Button variant="outline" className="w-full" onClick={resetFilters}>Reset Filters</Button>
        </CardContent>
      </Card>

      {/* Recently Viewed Jobs */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Clock className="h-5 w-5 mr-2" /> Recently Viewed
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {recentJobs.slice(0, 3).map(job => (
              <div key={`recent-${job.id}`} className="flex items-start">
                <img 
                  src={companyLogos[job.company as keyof typeof companyLogos]} 
                  alt={job.company} 
                  className="w-8 h-8 rounded mr-2"
                />
                <div>
                  <h4 className="text-sm font-medium">{job.title}</h4>
                  <div className="text-xs text-gray-500">
                    {job.company} • {job.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FiltersSidebar;
