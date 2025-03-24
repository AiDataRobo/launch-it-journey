
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

type WelcomeSectionProps = {
  userName: string;
};

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ userName }) => {
  return (
    <Card className="bg-gradient-to-r from-jobonboard-purple/90 to-jobonboard-blue/80 text-white overflow-hidden">
      <CardContent className="p-6 relative flex items-center">
        <div className="z-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Welcome back, {userName}!
          </h1>
          <p className="text-white/90 max-w-xl">
            Let's advance your career today! Your dashboard is updated with fresh opportunities and insights tailored just for you.
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 hidden md:block">
          <div className="w-32 h-32 rounded-full bg-white/10 animate-pulse-slow" />
        </div>
        <div className="absolute right-10 bottom-0 hidden md:block">
          <div className="w-16 h-16 rounded-full bg-white/5" />
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeSection;
