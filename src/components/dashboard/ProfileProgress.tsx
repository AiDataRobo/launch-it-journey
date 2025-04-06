
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ProfileProgressProps {
  profile?: {
    full_name?: string | null;
    completeness: number;
  }
}

const ProfileProgress: React.FC<ProfileProgressProps> = ({ 
  profile = { 
    full_name: null,
    completeness: 0
  } 
}) => {
  const completenessPercentage = profile.completeness;
  
  const getCompletionMessage = () => {
    if (completenessPercentage < 25) return "Just getting started!";
    if (completenessPercentage < 50) return "Making progress!";
    if (completenessPercentage < 75) return "Almost there!";
    if (completenessPercentage < 100) return "Nearly complete!";
    return "All done!";
  };

  const missingItems = [];
  if (!profile.full_name) missingItems.push("your full name");

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Profile Completion</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-4">
          <div className="flex justify-between mb-1 items-center">
            <span className="text-sm font-medium">{getCompletionMessage()}</span>
            <span className="text-sm font-medium">{completenessPercentage}%</span>
          </div>
          <Progress value={completenessPercentage} className="h-2" />
        </div>
        {missingItems.length > 0 && (
          <div className="mb-4 text-sm">
            <p>Complete your profile by adding {missingItems.join(", ")}.</p>
          </div>
        )}
        <div className="flex justify-end">
          <Button 
            size="sm"
            className="bg-jobonboard-purple hover:bg-jobonboard-purple/90"
            asChild
          >
            <Link to="/profile">Update Profile</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileProgress;
