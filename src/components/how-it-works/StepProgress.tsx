
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { StepType } from './types';

interface StepProgressProps {
  steps: StepType[];
  activeStep: number;
  onStepClick: (index: number) => void;
}

const StepProgress: React.FC<StepProgressProps> = ({ 
  steps, 
  activeStep, 
  onStepClick 
}) => {
  return (
    <div className="relative mb-8">
      <div className="h-3 bg-gray-200 rounded-full shadow-inner overflow-hidden">
        <motion.div 
          className="h-3 bg-gradient-to-r from-jobonboard-blue via-jobonboard-purple to-jobonboard-green rounded-full shadow"
          initial={{ width: '0%' }}
          animate={{ width: `${(activeStep + 1) * 25}%` }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        ></motion.div>
      </div>
      <div className="flex justify-between mt-3">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center">
            <motion.button 
              onClick={() => onStepClick(index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 -mt-5 ${
                index <= activeStep 
                  ? `${step.bgColor} ${step.color} shadow-md`
                  : 'bg-gray-200 text-gray-400 hover:bg-gray-300'
              }`}
              aria-label={`Go to step ${index + 1}: ${step.title}`}
            >
              {index < activeStep ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle2 size={18} className="text-white" />
                </motion.div>
              ) : (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="font-medium"
                >
                  {index + 1}
                </motion.span>
              )}
            </motion.button>
            <motion.span 
              className={`text-sm font-medium mt-3 transition-colors duration-300 hidden md:block ${
                index <= activeStep ? step.color : 'text-gray-400'
              }`}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              {step.title}
            </motion.span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepProgress;
