
import React from 'react';
import { Code, Database, Shield, ArrowRight, Star, Clock } from 'lucide-react';

const SkillResources = () => {
  const resources = [
    {
      id: 1,
      title: 'Full-Stack Web Development Bootcamp',
      description: 'Master frontend and backend technologies to build complete web applications.',
      category: 'Course',
      level: 'Beginner to Intermediate',
      duration: '12 weeks',
      rating: 4.8,
      icon: Code,
      color: 'text-jobonboard-blue',
      bgColor: 'bg-jobonboard-blue/10',
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      description: 'Learn the core concepts of data analysis, visualization, and machine learning.',
      category: 'Certification',
      level: 'Intermediate',
      duration: '8 weeks',
      rating: 4.7,
      icon: Database,
      color: 'text-jobonboard-purple',
      bgColor: 'bg-jobonboard-purple/10',
    },
    {
      id: 3,
      title: 'Cybersecurity Essentials',
      description: 'Understand security principles and practices to protect digital assets.',
      category: 'Course',
      level: 'All Levels',
      duration: '6 weeks',
      rating: 4.9,
      icon: Shield,
      color: 'text-jobonboard-green',
      bgColor: 'bg-jobonboard-green/10',
    },
  ];

  return (
    <section id="resources" className="py-24 relative overflow-hidden bg-gray-50">
      {/* Background Elements */}
      <div className="absolute top-20 -right-24 w-96 h-96 bg-jobonboard-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -left-24 w-96 h-96 bg-jobonboard-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="max-w-2xl animate-slide-up">
            <div className="inline-block px-4 py-1 rounded-full bg-jobonboard-blue/10 text-jobonboard-blue text-sm font-medium mb-4">
              Learning Resources
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Grow Your Skills</h2>
            <p className="text-lg text-gray-600">
              Access high-quality courses, certifications, and tutorials tailored for aspiring IT professionals.
            </p>
          </div>
          
          <a 
            href="#" 
            className="inline-flex items-center text-jobonboard-purple font-medium hover:text-jobonboard-purple-light transition-all-medium group animate-fade-in"
          >
            Browse All Courses 
            <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div 
              key={resource.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 overflow-hidden transition-all-medium animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <div className="flex items-center mb-5">
                  <div className={`w-12 h-12 ${resource.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <resource.icon className={resource.color} size={24} />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-medium">
                    {resource.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-5">{resource.description}</p>
                
                <div className="flex flex-wrap gap-4 mb-5">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-1 text-gray-400" />
                    {resource.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Star className="w-4 h-4 mr-1 text-amber-400" />
                    {resource.rating} (4.8k reviews)
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{resource.level}</span>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-jobonboard-purple font-medium hover:text-jobonboard-purple-light transition-all-medium"
                  >
                    Explore 
                    <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillResources;
