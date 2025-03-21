
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
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
      <div className="h-3 bg-gray-200 rounded-full shadow-inner">
        <div 
          className="h-3 bg-gradient-to-r from-jobonboard-blue via-jobonboard-purple to-jobonboard-green rounded-full transition-all duration-700 shadow"
          style={{ width: `${(activeStep + 1) * 25}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-3">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center">
            <button 
              onClick={() => onStepClick(index)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 -mt-5 transform ${
                index <= activeStep 
                  ? `${step.bgColor} ${step.color} scale-110 shadow-md`
                  : 'bg-gray-200 text-gray-400 hover:bg-gray-300'
              }`}
              aria-label={`Go to step ${index + 1}: ${step.title}`}
            >
              {index < activeStep ? (
                <CheckCircle2 size={18} className="text-white" />
              ) : (
                <span className="font-medium">{index + 1}</span>
              )}
            </button>
            <span className={`text-sm font-medium mt-3 transition-colors duration-300 hidden md:block ${
              index <= activeStep ? step.color : 'text-gray-400'
            }`}>
              {step.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepProgress;
