
import React from 'react';
import { Users, MessageSquare, HeartHandshake, ArrowRight } from 'lucide-react';

const Community = () => {
  const communityFeatures = [
    {
      id: 1,
      title: 'Expert Mentorship',
      description: 'Connect with experienced IT professionals who can guide you through your career transition.',
      icon: HeartHandshake,
      color: 'text-jobonboard-purple',
      bgColor: 'bg-jobonboard-purple/10',
      link: 'Find a Mentor',
    },
    {
      id: 2,
      title: 'Community Forums',
      description: 'Join discussions, ask questions, and share experiences with peers on similar career journeys.',
      icon: MessageSquare,
      color: 'text-jobonboard-blue',
      bgColor: 'bg-jobonboard-blue/10',
      link: 'Join the Forum',
    },
    {
      id: 3,
      title: 'Networking Events',
      description: 'Participate in virtual and in-person events to build your professional network.',
      icon: Users,
      color: 'text-jobonboard-green',
      bgColor: 'bg-jobonboard-green/10',
      link: 'View Events',
    },
  ];

  return (
    <section id="community" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-jobonboard-blue/5"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-1 rounded-full bg-jobonboard-purple/10 text-jobonboard-purple text-sm font-medium mb-4">
            Support Network
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg text-gray-600">
            Connect with peers, mentors, and industry experts who can support your IT career journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communityFeatures.map((feature, index) => (
            <div 
              key={feature.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 p-6 transition-all-medium animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 ${feature.bgColor} rounded-lg flex items-center justify-center mb-5`}>
                <feature.icon className={feature.color} size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-5">{feature.description}</p>
              <a 
                href="#" 
                className="inline-flex items-center text-jobonboard-purple font-medium hover:text-jobonboard-purple-light transition-all-medium"
              >
                {feature.link}
                <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-jobonboard-blue to-jobonboard-purple rounded-2xl overflow-hidden shadow-lg animate-fade-in">
          <div className="p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to Begin Your IT Career Journey?</h3>
                <p className="text-white/80 mb-0 md:mb-0">
                  Join thousands of professionals who've successfully transitioned to rewarding IT careers.
                </p>
              </div>
              <a 
                href="#" 
                className="px-6 py-3 rounded-full bg-white text-jobonboard-purple font-medium hover-scale shadow-md whitespace-nowrap focus-ring flex-shrink-0"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
