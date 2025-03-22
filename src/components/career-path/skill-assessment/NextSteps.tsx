
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type NextStepsProps = {
  recommendations: string[];
};

const NextSteps: React.FC<NextStepsProps> = ({ recommendations }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <span className="w-8 h-8 rounded-full bg-jobonboard-green/10 text-jobonboard-green flex items-center justify-center mr-3">
          <span className="font-bold">3</span>
        </span>
        Next Steps
      </h3>
      
      <p className="text-sm text-gray-600 mb-4">
        Based on your assessment, we recommend focusing on these areas to advance your career:
      </p>
      
      <ul className="space-y-3 mb-4">
        {recommendations.map((item, index) => (
          <motion.li 
            key={index} 
            className="flex items-start"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
          >
            <ChevronRight className="text-jobonboard-purple mt-1 mr-2" size={16} />
            <span className="text-sm">{item}</span>
          </motion.li>
        ))}
      </ul>
      
      <Button 
        className="w-full bg-jobonboard-purple hover:bg-jobonboard-purple-light text-white"
      >
        View Personalized Learning Path
      </Button>
    </motion.div>
  );
};

export default NextSteps;
