
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Calendar, 
  DollarSign, 
  Building, 
  Share2, 
  Flag, 
  ChevronLeft, 
  Bookmark,
  BookmarkCheck,
  ExternalLink 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { allJobListings } from '@/components/job-search/data/jobListingsData';
import { companyLogos } from '@/components/job-search/data/companyLogos';

const JobDetails = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const [job, setJob] = useState(allJobListings.find(job => job.id === parseInt(jobId || '0')));
  const [isSaved, setIsSaved] = useState(false);
  const [similarJobs, setSimilarJobs] = useState<typeof allJobListings>([]);
  const { toast } = useToast();
  
  useEffect(() => {
    // Find job based on the URL parameter
    const foundJob = allJobListings.find(job => job.id === parseInt(jobId || '0'));
    setJob(foundJob);
    
    // Find similar jobs based on category
    if (foundJob) {
      const similar = allJobListings
        .filter(j => j.category === foundJob.category && j.id !== foundJob.id)
        .slice(0, 3);
      setSimilarJobs(similar);
    }
    
    // Scroll to top when job changes
    window.scrollTo(0, 0);
  }, [jobId]);
  
  if (!job) {
    return (
      <DashboardLayout>
        <div className="container mx-auto px-4 py-8">
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-8">
              <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
              <p className="text-muted-foreground mb-6">The job you're looking for doesn't exist or has been removed.</p>
              <Link to="/job-search">
                <Button>
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back to Job Search
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    );
  }
  
  const handleSaveJob = () => {
    setIsSaved(!isSaved);
    toast({
      title: isSaved ? "Job removed" : "Job saved",
      description: isSaved 
        ? "Job has been removed from your saved list" 
        : "Job has been added to your saved list",
    });
  };
  
  const handleShareJob = () => {
    if (navigator.share) {
      navigator.share({
        title: `${job.title} at ${job.company}`,
        text: `Check out this job: ${job.title} at ${job.company}`,
        url: window.location.href,
      })
      .catch(() => {
        navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link copied to clipboard",
          description: "You can now paste the link anywhere",
        });
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied to clipboard",
        description: "You can now paste the link anywhere",
      });
    }
  };
  
  const handleReportJob = () => {
    toast({
      title: "Job reported",
      description: "Thank you for your feedback. Our team will review this job posting.",
    });
  };
  
  const handleApplyJob = () => {
    toast({
      title: "Application started",
      description: "You're being redirected to the application form",
    });
    // Here you would navigate to an application form or open a modal
  };
  
  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Back to search link */}
        <Link 
          to="/job-search" 
          className="inline-flex items-center text-jobonboard-purple mb-6 hover:underline"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Job Search
        </Link>
        
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Job details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold">{job.title}</h1>
                    <div className="flex items-center mt-2 text-gray-600">
                      <Building className="h-4 w-4 mr-1" />
                      <span className="mr-4">{job.company}</span>
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{job.location}</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-jobonboard-purple/10 text-jobonboard-purple border-jobonboard-purple/20">
                        {job.type}
                      </Badge>
                      <Badge variant="outline" className="bg-jobonboard-blue/10 text-jobonboard-blue border-jobonboard-blue/20">
                        {job.experience}
                      </Badge>
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
                    </div>
                  </div>
                  <img
                    src={companyLogos[job.company as keyof typeof companyLogos]}
                    alt={job.company}
                    className="w-16 h-16 rounded-md object-cover border"
                  />
                </div>
                
                <div className="flex flex-wrap justify-between items-center mt-6 pt-6 border-t">
                  <div className="space-y-2 mb-4 md:mb-0">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-lg font-medium">{job.salary}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-sm text-gray-600">Posted {job.posted}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleSaveJob}
                      className={isSaved ? "text-jobonboard-purple" : ""}
                    >
                      {isSaved ? (
                        <BookmarkCheck className="h-4 w-4 mr-1 fill-jobonboard-purple text-jobonboard-purple" />
                      ) : (
                        <Bookmark className="h-4 w-4 mr-1" />
                      )}
                      {isSaved ? "Saved" : "Save"}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={handleShareJob}
                    >
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={handleReportJob}
                    >
                      <Flag className="h-4 w-4 mr-1" />
                      Report
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Job description */}
            <Card>
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
            </Card>
          </div>
          
          {/* Right column - Company info and similar jobs */}
          <div className="space-y-6">
            {/* Company info */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Company Overview</h2>
                <div className="flex items-center mb-4">
                  <img
                    src={companyLogos[job.company as keyof typeof companyLogos]}
                    alt={job.company}
                    className="w-16 h-16 rounded-md object-cover border mr-4"
                  />
                  <div>
                    <h3 className="font-medium text-lg">{job.company}</h3>
                    <p className="text-sm text-gray-500">Technology · 50-200 employees</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">
                  {job.company} is a leading company in the {job.category} sector, known for its innovative solutions and excellent work culture.
                </p>
                
                <Button variant="outline" className="w-full" onClick={handleShareJob}>
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Company Website
                </Button>
              </CardContent>
            </Card>
            
            {/* Similar jobs */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Similar Jobs</h2>
                
                {similarJobs.length > 0 ? (
                  <div className="space-y-4">
                    {similarJobs.map((similarJob) => (
                      <div key={similarJob.id} className="border rounded-lg p-4 hover:border-jobonboard-purple/50 transition-all">
                        <Link to={`/job-details/${similarJob.id}`}>
                          <h3 className="font-medium hover:text-jobonboard-purple">{similarJob.title}</h3>
                        </Link>
                        <div className="flex items-center mt-1 text-gray-600 text-sm">
                          <Building className="h-3 w-3 mr-1" />
                          <span className="mr-3">{similarJob.company}</span>
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>{similarJob.location}</span>
                        </div>
                        <div className="mt-2 text-sm text-jobonboard-purple font-medium">
                          {similarJob.salary}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-4">No similar jobs found</p>
                )}
              </CardContent>
            </Card>
            
            {/* Quick apply */}
            <Card>
              <CardContent className="p-6 bg-gradient-to-br from-jobonboard-purple/10 to-jobonboard-blue/5">
                <h2 className="text-xl font-semibold mb-2">Ready to Apply?</h2>
                <p className="text-gray-700 mb-4">
                  This job matches your skills and experience. Don't miss this opportunity!
                </p>
                <Button 
                  onClick={handleApplyJob}
                  className="w-full bg-jobonboard-purple hover:bg-jobonboard-purple/90"
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default JobDetails;

