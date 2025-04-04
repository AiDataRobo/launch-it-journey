
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { useToast } from "@/hooks/use-toast";

// Import job search components
import { allJobListings } from '@/components/job-search/data/jobListingsData';
import SearchBar from '@/components/job-search/search/SearchBar';
import ViewToggle from '@/components/job-search/layout/ViewToggle';
import FeaturedJobs from '@/components/job-search/cards/FeaturedJobs';
import FiltersSidebar from '@/components/job-search/filters/FiltersSidebar';
import JobList from '@/components/job-search/cards/JobList';

const JobSearch = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [isRemoteOnly, setIsRemoteOnly] = useState(false);
  const [category, setCategory] = useState('');
  const [jobType, setJobType] = useState<string[]>([]);
  const [experienceLevel, setExperienceLevel] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [savedJobs, setSavedJobs] = useState<number[]>([]);
  
  // Filter jobs based on search and filter criteria
  const filteredJobs = allJobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesLocation = location === '' || job.location.toLowerCase().includes(location.toLowerCase());
    
    const matchesRemote = !isRemoteOnly || job.isRemote;
    
    const matchesCategory = category === '' || job.category === category;
    
    const matchesJobType = jobType.length === 0 || jobType.includes(job.type);
    
    const matchesExperience = experienceLevel.length === 0 || experienceLevel.includes(job.experience);
    
    return matchesSearch && matchesLocation && matchesRemote && matchesCategory && matchesJobType && matchesExperience;
  });

  // Sort featured jobs first
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  // Handle job save
  const handleSaveJob = (jobId: number) => {
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter(id => id !== jobId));
      toast({
        title: "Job removed",
        description: "Job has been removed from your saved list",
      });
    } else {
      setSavedJobs([...savedJobs, jobId]);
      toast({
        title: "Job saved",
        description: "Job has been added to your saved list",
      });
    }
  };

  // Handle job type filter toggle
  const toggleJobTypeFilter = (type: string) => {
    if (jobType.includes(type)) {
      setJobType(jobType.filter(t => t !== type));
    } else {
      setJobType([...jobType, type]);
    }
  };

  // Handle experience level filter toggle
  const toggleExperienceFilter = (level: string) => {
    if (experienceLevel.includes(level)) {
      setExperienceLevel(experienceLevel.filter(l => l !== level));
    } else {
      setExperienceLevel([...experienceLevel, level]);
    }
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm('');
    setLocation('');
    setIsRemoteOnly(false);
    setCategory('');
    setJobType([]);
    setExperienceLevel([]);
    toast({
      title: "Filters reset",
      description: "All search filters have been reset",
    });
  };

  // Handle apply
  const handleApply = (jobId: number) => {
    toast({
      title: "Application started",
      description: "You're being redirected to the application form",
    });
    // Here you would navigate to an application form or open a modal
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Hero Section */}
        <div className="mb-8 bg-gradient-to-r from-jobonboard-purple/80 to-jobonboard-blue/80 rounded-xl p-8 text-white shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Find Your Next Opportunity</h1>
          <p className="text-lg mb-6 max-w-2xl">
            Discover jobs, internships, and freelance gigs that match your skills and career goals.
          </p>
          
          <SearchBar 
            searchTerm={searchTerm}
            location={location}
            isRemoteOnly={isRemoteOnly}
            category={category}
            setSearchTerm={setSearchTerm}
            setLocation={setLocation}
            setIsRemoteOnly={setIsRemoteOnly}
            setCategory={setCategory}
          />
        </div>

        {/* View Toggle and Sort */}
        <ViewToggle 
          jobCount={filteredJobs.length}
          viewMode={viewMode}
          setViewMode={setViewMode}
          resetFilters={resetFilters}
        />

        {/* Featured Jobs (if any) */}
        <FeaturedJobs 
          jobs={sortedJobs}
          savedJobs={savedJobs}
          handleSaveJob={handleSaveJob}
          handleApply={handleApply}
        />

        {/* Main Content Area with Sidebar and Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <FiltersSidebar 
            jobType={jobType}
            experienceLevel={experienceLevel}
            toggleJobTypeFilter={toggleJobTypeFilter}
            toggleExperienceFilter={toggleExperienceFilter}
            resetFilters={resetFilters}
            recentJobs={sortedJobs}
          />
          
          {/* Job Listings */}
          <div className="md:col-span-3">
            <JobList 
              jobs={sortedJobs.filter(job => !job.featured || filteredJobs.length <= 2)}
              viewMode={viewMode}
              savedJobs={savedJobs}
              handleSaveJob={handleSaveJob}
              handleApply={handleApply}
              resetFilters={resetFilters}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default JobSearch;
