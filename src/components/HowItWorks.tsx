
import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import StepProgress from './how-it-works/StepProgress';
import StepDetails from './how-it-works/StepDetails';
import CareerMilestones from './how-it-works/CareerMilestones';
import SuccessStories from './how-it-works/SuccessStories';
import CallToAction from './how-it-works/CallToAction';
import { steps, milestones } from './how-it-works/data';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Auto-advance steps to showcase the journey
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
      }
    }, 8000);
    
    return () => clearInterval(timer);
  }, [isAnimating]);

  const handleStepClick = (index: number) => {
    if (index === activeStep) return;
    
    setIsAnimating(true);
    setActiveStep(index);
    
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-gray-50/80"></div>
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-jobonboard-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-jobonboard-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-jobonboard-blue/10 text-jobonboard-blue text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Your Career Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600">
            Follow our proven process to navigate your IT career path, from assessment to continuous growth.
          </p>
        </div>
        
        {/* Career Path Visualization - Enhanced with better contrast and interactivity */}
        <div className="mb-16">
          <StepProgress 
            steps={steps} 
            activeStep={activeStep} 
            onStepClick={handleStepClick} 
          />
        </div>
        
        {/* Step Details and Career Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <StepDetails 
            step={steps[activeStep]} 
            isAnimating={isAnimating} 
          />
          <CareerMilestones 
            milestones={milestones} 
            activeStep={activeStep} 
          />
        </div>
        
        {/* Success Stories Carousel */}
        <SuccessStories steps={steps} />
        
        {/* Call to Action */}
        <CallToAction />
      </div>
    </section>
  );
};

export default HowItWorks;
