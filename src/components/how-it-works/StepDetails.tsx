
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { StepType } from './types';

interface StepDetailsProps {
  step: StepType;
  isAnimating: boolean;
}

const StepDetails: React.FC<StepDetailsProps> = ({ step, isAnimating }) => {
  return (
    <div 
      className={`p-8 rounded-xl ${step.bgColor} border ${step.borderColor} transition-all duration-500 transform ${isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'} hover:shadow-lg`}
    >
      <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-6 shadow-inner`}>
        {React.createElement(step.icon, { className: step.color, size: 32 })}
      </div>
      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
      <p className="text-gray-700 mb-6">{step.detailedDescription}</p>
      <ul className="space-y-3">
        {step.insights.map((insight, index) => (
          <li key={index} className="flex items-start">
            <ChevronRight className={`${step.color} mt-1 mr-2`} size={16} />
            <span>{insight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StepDetails;
