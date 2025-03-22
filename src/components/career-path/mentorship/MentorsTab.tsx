
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MentorCard from './MentorCard';
import { mentors } from './data';

const MentorsTab: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {mentors.map((mentor, index) => (
          <MentorCard key={mentor.id} mentor={mentor} index={index} />
        ))}
      </div>
      
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button 
          variant="outline" 
          className="border-jobonboard-blue text-jobonboard-blue hover:bg-jobonboard-blue/10"
        >
          Browse All Mentors
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </div>
  );
};

export default MentorsTab;
