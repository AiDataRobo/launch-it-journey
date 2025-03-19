
import React from 'react';
import { SearchIcon, FileText, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Assess Your Skills',
      description: 'Take our comprehensive assessment to identify your strengths, skills, and areas for growth.',
      icon: SearchIcon,
      color: 'text-jobonboard-blue',
      bgColor: 'bg-jobonboard-blue/10',
      borderColor: 'border-jobonboard-blue/20',
    },
    {
      id: 2,
      title: 'Build Your Resume',
      description: 'Create a tailored resume highlighting your relevant skills and experience for IT roles.',
      icon: FileText,
      color: 'text-jobonboard-purple',
      bgColor: 'bg-jobonboard-purple/10',
      borderColor: 'border-jobonboard-purple/20',
    },
    {
      id: 3,
      title: 'Apply for Jobs',
      description: 'Access our curated job listings and receive personalized recommendations.',
      icon: Briefcase,
      color: 'text-jobonboard-green',
      bgColor: 'bg-jobonboard-green/10',
      borderColor: 'border-jobonboard-green/20',
    },
    {
      id: 4,
      title: 'Upskill and Grow',
      description: 'Continue learning with courses and resources tailored to your career path.',
      icon: GraduationCap,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-100',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-gray-50/80"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-1 rounded-full bg-jobonboard-blue/10 text-jobonboard-blue text-sm font-medium mb-4">
            Simple Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600">
            Our streamlined process helps you navigate your IT career journey, from skill assessment to continuous growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Connector Line (for desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(100%-12px)] w-[calc(100%-24px)] h-0.5 bg-gray-200 z-0">
                  <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 text-gray-300" size={20} />
                </div>
              )}
              
              <div className={`p-6 rounded-xl border ${step.borderColor} bg-white shadow-sm hover:shadow-md transition-all-medium h-full`}>
                <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                  <step.icon className={`${step.color}`} size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
