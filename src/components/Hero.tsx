
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-blue-50/80"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-jobonboard-green/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-jobonboard-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-8 right-1/4 w-64 h-64 bg-jobonboard-purple/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-6">
          <div className="w-full md:w-1/2 animate-slide-up">
            <div className="inline-block px-4 py-1 rounded-full bg-jobonboard-purple/10 text-jobonboard-purple text-sm font-medium mb-6">
              Your Path to IT Career Success
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              Launch Your IT Career with <span className="text-gradient-primary">Job Onboard</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Get personalized career guidance, skill-building resources, and job opportunities tailored to your experience level.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#" 
                className="px-6 py-3 rounded-full bg-jobonboard-purple text-white font-medium hover:bg-jobonboard-purple-light hover-scale shadow-md focus-ring"
              >
                Get Started
              </a>
              <a 
                href="#career-paths" 
                className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:border-jobonboard-purple hover:text-jobonboard-purple hover-scale focus-ring group flex items-center"
              >
                Explore Careers
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 animate-slide-down">
            <div className="relative">
              <div className="absolute inset-0 bg-jobonboard-blue/5 backdrop-blur-sm rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                <div className="px-6 py-4 bg-jobonboard-blue/5 border-b border-gray-100">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="h-5 w-40 bg-gray-200 rounded animate-pulse-slow"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex gap-4 items-center">
                      <div className="w-10 h-10 rounded-full bg-jobonboard-purple/20 flex items-center justify-center">
                        <span className="text-jobonboard-purple font-medium">1</span>
                      </div>
                      <div className="h-4 w-64 bg-gray-200 rounded animate-pulse-slow"></div>
                    </div>
                    <div className="flex gap-4 items-center">
                      <div className="w-10 h-10 rounded-full bg-jobonboard-blue/20 flex items-center justify-center">
                        <span className="text-jobonboard-blue font-medium">2</span>
                      </div>
                      <div className="h-4 w-56 bg-gray-200 rounded animate-pulse-slow"></div>
                    </div>
                    <div className="flex gap-4 items-center">
                      <div className="w-10 h-10 rounded-full bg-jobonboard-green/20 flex items-center justify-center">
                        <span className="text-jobonboard-green font-medium">3</span>
                      </div>
                      <div className="h-4 w-60 bg-gray-200 rounded animate-pulse-slow"></div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="h-10 w-full bg-jobonboard-purple/20 rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
