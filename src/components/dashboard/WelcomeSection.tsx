
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Bell, Calendar, MessageSquare, Briefcase } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

type WelcomeSectionProps = {
  userName: string;
};

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ userName }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Update time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    
    // Animate progress bar on mount
    setTimeout(() => setProgress(75), 300);
    
    return () => clearInterval(timer);
  }, []);
  
  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };
  
  const formatDate = () => {
    return currentTime.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <Card className="border-none shadow-lg overflow-hidden">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Left Section: Welcome Message */}
          <div className="bg-gradient-to-r from-jobonboard-purple/90 to-jobonboard-blue/80 text-white p-6 md:col-span-2">
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-white/80 text-sm font-medium">{formatDate()}</span>
                <h1 className="text-2xl md:text-3xl font-bold mt-1">
                  {getGreeting()}, {userName}!
                </h1>
              </div>
              
              <p className="text-white/90 max-w-xl">
                Your career dashboard is updated with fresh opportunities tailored for you. You have <Badge className="bg-white/20 hover:bg-white/30 text-white">5 new matches</Badge> today!
              </p>
              
              <div className="pt-2">
                <p className="text-white/80 text-sm mb-2">Weekly application goal: 75%</p>
                <Progress 
                  value={progress} 
                  className="h-2 bg-white/20" 
                  indicatorClassName="bg-white" 
                />
              </div>
            </div>
          </div>
          
          {/* Right Section: Quick Stats */}
          <div className="bg-background p-6">
            <h3 className="text-lg font-medium mb-4">Today's Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-jobonboard-purple/10 p-2 rounded-full">
                    <Briefcase className="h-5 w-5 text-jobonboard-purple" />
                  </div>
                  <span className="text-sm font-medium">New Job Matches</span>
                </div>
                <Badge>5</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <Bell className="h-5 w-5 text-amber-600" />
                  </div>
                  <span className="text-sm font-medium">Notifications</span>
                </div>
                <Badge variant="outline" className="border-amber-200 text-amber-700">3</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium">Upcoming Events</span>
                </div>
                <Badge variant="outline" className="border-blue-200 text-blue-700">2</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <MessageSquare className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-sm font-medium">Messages</span>
                </div>
                <Badge variant="outline" className="border-green-200 text-green-700">1</Badge>
              </div>
              
              <Button className="w-full mt-2 bg-jobonboard-purple hover:bg-jobonboard-purple-light">
                View All Activities
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeSection;
