
import React from 'react';
import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';

interface QuickApplyProps {
  handleApplyJob: () => void;
}

export const QuickApply: React.FC<QuickApplyProps> = ({ handleApplyJob }) => {
  return (
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
  );
};
