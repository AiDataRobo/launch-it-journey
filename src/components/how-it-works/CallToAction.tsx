
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <div className="mt-16 text-center">
      <a 
        href="/signup" 
        className="inline-flex items-center px-8 py-4 rounded-lg bg-jobonboard-purple text-white hover:bg-jobonboard-purple-light transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:scale-105"
      >
        Start Your Career Journey
        <ArrowRight className="ml-2 w-5 h-5" />
      </a>
    </div>
  );
};

export default CallToAction;
