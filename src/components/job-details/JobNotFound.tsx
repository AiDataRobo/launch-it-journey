
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const JobNotFound: React.FC = () => {
  return (
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
  );
};
