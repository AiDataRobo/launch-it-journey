
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';

export interface DashboardStats {
  applicationCount: number;
  referralCount: number;
  pendingReferrals: number;
  interviewsScheduled: number;
  profileCompleteness: number;
  recentActivity: RecentActivity[];
  recommendedJobs: JobRecommendation[];
  upcomingEvents: Event[];
  popularCourses: Course[];
  premiumServices: PremiumService[];
  communityDiscussions: CommunityDiscussion[];
}

export interface RecentActivity {
  id: string;
  type: 'application' | 'referral' | 'interview' | 'profile';
  title: string;
  company?: string;
  timestamp: string;
  status?: string;
}

export interface JobRecommendation {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  matchScore: number;
  postDate: string;
  tags: string[];
}

export interface Event {
  id: string;
  title: string;
  date: string;
  type: string;
  host: string;
}

export interface Course {
  id: string;
  title: string;
  provider: string;
  duration: string;
  badge?: string;
}

export interface PremiumService {
  id: string;
  title: string;
  description: string;
  price: string;
  highlight: string | null;
}

export interface CommunityDiscussion {
  id: string;
  title: string;
  user: {
    name: string;
    avatar: string | null;
    role: string;
  };
  replies: number;
}

export function useDashboardData() {
  const [stats, setStats] = useState<DashboardStats>({
    applicationCount: 0,
    referralCount: 0,
    pendingReferrals: 0,
    interviewsScheduled: 0,
    profileCompleteness: 75, // Default value
    recentActivity: [],
    recommendedJobs: [],
    upcomingEvents: [],
    popularCourses: [],
    premiumServices: [],
    communityDiscussions: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { user } = useAuth();

  const fetchDashboardData = async () => {
    if (!user) {
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      // Fetch referral requests count
      const { count: referralCount, error: referralError } = await supabase
        .from('referral_requests')
        .select('*', { count: 'exact', head: true })
        .eq('requester_id', user.id);

      if (referralError) throw referralError;

      // Fetch pending referrals count
      const { count: pendingCount, error: pendingError } = await supabase
        .from('referral_requests')
        .select('*', { count: 'exact', head: true })
        .eq('requester_id', user.id)
        .eq('status', 'Pending');

      if (pendingError) throw pendingError;

      // Fetch profile data to calculate completeness
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (profileError && profileError.code !== 'PGRST116') {
        throw profileError;
      }

      // Calculate profile completeness (simplified version)
      let profileCompleteness = 50; // Base value for having an account
      if (profileData?.full_name) profileCompleteness += 25;
      
      // Fetch recent activity
      const { data: recentReferrals, error: recentError } = await supabase
        .from('referral_requests')
        .select('id, job_id, status, requested_at, job:job_id(title, company)')
        .eq('requester_id', user.id)
        .order('requested_at', { ascending: false })
        .limit(5);

      if (recentError) throw recentError;

      // Format recent activity
      const recentActivity: RecentActivity[] = (recentReferrals || []).map((ref) => ({
        id: ref.id,
        type: 'referral',
        title: ref.job?.title || 'Unknown Job',
        company: ref.job?.company || 'Unknown Company',
        timestamp: ref.requested_at,
        status: ref.status
      }));

      // Fetch job recommendations
      // For now using sample data, but would be replaced with an actual query
      const recommendedJobs: JobRecommendation[] = [
        {
          id: "1",
          title: "Senior Frontend Developer",
          company: "Tech Innovators Inc.",
          location: "San Francisco, CA (Remote)",
          salary: "$120,000 - $150,000",
          matchScore: 95,
          postDate: "2 days ago",
          tags: ["React", "TypeScript", "UI/UX"],
        },
        {
          id: "2",
          title: "Full Stack Engineer",
          company: "FutureSoft Solutions",
          location: "New York, NY (Hybrid)",
          salary: "$110,000 - $135,000",
          matchScore: 88,
          postDate: "1 week ago",
          tags: ["JavaScript", "Node.js", "MongoDB"],
        },
        {
          id: "3",
          title: "Product Manager",
          company: "Growth Ventures",
          location: "Austin, TX (On-site)",
          salary: "$125,000 - $155,000",
          matchScore: 82,
          postDate: "3 days ago",
          tags: ["Product Strategy", "Agile", "B2B"],
        },
      ];

      // Fetch upcoming events
      const upcomingEvents: Event[] = [
        {
          id: "1",
          title: "Networking Mastery for Tech Professionals",
          date: "June 15, 2023",
          type: "Webinar",
          host: "Career Connect"
        },
        {
          id: "2",
          title: "Resume Workshop: Standing Out in 2023",
          date: "June 18, 2023",
          type: "Workshop",
          host: "Resume Experts"
        }
      ];

      // Fetch popular courses
      const popularCourses: Course[] = [
        {
          id: "1",
          title: "Leadership in Technology",
          provider: "TechLearn Academy",
          duration: "4 weeks",
          badge: "Trending"
        },
        {
          id: "2",
          title: "Communication Skills for Developers",
          provider: "Soft Skills Pro",
          duration: "2 weeks",
          badge: "Popular"
        }
      ];

      // Fetch premium services
      const premiumServices: PremiumService[] = [
        {
          id: "1",
          title: "1-on-1 Career Coaching",
          description: "Personal guidance from industry experts",
          price: "$99",
          highlight: "Most Popular"
        },
        {
          id: "2",
          title: "Job Search Assistant",
          description: "Dedicated expert for your job search",
          price: "$149",
          highlight: null
        },
        {
          id: "3",
          title: "Interview Guarantee",
          description: "Get an interview or your money back",
          price: "$199",
          highlight: "Best Value"
        }
      ];

      // Fetch community discussions
      const communityDiscussions: CommunityDiscussion[] = [
        {
          id: "1",
          title: "Tips for technical interviews at FAANG companies",
          user: {
            name: "Alex Johnson",
            avatar: null,
            role: "Senior Developer"
          },
          replies: 24
        },
        {
          id: "2",
          title: "Career switch from marketing to UX design",
          user: {
            name: "Sarah Williams",
            avatar: null,
            role: "UX Designer"
          },
          replies: 18
        }
      ];

      // Update dashboard stats
      setStats({
        applicationCount: 0, // We don't have this data yet
        referralCount: referralCount || 0,
        pendingReferrals: pendingCount || 0,
        interviewsScheduled: 0, // We don't have this data yet
        profileCompleteness,
        recentActivity,
        recommendedJobs,
        upcomingEvents,
        popularCourses,
        premiumServices,
        communityDiscussions
      });
    } catch (err) {
      console.error('Error fetching dashboard data:', err);
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, [user]);

  return {
    stats,
    isLoading,
    error,
    refreshData: fetchDashboardData
  };
}
