
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, MessageSquare, ArrowRight, Award, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const mentors = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Senior Software Engineer',
    company: 'Google',
    expertise: ['Frontend Development', 'React', 'UI/UX'],
    yearsExperience: 8,
    rating: 4.9,
    reviews: 124,
    imgSrc: '/placeholder.svg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Data Science Lead',
    company: 'Microsoft',
    expertise: ['Machine Learning', 'Python', 'Data Visualization'],
    yearsExperience: 11,
    rating: 4.8,
    reviews: 87,
    imgSrc: '/placeholder.svg',
  },
  {
    id: 3,
    name: 'Priya Patel',
    role: 'Cybersecurity Expert',
    company: 'Amazon',
    expertise: ['Network Security', 'Threat Analysis', 'Compliance'],
    yearsExperience: 7,
    rating: 4.7,
    reviews: 62,
    imgSrc: '/placeholder.svg',
  },
];

const communityTopics = [
  { title: 'Career transition strategies for non-CS majors', replies: 38, views: 1240 },
  { title: 'How to prepare for technical interviews in 2024', replies: 67, views: 2350 },
  { title: 'Which certifications are worth it for DevOps?', replies: 42, views: 1815 },
  { title: 'Balancing learning new technologies and job searching', replies: 29, views: 945 },
];

const MentorshipGuidance = () => {
  const [activeTab, setActiveTab] = useState('mentors');
  
  return (
    <section id="mentorship-guidance" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-gray-50/80"></div>
        <motion.div 
          className="absolute top-1/4 right-0 w-72 h-72 bg-jobonboard-blue/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, 10, 0],
            y: [0, 15, 0],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/4 left-0 w-72 h-72 bg-jobonboard-purple/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, -10, 0],
            y: [0, -15, 0],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-jobonboard-green/10 text-jobonboard-green text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            <span>Expert Guidance</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mentorship & Community Support
          </h2>
          <p className="text-lg text-gray-600">
            Connect with industry experts and join a supportive community to accelerate your IT career journey.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex mb-8 border-b border-gray-200">
            <button 
              className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
                activeTab === 'mentors' 
                  ? 'border-jobonboard-purple text-jobonboard-purple' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('mentors')}
            >
              1:1 Mentorship
            </button>
            <button 
              className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
                activeTab === 'community' 
                  ? 'border-jobonboard-purple text-jobonboard-purple' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('community')}
            >
              Community Forum
            </button>
          </div>
          
          {/* Mentors Tab */}
          {activeTab === 'mentors' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                {mentors.map((mentor, index) => (
                  <motion.div 
                    key={mentor.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                  >
                    <Card className="h-full flex flex-col">
                      <CardHeader className="pb-0">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                            <img 
                              src={mentor.imgSrc} 
                              alt={mentor.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{mentor.name}</CardTitle>
                            <div className="text-sm text-gray-600 mt-1">{mentor.role}</div>
                            <div className="text-sm text-gray-500">{mentor.company}</div>
                            <div className="flex items-center mt-1">
                              <span className="text-amber-500 font-medium text-sm">{mentor.rating}</span>
                              <div className="flex ml-1">
                                {[...Array(5)].map((_, i) => (
                                  <svg 
                                    key={i} 
                                    className={`w-3 h-3 ${i < Math.floor(mentor.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="text-xs text-gray-500 ml-1">({mentor.reviews})</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="py-4">
                        <div className="mb-3">
                          <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                            <Award className="w-3 h-3" />
                            <span>Expertise</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {mentor.expertise.map(skill => (
                              <span 
                                key={skill} 
                                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                            <Clock className="w-3 h-3" />
                            <span>Experience</span>
                          </div>
                          <div className="text-sm">{mentor.yearsExperience} years</div>
                        </div>
                      </CardContent>
                      <CardFooter className="mt-auto">
                        <Button 
                          className="w-full bg-jobonboard-purple hover:bg-jobonboard-purple-light text-white"
                        >
                          Book a Session
                          <Calendar className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button 
                  variant="outline" 
                  className="border-jobonboard-blue text-jobonboard-blue hover:bg-jobonboard-blue/10"
                >
                  Browse All Mentors
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          )}
          
          {/* Community Tab */}
          {activeTab === 'community' && (
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                <motion.div 
                  className="lg:col-span-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-jobonboard-purple" />
                        Popular Discussions
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {communityTopics.map((topic, index) => (
                          <motion.div 
                            key={index}
                            className="p-4 rounded-lg border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all cursor-pointer"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 + (index * 0.05) }}
                          >
                            <h3 className="font-medium mb-2 hover:text-jobonboard-purple transition-colors">{topic.title}</h3>
                            <div className="flex text-sm text-gray-500">
                              <span className="flex items-center mr-4">
                                <MessageSquare className="w-3 h-3 mr-1" /> 
                                {topic.replies} replies
                              </span>
                              <span className="flex items-center">
                                <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="currentColor" strokeWidth="1.5"/>
                                  <path d="M12 17L12 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                  <path d="M12 8L12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                                {topic.views} views
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        variant="ghost" 
                        className="w-full text-jobonboard-purple hover:bg-jobonboard-purple/10 hover:text-jobonboard-purple-light"
                      >
                        View All Discussions
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-jobonboard-green" />
                        Community Benefits
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {[
                          {
                            title: 'Peer Networking',
                            description: 'Connect with professionals at all stages of their IT careers.'
                          },
                          {
                            title: 'Knowledge Sharing',
                            description: 'Learn from real-world experiences and industry insights.'
                          },
                          {
                            title: 'Resume Reviews',
                            description: 'Get feedback on your resume from experienced professionals.'
                          },
                          {
                            title: 'Mock Interviews',
                            description: 'Practice your interview skills with community volunteers.'
                          },
                          {
                            title: 'Job Referrals',
                            description: 'Access exclusive job opportunities through community connections.'
                          },
                        ].map((benefit, index) => (
                          <motion.li 
                            key={index} 
                            className="flex gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 + (index * 0.05) }}
                          >
                            <div className="w-10 h-10 rounded-full bg-jobonboard-green/10 flex items-center justify-center flex-shrink-0">
                              <span className="text-jobonboard-green font-bold">{index + 1}</span>
                            </div>
                            <div>
                              <h4 className="font-medium">{benefit.title}</h4>
                              <p className="text-sm text-gray-600">{benefit.description}</p>
                            </div>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className="w-full bg-jobonboard-green hover:bg-jobonboard-green-light text-white"
                      >
                        Join Our Community
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MentorshipGuidance;
