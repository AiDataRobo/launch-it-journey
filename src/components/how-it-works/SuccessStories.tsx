
import React from 'react';
import { UserCheck } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { StepType } from './types';

interface SuccessStoriesProps {
  steps: StepType[];
}

const SuccessStories: React.FC<SuccessStoriesProps> = ({ steps }) => {
  return (
    <div className="mt-16">
      <div className="flex items-center justify-center mb-6">
        <h3 className="text-xl font-semibold text-center">Success Stories from Each Stage</h3>
        <div className="ml-3 px-3 py-1 bg-jobonboard-purple/10 rounded-full text-xs font-medium text-jobonboard-purple flex items-center">
          <UserCheck className="mr-1" size={14} />
          Verified Results
        </div>
      </div>
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {steps.map((step, index) => (
            <CarouselItem key={index}>
              <div className="p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${step.bgColor} rounded-full flex items-center justify-center mr-4`}>
                    <step.icon className={step.color} size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">{step.title} Success</h4>
                    <p className="text-sm text-gray-500">Real user journey</p>
                  </div>
                </div>
                <blockquote className="italic text-gray-600 mb-4">
                  "After completing the {step.title.toLowerCase()} stage, I gained the confidence and skills to advance in my career. This platform made it seamless to transition to the next phase."
                </blockquote>
                <div className="text-sm text-right text-gray-500">- IT Professional</div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
};

export default SuccessStories;
