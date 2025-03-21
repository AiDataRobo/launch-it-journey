
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Quote, ThumbsUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const successStories = [
  {
    id: 1,
    name: 'David Wilson',
    from: 'Retail Manager',
    to: 'Full Stack Developer',
    company: 'Shopify',
    timeframe: '14 months',
    quote: '"Job Onboard helped me transition from retail to tech with structured learning paths and mentorship. Within a year, I landed my dream role as a developer."',
    imgSrc: '/placeholder.svg',
    keyPoints: [
      'No prior coding experience',
      'Followed Full Stack Developer roadmap',
      'Completed 3 major portfolio projects',
      'Received 4 job offers',
    ],
  },
  {
    id: 2,
    name: 'Aisha Johnson',
    from: 'Marketing Specialist',
    to: 'Data Analyst',
    company: 'Netflix',
    timeframe: '10 months',
    quote: '"The personalized skill assessment showed me exactly what I needed to learn. The mentor guidance was invaluable during my interviews!"',
    imgSrc: '/placeholder.svg',
    keyPoints: [
      'Leveraged existing Excel skills',
      'Focused on SQL and Python',
      'Built real-world data projects',
      'Salary increased by 45%',
    ],
  },
  {
    id: 3,
    name: 'Miguel Rodriguez',
    from: 'Teacher',
    to: 'Cybersecurity Analyst',
    company: 'IBM',
    timeframe: '18 months',
    quote: '"As a teacher wanting to transition to tech, I was overwhelmed until I found Job Onboard. Their structured approach made the difference."',
    imgSrc: '/placeholder.svg',
    keyPoints: [
      'Started with CompTIA Security+',
      'Built home lab for practical experience',
      'Participated in 5 CTF competitions',
      'Landed junior security role after 1 year',
    ],
  },
];

const SuccessJourneys = () => {
  return (
    <section id="success-journeys" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 -right-24 w-96 h-96 bg-jobonboard-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -left-24 w-96 h-96 bg-jobonboard-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-jobonboard-blue/10 text-jobonboard-blue text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real Career Transformation Stories
          </h2>
          <p className="text-lg text-gray-600">
            Get inspired by real people who successfully transitioned into fulfilling IT careers with Job Onboard.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {successStories.map((story, index) => (
              <motion.div 
                key={story.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + (index * 0.1) }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  {/* Left Column - Image */}
                  <div className="lg:col-span-2 h-full relative overflow-hidden">
                    <div className="h-64 lg:h-full">
                      <img 
                        src={story.imgSrc} 
                        alt={story.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                      <h3 className="text-2xl font-bold mb-1">{story.name}</h3>
                      <div className="flex items-center mb-2">
                        <span className="px-2 py-1 rounded bg-white/20 text-sm">
                          {story.from}
                        </span>
                        <ArrowRight className="mx-2 w-4 h-4" />
                        <span className="px-2 py-1 rounded bg-jobonboard-purple/80 text-sm">
                          {story.to}
                        </span>
                      </div>
                      <div className="text-sm opacity-90">
                        Now at <span className="font-medium">{story.company}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Column - Content */}
                  <div className="lg:col-span-3 p-8">
                    <div className="mb-6">
                      <div className="flex items-start mb-4">
                        <Quote className="w-10 h-10 text-jobonboard-purple/20 mr-3 flex-shrink-0" />
                        <p className="text-lg italic text-gray-700">{story.quote}</p>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500">
                        <ThumbsUp className="w-4 h-4 mr-1 text-jobonboard-green" />
                        <span>Achieved in <strong>{story.timeframe}</strong></span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Key Milestones</h4>
                      <ul className="space-y-2">
                        {story.keyPoints.map((point, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start bg-gray-50 p-3 rounded-lg"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.4 + (i * 0.1) }}
                          >
                            <div className="w-6 h-6 rounded-full bg-jobonboard-blue/10 text-jobonboard-blue flex items-center justify-center mr-3 flex-shrink-0">
                              <span className="font-medium text-xs">{i+1}</span>
                            </div>
                            <span>{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="border-jobonboard-purple text-jobonboard-purple hover:bg-jobonboard-purple/10"
                    >
                      Read Full Story
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button 
              className="bg-jobonboard-blue hover:bg-jobonboard-blue-light text-white"
            >
              View All Success Stories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SuccessJourneys;
