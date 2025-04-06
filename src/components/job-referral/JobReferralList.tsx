
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import JobReferralCard from './JobReferralCard';
import ReferralRequest from './ReferralRequest';
import MyReferrals from './MyReferrals';
import { useJobReferrals, JobReferralPost, ReferralRequest as ReferralRequestType } from '@/hooks/use-job-referrals';
import { useAuth } from '@/context/AuthContext';
import { toast } from '@/hooks/use-toast';

const JobReferralList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const { jobPostings, isLoading, error, fetchUserReferralRequests } = useJobReferrals();
  const [myRequests, setMyRequests] = useState<ReferralRequestType[]>([]);
  const { user } = useAuth();
  
  const filteredJobs = jobPostings.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRequestReferral = (jobId: string) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to request referrals.",
      });
      return;
    }
    setSelectedJob(jobId);
  };

  const handleCloseRequestModal = () => {
    setSelectedJob(null);
  };

  // Load user's referral requests when authenticated
  useEffect(() => {
    const loadUserRequests = async () => {
      if (user) {
        try {
          const requests = await fetchUserReferralRequests();
          setMyRequests(requests);
        } catch (err) {
          console.error('Failed to load user requests:', err);
        }
      }
    };
    
    loadUserRequests();
  }, [user, fetchUserReferralRequests]);

  return (
    <div className="animate-fade-in">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input 
            className="pl-10" 
            placeholder="Search by job title, company or location" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="hidden sm:flex">
            Filter
          </Button>
        </div>
      </div>

      <Tabs defaultValue="available">
        <TabsList className="mb-4 grid w-full grid-cols-3 bg-gray-100">
          <TabsTrigger value="available">Available Jobs</TabsTrigger>
          <TabsTrigger value="my-requests">My Requests</TabsTrigger>
          <TabsTrigger value="offer-referrals">Offer Referrals</TabsTrigger>
        </TabsList>
        
        <TabsContent value="available" className="mt-4">
          {isLoading ? (
            <div className="flex h-60 items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-jobonboard-purple"></div>
            </div>
          ) : error ? (
            <div className="flex h-60 flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
              <h3 className="text-lg font-medium text-red-500">Error loading jobs</h3>
              <p className="text-sm text-gray-500">{error.message}</p>
              <Button onClick={() => window.location.reload()} className="mt-4">
                Try Again
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredJobs.map(job => (
                <JobReferralCard 
                  key={job.id} 
                  job={job} 
                  onRequestReferral={handleRequestReferral} 
                />
              ))}
            </div>
          )}

          {!isLoading && !error && filteredJobs.length === 0 && (
            <div className="flex h-60 flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
              <Search className="mb-2 h-12 w-12 text-gray-300" />
              <h3 className="text-lg font-medium">No jobs found</h3>
              <p className="text-sm text-gray-500">Try adjusting your search criteria</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="my-requests">
          <MyReferrals referralRequests={myRequests} />
        </TabsContent>
        
        <TabsContent value="offer-referrals">
          <div className="rounded-lg border p-6">
            <h2 className="mb-4 text-xl font-bold">Become a Referrer</h2>
            <p className="mb-4">
              As a verified professional, you can help others in your network by offering referrals to your company.
              Verify your professional status to start offering referrals.
            </p>
            <Button className="bg-jobonboard-purple hover:bg-jobonboard-purple-light">
              Verify Professional Status
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      {selectedJob !== null && (
        <ReferralRequest 
          jobId={selectedJob} 
          isOpen={selectedJob !== null}
          onClose={handleCloseRequestModal}
        />
      )}
    </div>
  );
};

export default JobReferralList;
