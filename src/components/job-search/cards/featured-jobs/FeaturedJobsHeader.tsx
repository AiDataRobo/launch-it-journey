
import React from 'react';
import { Link } from 'react-router-dom';

export const FeaturedJobsHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold flex items-center">
        <span className="text-jobonboard-purple">✨</span> Featured Opportunities
      </h2>
      <div className="flex gap-4">
        <Link 
          to="/skill-assessment" 
          className="text-sm text-jobonboard-purple hover:text-jobonboard-purple-light hover:underline"
        >
          Boost your chances - Take a Skill Assessment
        </Link>
        <Link 
          to="/job-referral" 
          className="text-sm text-jobonboard-purple hover:text-jobonboard-purple-light hover:underline"
        >
          Request Job Referrals
        </Link>
      </div>
    </div>
  );
};
