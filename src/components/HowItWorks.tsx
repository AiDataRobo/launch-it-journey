
import React, { useState } from 'react';
import { SearchIcon, FileText, Briefcase, GraduationCap, ArrowRight, Sparkles, ChevronRight, Award, TrendingUp, Map, Target, CheckCircle2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      id: 1,
      title: 'Assess Your Skills',
      description: 'Take our comprehensive assessment to identify your strengths, skills, and areas for growth.',
      icon: SearchIcon,
      color: 'text-jobonboard-blue',
      bgColor: 'bg-jobonboard-blue/10',
      borderColor: 'border-jobonboard-blue/20',
      detailedDescription: 'Our AI-powered assessment analyzes your current technical skills, soft skills, and experience to create a personalized career roadmap.',
      insights: ['Technical skill evaluation', 'Soft skills assessment', 'Experience mapping', 'Strengths identification'],
    },
    {
      id: 2,
      title: 'Build Your Resume',
      description: 'Create a tailored resume highlighting your relevant skills and experience for IT roles.',
      icon: FileText,
      color: 'text-jobonboard-purple',
      bgColor: 'bg-jobonboard-purple/10',
      borderColor: 'border-jobonboard-purple/20',
      detailedDescription: 'Craft a standout resume with our AI-assisted templates that emphasize the skills employers are looking for in the IT industry.',
      insights: ['Role-specific templates', 'Keyword optimization', 'ATS-friendly formatting', 'Professional review'],
    },
    {
      id: 3,
      title: 'Apply for Jobs',
      description: 'Access our curated job listings and receive personalized recommendations.',
      icon: Briefcase,
      color: 'text-jobonboard-green',
      bgColor: 'bg-jobonboard-green/10',
      borderColor: 'border-jobonboard-green/20',
      detailedDescription: 'Our platform matches you with relevant job opportunities based on your skills, experience, and career goals.',
      insights: ['Personalized job matches', 'Application tracking', 'Interview preparation', 'Salary insights'],
    },
    {
      id: 4,
      title: 'Upskill and Grow',
      description: 'Continue learning with courses and resources tailored to your career path.',
      icon: GraduationCap,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-100',
      detailedDescription: 'Access industry-relevant courses, certifications, and resources to continuously improve your skills and advance in your career.',
      insights: ['Personalized learning paths', 'Industry certifications', 'Hands-on projects', 'Mentor guidance'],
    },
  ];

  const milestones = [
    { title: 'Entry Level Position', icon: Target, color: 'text-blue-500' },
    { title: 'Mid-Level Role', icon: TrendingUp, color: 'text-purple-500' },
    { title: 'Senior Position', icon: Award, color: 'text-green-500' },
    { title: 'Leadership Role', icon: Map, color: 'text-amber-500' }
  ];

  const handleStepClick = (index: number) => {
    setActiveStep(index);
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
        
        {/* Career Path Visualization */}
        <div className="mb-16">
          <div className="relative mb-6">
            <div className="h-2 bg-gray-200 rounded-full">
              <div 
                className="h-2 bg-gradient-to-r from-jobonboard-blue via-jobonboard-purple to-jobonboard-green rounded-full transition-all duration-500"
                style={{ width: `${(activeStep + 1) * 25}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2">
              {steps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center">
                  <button 
                    onClick={() => handleStepClick(index)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all -mt-5 ${
                      index <= activeStep 
                        ? `${step.bgColor} ${step.color}`
                        : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    {index < activeStep ? <CheckCircle2 size={16} /> : index + 1}
                  </button>
                  <span className={`text-xs font-medium mt-2 hidden md:block ${
                    index <= activeStep ? step.color : 'text-gray-400'
                  }`}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Step Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className={`p-8 rounded-xl ${steps[activeStep].bgColor} border ${steps[activeStep].borderColor} animate-fade-in`}>
            <div className={`w-16 h-16 ${steps[activeStep].bgColor} rounded-2xl flex items-center justify-center mb-6`}>
              {React.createElement(steps[activeStep].icon, { className: steps[activeStep].color, size: 32 })}
            </div>
            <h3 className="text-2xl font-bold mb-3">{steps[activeStep].title}</h3>
            <p className="text-gray-700 mb-6">{steps[activeStep].detailedDescription}</p>
            <ul className="space-y-3">
              {steps[activeStep].insights.map((insight, index) => (
                <li key={index} className="flex items-start">
                  <ChevronRight className={`${steps[activeStep].color} mt-1 mr-2`} size={16} />
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-4">Career Progression</h3>
            <p className="text-gray-600 mb-6">
              As you progress through each step, you'll build the foundation for advancement in your IT career:
            </p>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-10 h-10 rounded-lg ${index <= activeStep ? 'bg-gray-100' : 'bg-gray-50'} flex items-center justify-center mr-4`}>
                    <milestone.icon className={index <= activeStep ? milestone.color : 'text-gray-300'} size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className={`font-medium ${index <= activeStep ? 'text-gray-800' : 'text-gray-400'}`}>{milestone.title}</span>
                      <span className={`text-xs ${index <= activeStep ? milestone.color : 'text-gray-300'}`}>
                        {index <= activeStep ? 'Achievable' : 'Future goal'}
                      </span>
                    </div>
                    <Progress value={index <= activeStep ? 100 : (activeStep / 3) * 25} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Success Stories Carousel */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-center">Success Stories from Each Stage</h3>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {steps.map((step, index) => (
                <CarouselItem key={index}>
                  <div className="p-6 rounded-xl border bg-white shadow-sm">
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
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <a 
            href="/signup" 
            className="inline-flex items-center px-6 py-3 rounded-lg bg-jobonboard-purple text-white hover:bg-jobonboard-purple-light transition-all font-medium"
          >
            Start Your Career Journey
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
