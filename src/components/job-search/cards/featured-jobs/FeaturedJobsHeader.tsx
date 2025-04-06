
import React from 'react';
import { Link } from 'react-router-dom';

export const FeaturedJobsHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold flex items-center">
        <span className="text-jobonboard-purple">✨</span> Featured Opportunities
      </h2>
      <Link 
        to="/skill-assessment" 
        className="text-sm text-jobonboard-purple hover:text-jobonboard-purple-light hover:underline"
      >
        Boost your chances - Take a Skill Assessment
      </Link>
    </div>
  );
};
