
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckSquare, HelpCircle, ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const InterviewPrep = () => {
  const resumeTemplates = [
    {
      id: 1,
      name: 'Software Developer',
      description: 'Emphasizes technical skills, projects, and relevant experience for developer roles.',
      format: 'Word, PDF',
      downloads: '12K+',
      imgSrc: '/placeholder.svg',
    },
    {
      id: 2,
      name: 'Data Scientist',
      description: 'Highlights analytical skills, data projects, and technical expertise for data roles.',
      format: 'Word, PDF',
      downloads: '8K+',
      imgSrc: '/placeholder.svg',
    },
    {
      id: 3,
      name: 'Cybersecurity Specialist',
      description: 'Focuses on security certifications, technical skills, and security projects.',
      format: 'Word, PDF',
      downloads: '6K+',
      imgSrc: '/placeholder.svg',
    },
  ];

  const interviewQuestions = [
    {
      category: 'Technical',
      questions: [
        'Explain the difference between REST and GraphQL APIs.',
        'How would you optimize a slow-performing database query?',
        'Describe the process of troubleshooting a network connectivity issue.',
        'What security measures would you implement for a web application?',
      ]
    },
    {
      category: 'Behavioral',
      questions: [
        'Describe a challenging project you worked on and how you overcame obstacles.',
        'How do you stay updated with the latest technologies in your field?',
        'Tell me about a time when you had to meet a tight deadline.',
        'How do you handle disagreements within a team?',
      ]
    },
  ];

  return (
    <section id="interview-prep" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-gray-50/80"></div>
        <motion.div 
          className="absolute top-1/4 right-0 w-72 h-72 bg-jobonboard-green/5 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 left-0 w-72 h-72 bg-jobonboard-blue/5 rounded-full blur-3xl"
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
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-jobonboard-purple/10 text-jobonboard-purple text-sm font-medium mb-4">
            <FileText className="w-4 h-4" />
            <span>Application Materials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Resume & Interview Preparation
          </h2>
          <p className="text-lg text-gray-600">
            Stand out with role-specific resume templates and prepare for interviews with expert-curated questions.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Resume Templates */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <CheckSquare className="w-5 h-5 text-jobonboard-blue mr-2" />
              Role-Specific Resume Templates
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resumeTemplates.map((template, index) => (
                <motion.div 
                  key={template.id}
                  className="rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <div className="p-4 border-b border-gray-100">
                    <div className="aspect-[8.5/11] bg-gray-100 rounded-md overflow-hidden">
                      <img 
                        src={template.imgSrc} 
                        alt={`${template.name} Resume Template`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="font-semibold text-lg mb-2">{template.name} Resume</h4>
                    <p className="text-sm text-gray-600 mb-4">{template.description}</p>
                    
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                      <span>Formats: {template.format}</span>
                      <span>{template.downloads} downloads</span>
                    </div>
                    
                    <Button 
                      className="w-full bg-jobonboard-blue hover:bg-jobonboard-blue-light text-white"
                    >
                      Download Template
                      <Download className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Interview Questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <HelpCircle className="w-5 h-5 text-jobonboard-purple mr-2" />
              Common Interview Questions
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {interviewQuestions.map((section, index) => (
                <Card key={section.category} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {section.category} Questions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {section.questions.map((question, qIndex) => (
                        <motion.li 
                          key={qIndex}
                          className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) + (qIndex * 0.05) }}
                        >
                          <div className="flex items-start">
                            <span className="w-6 h-6 rounded-full bg-jobonboard-purple/10 text-jobonboard-purple flex items-center justify-center mr-3 flex-shrink-0">
                              <span className="font-medium text-xs">{qIndex+1}</span>
                            </span>
                            <span className="text-gray-700">{question}</span>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="outline" 
                      className="w-full border-jobonboard-purple text-jobonboard-purple hover:bg-jobonboard-purple/10"
                    >
                      View Sample Answers
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button 
                className="bg-jobonboard-green hover:bg-jobonboard-green-light text-white"
              >
                Access Full Interview Preparation Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InterviewPrep;
