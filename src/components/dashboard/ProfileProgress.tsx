
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

type ProfileProgressProps = {
  profile: any;
};

const ProfileProgress: React.FC<ProfileProgressProps> = ({ profile }) => {
  // Calculate profile completion percentage (this is a simple implementation)
  const calculateProfileCompletion = () => {
    let completedSteps = 1; // Account created
    const totalSteps = 5;
    
    if (profile?.full_name) completedSteps++;
    // Additional checks would be added here as the profile schema expands
    // For example: profile picture, skills, education, experience, etc.
    
    return Math.round((completedSteps / totalSteps) * 100);
  };

  const profileCompletionPercentage = calculateProfileCompletion();
  
  // Mock data for resume score
  const resumeScore = {
    score: 72,
    suggestions: [
      "Add more quantifiable achievements",
      "Include relevant keywords for better ATS matching",
      "Add certifications section"
    ]
  };

  const hasResume = true; // This would be dynamically determined

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold flex items-center justify-between">
            Profile Completion
            <span className="text-sm bg-jobonboard-purple/10 text-jobonboard-purple px-2 py-1 rounded-full">
              {profileCompletionPercentage}%
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={profileCompletionPercentage} className="h-2 mb-4" />
          
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-jobonboard-green flex items-center justify-center text-white text-xs mt-0.5">✓</div>
              <div>
                <p className="font-medium text-sm">Account created</p>
                <p className="text-xs text-muted-foreground">Your account is active</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <div className={`w-5 h-5 rounded-full ${profile?.full_name ? 'bg-jobonboard-green' : 'bg-gray-200'} flex items-center justify-center text-white text-xs mt-0.5`}>
                {profile?.full_name ? '✓' : '2'}
              </div>
              <div>
                <p className="font-medium text-sm">Complete basic info</p>
                <p className="text-xs text-muted-foreground">Add your name and contact details</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-white text-xs mt-0.5">3</div>
              <div>
                <p className="font-medium text-sm">Add professional experience</p>
                <p className="text-xs text-muted-foreground">Include your work history</p>
              </div>
            </div>
            
            <Button className="w-full mt-2 bg-jobonboard-purple hover:bg-jobonboard-purple-light">
              Complete Your Profile
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {hasResume ? (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold flex items-center justify-between">
              AI Resume Score
              <span className={`text-sm px-2 py-1 rounded-full ${
                resumeScore.score >= 80 ? 'bg-green-100 text-green-800' : 
                resumeScore.score >= 60 ? 'bg-yellow-100 text-yellow-800' : 
                'bg-red-100 text-red-800'
              }`}>
                {resumeScore.score}/100
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress 
              value={resumeScore.score} 
              className="h-2 mb-4" 
              indicatorClassName={
                resumeScore.score >= 80 ? 'bg-green-500' : 
                resumeScore.score >= 60 ? 'bg-yellow-500' : 
                'bg-red-500'
              }
            />
            
            <div className="space-y-2 mb-4">
              <p className="text-sm font-medium">Improvement suggestions:</p>
              <ul className="text-xs space-y-1">
                {resumeScore.suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-jobonboard-blue">•</span>
                    <span>{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button className="w-full bg-jobonboard-blue hover:bg-jobonboard-blue-light">
              Improve Your Resume
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold">Resume Scanner</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-sm text-center">Upload your resume and get instant AI-powered feedback</p>
              <Button className="w-full bg-jobonboard-blue hover:bg-jobonboard-blue-light">
                Upload Resume
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ProfileProgress;
