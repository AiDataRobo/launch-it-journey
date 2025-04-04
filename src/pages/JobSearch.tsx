
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Briefcase, 
  MapPin, 
  Building, 
  Search, 
  Filter, 
  Heart, 
  BookmarkPlus, 
  Clock, 
  Calendar, 
  ChevronDown, 
  Check
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

// Sample company logos (in a real app, these would be from an API)
const companyLogos = {
  "TechGlobal Inc.": "https://placehold.co/60x60?text=TG",
  "Creative Solutions": "https://placehold.co/60x60?text=CS",
  "StartUp Innovations": "https://placehold.co/60x60?text=SI",
  "DataMind Analytics": "https://placehold.co/60x60?text=DM",
  "CloudScale Systems": "https://placehold.co/60x60?text=CSS",
  "Future Finance": "https://placehold.co/60x60?text=FF",
  "HealthTech Innovations": "https://placehold.co/60x60?text=HT",
  "GreenEarth Solutions": "https://placehold.co/60x60?text=GE"
};

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
  
  // Mock job listings - in a real application, this would come from an API
  const allJobListings = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechGlobal Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      isRemote: false,
      experience: 'Senior',
      salary: '$120,000 - $150,000',
      posted: '2 days ago',
      category: 'Web Development',
      description: 'We are looking for a Senior Frontend Developer with extensive experience in React and TypeScript to join our product team. You will be responsible for building high-quality user interfaces and implementing new features.',
      skills: ['React', 'TypeScript', 'Tailwind CSS'],
      featured: true,
      urgent: false,
      fresherFriendly: false
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      company: 'Creative Solutions',
      location: 'Remote',
      type: 'Contract',
      isRemote: true,
      experience: 'Mid',
      salary: '$90,000 - $110,000',
      posted: '1 week ago',
      category: 'Design',
      description: 'Creative Solutions is hiring a UX/UI Designer to create beautiful and functional interfaces for our clients. You will work closely with product managers and developers to deliver outstanding designs.',
      skills: ['Figma', 'User Research', 'Prototyping'],
      featured: false,
      urgent: true,
      fresherFriendly: false
    },
    {
      id: 3,
      title: 'Full Stack Engineer',
      company: 'StartUp Innovations',
      location: 'New York, NY',
      type: 'Full-time',
      isRemote: false,
      experience: 'Mid',
      salary: '$130,000 - $160,000',
      posted: '3 days ago',
      category: 'Web Development',
      description: 'As a Full Stack Engineer at StartUp Innovations, you will build and maintain our core product features. You'll work across the entire stack, from database to frontend, delivering a seamless user experience.',
      skills: ['Node.js', 'React', 'MongoDB'],
      featured: true,
      urgent: false,
      fresherFriendly: false
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'DataMind Analytics',
      location: 'Remote',
      type: 'Full-time',
      isRemote: true,
      experience: 'Senior',
      salary: '$140,000 - $180,000',
      posted: '5 days ago',
      category: 'Data Science',
      description: 'We are seeking a Data Scientist to analyze large datasets and build machine learning models to solve complex business problems. You will work with cross-functional teams to implement data-driven solutions.',
      skills: ['Python', 'TensorFlow', 'SQL'],
      featured: false,
      urgent: false,
      fresherFriendly: false
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      company: 'CloudScale Systems',
      location: 'Chicago, IL',
      type: 'Full-time',
      isRemote: false,
      experience: 'Mid',
      salary: '$110,000 - $140,000',
      posted: '1 week ago',
      category: 'DevOps',
      description: 'Join our team as a DevOps Engineer to build and maintain our cloud infrastructure. You will work on automating deployment processes and ensuring system reliability and scalability.',
      skills: ['AWS', 'Kubernetes', 'Terraform'],
      featured: false,
      urgent: false,
      fresherFriendly: false
    },
    {
      id: 6,
      title: 'Product Manager Intern',
      company: 'Future Finance',
      location: 'Boston, MA',
      type: 'Internship',
      isRemote: false,
      experience: 'Fresher',
      salary: '$25 - $30 per hour',
      posted: '2 days ago',
      category: 'Product Management',
      description: 'Gain valuable experience as a Product Manager Intern. You will assist in product development, conduct market research, and work closely with design and engineering teams.',
      skills: ['Market Research', 'Product Strategy', 'Agile'],
      featured: false,
      urgent: false,
      fresherFriendly: true
    },
    {
      id: 7,
      title: 'Junior Software Developer',
      company: 'HealthTech Innovations',
      location: 'Remote',
      type: 'Part-time',
      isRemote: true,
      experience: 'Junior',
      salary: '$70,000 - $90,000',
      posted: '4 days ago',
      category: 'Web Development',
      description: 'Great opportunity for junior developers to join a growing health tech company. You will work on feature development and bug fixes for our telehealth platform.',
      skills: ['JavaScript', 'React', 'HTML/CSS'],
      featured: false,
      urgent: true,
      fresherFriendly: true
    },
    {
      id: 8,
      title: 'Sustainability Consultant',
      company: 'GreenEarth Solutions',
      location: 'Seattle, WA',
      type: 'Freelance',
      isRemote: true,
      experience: 'Mid',
      salary: 'Project-based',
      posted: '1 week ago',
      category: 'Consulting',
      description: 'We are looking for a Sustainability Consultant to work on environmental impact assessment projects. You will help clients develop and implement sustainability strategies.',
      skills: ['Environmental Science', 'Data Analysis', 'Reporting'],
      featured: false,
      urgent: false,
      fresherFriendly: false
    }
  ];

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
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="pt-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input 
                    placeholder="Job title, keywords, or company" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/80 text-gray-800"
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input 
                    placeholder="Location" 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="pl-10 bg-white/80 text-gray-800"
                  />
                </div>
                <div className="w-full lg:w-auto flex gap-2">
                  <div className="flex items-center mr-2 whitespace-nowrap">
                    <input 
                      type="checkbox" 
                      id="remote-only" 
                      className="mr-2"
                      checked={isRemoteOnly}
                      onChange={() => setIsRemoteOnly(!isRemoteOnly)}
                    />
                    <label htmlFor="remote-only" className="text-sm md:text-base">Remote only</label>
                  </div>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="w-full md:w-[180px] bg-white/80 text-gray-800">
                      <SelectValue placeholder="Job Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Categories</SelectItem>
                      <SelectItem value="Web Development">Web Development</SelectItem>
                      <SelectItem value="Data Science">Data Science</SelectItem>
                      <SelectItem value="DevOps">DevOps</SelectItem>
                      <SelectItem value="Design">Design</SelectItem>
                      <SelectItem value="Product Management">Product Management</SelectItem>
                      <SelectItem value="Consulting">Consulting</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="bg-jobonboard-purple hover:bg-jobonboard-purple/90 text-white">
                    Search
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* View Toggle and Sort */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-muted-foreground">{filteredJobs.length} jobs found</span>
            <div className="flex border rounded">
              <button 
                className={`p-2 ${viewMode === 'list' ? 'bg-jobonboard-purple/10 text-jobonboard-purple' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <Briefcase className="h-5 w-5" />
              </button>
              <button 
                className={`p-2 ${viewMode === 'grid' ? 'bg-jobonboard-purple/10 text-jobonboard-purple' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <div className="flex flex-wrap w-5 h-5">
                  <div className="w-2 h-2 m-0.5 bg-current"></div>
                  <div className="w-2 h-2 m-0.5 bg-current"></div>
                  <div className="w-2 h-2 m-0.5 bg-current"></div>
                  <div className="w-2 h-2 m-0.5 bg-current"></div>
                </div>
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" onClick={resetFilters} className="text-sm">
              <Filter className="h-4 w-4 mr-1" /> Reset Filters
            </Button>
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Sort by: Latest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="relevant">Relevance</SelectItem>
                <SelectItem value="salary-high">Salary: High to Low</SelectItem>
                <SelectItem value="salary-low">Salary: Low to High</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Featured Jobs (if any) */}
        {sortedJobs.some(job => job.featured) && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-jobonboard-purple">✨</span> Featured Opportunities
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {sortedJobs
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
        )}

        {/* Main Content Area with Sidebar and Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
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
                  {sortedJobs.slice(0, 3).map(job => (
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
          
          {/* Job Listings */}
          <div className="md:col-span-3">
            <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "space-y-4"}>
              {filteredJobs.length === 0 ? (
                <Card className="col-span-full p-8 text-center">
                  <div className="flex flex-col items-center justify-center py-12">
                    <Search className="h-16 w-16 text-gray-300 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
                    <p className="text-gray-500 mb-4">
                      We couldn't find any jobs matching your criteria.
                    </p>
                    <Button onClick={resetFilters}>
                      Reset Filters
                    </Button>
                  </div>
                </Card>
              ) : (
                sortedJobs
                  .filter(job => !job.featured || filteredJobs.length <= 2)
                  .map(job => (
                    <Card 
                      key={job.id} 
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
                  ))
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default JobSearch;
