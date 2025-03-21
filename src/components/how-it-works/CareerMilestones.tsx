
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { MilestoneType } from './types';

interface CareerMilestonesProps {
  milestones: MilestoneType[];
  activeStep: number;
}

const CareerMilestones: React.FC<CareerMilestonesProps> = ({ milestones, activeStep }) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex items-center mb-4">
        <h3 className="text-xl font-semibold">Career Progression</h3>
        <div className="ml-3 px-3 py-1 bg-jobonboard-green/10 rounded-full text-xs font-medium text-jobonboard-green flex items-center">
          <ShieldCheck className="mr-1" size={14} />
          Proven Path
        </div>
      </div>
      <p className="text-gray-600 mb-6">
        As you progress through each step, you'll build the foundation for advancement in your IT career:
      </p>
      <div className="space-y-6">
        {milestones.map((milestone, index) => (
          <div key={index} className="flex items-center">
            <div className={`w-12 h-12 rounded-lg ${index <= activeStep ? 'bg-gray-100' : 'bg-gray-50'} flex items-center justify-center mr-4 transition-all duration-300 ${index <= activeStep ? 'shadow' : ''}`}>
              <milestone.icon className={index <= activeStep ? milestone.color : 'text-gray-300'} size={22} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className={`font-medium ${index <= activeStep ? 'text-gray-800' : 'text-gray-400'}`}>{milestone.title}</span>
                <span className={`text-xs ${index <= activeStep ? milestone.color : 'text-gray-300'}`}>
                  {index <= activeStep ? 'Achievable' : 'Future goal'}
                </span>
              </div>
              <Progress 
                value={index <= activeStep ? 100 : (activeStep / 3) * 25} 
                className={`h-2 transition-all duration-500 ${index <= activeStep ? 'opacity-100' : 'opacity-60'}`} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Import missing icon
import { ShieldCheck } from 'lucide-react';

export default CareerMilestones;
