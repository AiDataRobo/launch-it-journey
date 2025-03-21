
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { StepType } from './types';
import { motion, AnimatePresence } from 'framer-motion';

interface StepDetailsProps {
  step: StepType;
  isAnimating: boolean;
}

const StepDetails: React.FC<StepDetailsProps> = ({ step, isAnimating }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={step.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`p-8 rounded-xl ${step.bgColor} border ${step.borderColor} hover:shadow-lg`}
      >
        <motion.div 
          className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-6 shadow-inner`}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          {React.createElement(step.icon, { className: step.color, size: 32 })}
        </motion.div>
        <motion.h3 
          className="text-2xl font-bold mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          {step.title}
        </motion.h3>
        <motion.p 
          className="text-gray-700 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          {step.detailedDescription}
        </motion.p>
        <motion.ul 
          className="space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          {step.insights.map((insight, index) => (
            <motion.li 
              key={index} 
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + (index * 0.1), duration: 0.3 }}
            >
              <ChevronRight className={`${step.color} mt-1 mr-2`} size={16} />
              <span>{insight}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </AnimatePresence>
  );
};

export default StepDetails;
