
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const QuickAccessTiles = () => {
  const tiles = [
    {
      title: "Find Jobs",
      description: "Explore opportunities based on your preferences",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "bg-jobonboard-blue/10 text-jobonboard-blue",
    },
    {
      title: "AI Resume Scanner",
      description: "Scan and improve your resume instantly",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: "bg-jobonboard-purple/10 text-jobonboard-purple",
    },
    {
      title: "Mock Interviews",
      description: "Practice with AI or experts",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      color: "bg-jobonboard-green/10 text-jobonboard-green",
    },
    {
      title: "LinkedIn Optimizer",
      description: "Improve your profile visibility",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "bg-blue-600/10 text-blue-600",
    },
  ];

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-lg font-semibold mb-4">Quick Access</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {tiles.map((tile, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-4 rounded-lg border hover:shadow-md transition-all cursor-pointer"
            >
              <div className={`${tile.color} p-3 rounded-full mb-3`}>
                {tile.icon}
              </div>
              <h3 className="font-medium text-center text-sm">{tile.title}</h3>
              <p className="text-xs text-center text-muted-foreground mt-1">{tile.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickAccessTiles;
