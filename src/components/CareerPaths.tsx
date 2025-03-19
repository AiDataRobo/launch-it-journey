
import React from 'react';
import { Code, Database, Shield, Brain, PenTool, Server, ChevronRight } from 'lucide-react';

const CareerPaths = () => {
  const careers = [
    {
      title: "Software Developer",
      description: "Build applications, websites, and software solutions using various programming languages.",
      icon: Code,
      color: "text-jobonboard-blue",
      bgColor: "bg-jobonboard-blue/10",
      borderColor: "border-jobonboard-blue/20",
    },
    {
      title: "Data Scientist",
      description: "Analyze data, develop models, and extract insights to solve complex business problems.",
      icon: Database,
      color: "text-jobonboard-purple",
      bgColor: "bg-jobonboard-purple/10",
      borderColor: "border-jobonboard-purple/20",
    },
    {
      title: "Cybersecurity Expert",
      description: "Protect systems and networks from digital attacks and security breaches.",
      icon: Shield,
      color: "text-jobonboard-green",
      bgColor: "bg-jobonboard-green/10",
      borderColor: "border-jobonboard-green/20",
    },
    {
      title: "AI Engineer",
      description: "Develop artificial intelligence systems and machine learning models.",
      icon: Brain,
      color: "text-pink-500",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-100",
    },
    {
      title: "UX/UI Designer",
      description: "Create user-friendly interfaces and optimal experiences for digital products.",
      icon: PenTool,
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-100",
    },
    {
      title: "DevOps Engineer",
      description: "Bridge development and operations to improve deployment frequency and reliability.",
      icon: Server,
      color: "text-teal-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-100",
    },
  ];

  return (
    <section id="career-paths" className="py-24 relative overflow-hidden bg-gray-50">
      {/* Background Elements */}
      <div className="absolute top-20 -right-24 w-96 h-96 bg-jobonboard-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -left-24 w-96 h-96 bg-jobonboard-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-1 rounded-full bg-jobonboard-green/10 text-jobonboard-green text-sm font-medium mb-4">
            Career Opportunities
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore IT Career Paths</h2>
          <p className="text-lg text-gray-600">
            Discover the diverse range of IT career paths available and find the one that aligns with your skills and interests.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careers.map((career, index) => (
            <div 
              key={career.title}
              className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 overflow-hidden transition-all-medium animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <div className={`w-14 h-14 ${career.bgColor} rounded-lg flex items-center justify-center mb-5`}>
                  <career.icon className={career.color} size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{career.title}</h3>
                <p className="text-gray-600 mb-5">{career.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-jobonboard-purple font-medium hover:text-jobonboard-purple-light transition-all-medium"
                >
                  Learn More 
                  <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerPaths;
