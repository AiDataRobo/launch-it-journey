
import React, { useEffect, useState } from 'react';
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

const Dashboard = () => {
  const { user, loading, getProfile } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any>(null);
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);

  useEffect(() => {
    // Redirect if not logged in
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        setIsLoadingProfile(true);
        try {
          const { data, error } = await getProfile();
          if (!error && data) {
            setProfile(data);
          }
        } catch (error) {
          console.error('Error fetching profile:', error);
        } finally {
          setIsLoadingProfile(false);
        }
      }
    };

    fetchProfile();
  }, [user, getProfile]);

  if (loading || isLoadingProfile) {
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
        <WelcomeSection userName={profile?.full_name || user.email?.split('@')[0] || 'there'} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mt-6">
          <div className="lg:col-span-2 space-y-4 lg:space-y-6">
            <ProfileProgress profile={profile} />
            <QuickAccessTiles />
            <JobRecommendations />
          </div>
          
          <div className="space-y-4 lg:space-y-6">
            <NotificationPanel />
            <CareerGrowthHub />
            <PremiumServices />
            <CommunitySection />
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
