
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import WelcomeSection from '@/components/dashboard/WelcomeSection';
import ProfileProgress from '@/components/dashboard/ProfileProgress';
import QuickAccessTiles from '@/components/dashboard/QuickAccessTiles';
import JobRecommendations from '@/components/dashboard/JobRecommendations';
import CareerGrowthHub from '@/components/dashboard/CareerGrowthHub';
import PremiumServices from '@/components/dashboard/PremiumServices';
import CommunitySection from '@/components/dashboard/CommunitySection';
import DashboardCustomization from '@/components/dashboard/DashboardCustomization';
import NotificationPanel from '@/components/dashboard/NotificationPanel';
import { useDashboardData } from '@/hooks/use-dashboard-data';
import { toast } from '@/hooks/use-toast';

const Dashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { stats, isLoading: isLoadingDashboard, error } = useDashboardData();

  useEffect(() => {
    // Redirect if not logged in
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    // Show error toast if there was an error fetching dashboard data
    if (error) {
      toast({
        title: "Error loading dashboard",
        description: "Failed to load some dashboard data. Please try again.",
        variant: "destructive"
      });
    }
  }, [error]);

  if (loading || isLoadingDashboard) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse-slow text-jobonboard-purple font-semibold text-xl">
          Loading your career dashboard...
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <DashboardLayout>
      <div className="container mx-auto px-2 md:px-4">
        <WelcomeSection userName={user.user_metadata?.full_name || user.email?.split('@')[0] || 'there'} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mt-6">
          <div className="lg:col-span-2 space-y-4 lg:space-y-6">
            <ProfileProgress 
              profile={{ 
                full_name: user.user_metadata?.full_name,
                completeness: stats.profileCompleteness
              }} 
            />
            <QuickAccessTiles 
              stats={{
                applications: stats.applicationCount,
                referrals: stats.referralCount,
                interviews: stats.interviewsScheduled,
                pendingReferrals: stats.pendingReferrals
              }}
            />
            <JobRecommendations jobs={stats.recommendedJobs} />
          </div>
          
          <div className="space-y-4 lg:space-y-6">
            <NotificationPanel notifications={stats.recentActivity.slice(0, 3)} />
            <CareerGrowthHub events={stats.upcomingEvents} courses={stats.popularCourses} />
            <PremiumServices services={stats.premiumServices} />
            <CommunitySection discussions={stats.communityDiscussions} />
          </div>
        </div>
        
        <div className="mt-6 lg:mt-8">
          <DashboardCustomization />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
