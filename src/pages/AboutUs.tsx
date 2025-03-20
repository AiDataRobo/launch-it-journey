
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Code, 
  Users, 
  Heart, 
  Globe, 
  Clock, 
  Award, 
  Star, 
  CheckCircle 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      bio: 'Former tech recruiter with 10+ years of experience connecting talent with tech companies.',
      avatar: '/placeholder.svg',
      initials: 'AJ',
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      bio: 'Ex-Google engineer with a passion for helping others break into the tech industry.',
      avatar: '/placeholder.svg',
      initials: 'SC',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Career Development',
      bio: 'Career coach with expertise in IT career transitions and professional growth.',
      avatar: '/placeholder.svg',
      initials: 'MR',
    },
    {
      name: 'Diana Kim',
      role: 'Lead Curriculum Designer',
      bio: 'Specializes in creating learning paths that bridge skill gaps for IT careers.',
      avatar: '/placeholder.svg',
      initials: 'DK',
    },
  ];

  const values = [
    {
      title: 'Accessibility',
      description: 'Making IT careers accessible to people from all backgrounds.',
      icon: Globe,
      color: 'text-jobonboard-blue',
      bgColor: 'bg-jobonboard-blue/10',
    },
    {
      title: 'Community',
      description: 'Building supportive networks for learning and growth.',
      icon: Users,
      color: 'text-jobonboard-purple',
      bgColor: 'bg-jobonboard-purple/10',
    },
    {
      title: 'Excellence',
      description: 'Providing high-quality resources and guidance for successful careers.',
      icon: Award,
      color: 'text-jobonboard-green',
      bgColor: 'bg-jobonboard-green/10',
    },
    {
      title: 'Innovation',
      description: 'Continuously improving our approach to career development.',
      icon: Code,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-gray-50/80"></div>
            <div className="absolute top-1/3 right-0 w-80 h-80 bg-jobonboard-purple/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-jobonboard-blue/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                At JobOnboard, we're dedicated to bridging the gap between talented individuals and rewarding IT careers through personalized pathways, expert guidance, and supportive community.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  JobOnboard was founded in 2020 with a simple mission: to make IT careers accessible to everyone with passion and dedication, regardless of their background.
                </p>
                <p className="text-gray-600 mb-4">
                  We noticed that many talented individuals struggled to break into the tech industry due to unclear career paths, overwhelming information, and lack of personalized guidance.
                </p>
                <p className="text-gray-600">
                  Today, we've helped thousands of professionals successfully transition into fulfilling IT careers through our structured approach, expert mentorship, and supportive community.
                </p>
              </div>
              <div className="relative rounded-xl overflow-hidden h-80 md:h-96 shadow-xl animate-fade-in">
                <div className="absolute inset-0 bg-gradient-to-r from-jobonboard-blue to-jobonboard-purple opacity-90"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white p-8">
                  <div className="max-w-md text-center">
                    <Clock className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Since 2020</h3>
                    <p className="text-white/90">
                      We've guided over 10,000 professionals into successful IT careers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-gray-600">
                The principles that guide us in our mission to transform careers and lives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-14 h-14 ${value.bgColor} rounded-lg flex items-center justify-center mb-5`}>
                    <value.icon className={`${value.color} w-6 h-6`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600">
                The passionate experts behind JobOnboard dedicated to your success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card 
                  key={index}
                  className="overflow-hidden hover:shadow-md transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-6 text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback className="bg-jobonboard-purple text-white text-xl">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-jobonboard-purple mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-gradient-to-r from-jobonboard-blue to-jobonboard-purple text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 animate-fade-in">
                <Star className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <div className="text-white/80">Successful Career Transitions</div>
              </div>
              <div className="text-center p-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
                <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-white/80">Job Placement Rate</div>
              </div>
              <div className="text-center p-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <Users className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">300+</div>
                <div className="text-white/80">Expert Mentors</div>
              </div>
              <div className="text-center p-6 animate-fade-in" style={{ animationDelay: "300ms" }}>
                <Heart className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-white/80">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
