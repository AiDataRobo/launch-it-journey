
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Award, Calendar, Clock, Notebook, Check, BookOpen, Code, Server, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CareerRoadmaps = () => {
  const [activeTab, setActiveTab] = useState('developer');

  const roadmapOptions = [
    { id: 'developer', label: 'Software Developer', icon: Code },
    { id: 'devops', label: 'DevOps Engineer', icon: Server },
    { id: 'security', label: 'Cybersecurity Expert', icon: Shield },
  ];

  const roadmapSteps = {
    developer: [
      {
        level: 'Entry Level',
        title: 'Junior Developer',
        duration: '1-2 years',
        skills: ['HTML/CSS', 'JavaScript Basics', 'Version Control (Git)', 'Basic Problem Solving'],
        certifications: ['Responsive Web Design', 'JavaScript Algorithms'],
        description: 'Focus on building a strong foundation in programming fundamentals and basic web technologies.'
      },
      {
        level: 'Mid Level',
        title: 'Software Developer',
        duration: '2-4 years',
        skills: ['Advanced JavaScript', 'Frontend Frameworks', 'Backend Development', 'Database Design'],
        certifications: ['React Developer', 'Node.js Developer'],
        description: 'Expand your expertise with frontend frameworks and backend technologies to build full-stack applications.'
      },
      {
        level: 'Senior Level',
        title: 'Senior Developer',
        duration: '4-8 years',
        skills: ['System Architecture', 'Performance Optimization', 'Technical Leadership', 'Mentoring'],
        certifications: ['AWS Solutions Architect', 'Full-Stack Engineer'],
        description: 'Lead development efforts, architect complex solutions, and mentor junior team members.'
      },
      {
        level: 'Expert Level',
        title: 'Software Architect',
        duration: '8+ years',
        skills: ['Enterprise Architecture', 'Distributed Systems', 'Strategic Planning', 'Technology Innovation'],
        certifications: ['Solutions Architecture', 'Cloud Architecture'],
        description: 'Design large-scale systems and guide strategic technology decisions for organization-wide impact.'
      }
    ],
    devops: [
      {
        level: 'Entry Level',
        title: 'DevOps Associate',
        duration: '1-2 years',
        skills: ['Linux Administration', 'Scripting Basics', 'CI/CD Concepts', 'Cloud Basics'],
        certifications: ['AWS/Azure Fundamentals', 'Docker Essentials'],
        description: 'Learn the fundamentals of automation, infrastructure, and deployment processes.'
      },
      {
        level: 'Mid Level',
        title: 'DevOps Engineer',
        duration: '2-4 years',
        skills: ['Container Orchestration', 'Infrastructure as Code', 'Monitoring Systems', 'Cloud Services'],
        certifications: ['Kubernetes Admin', 'Terraform Associate'],
        description: 'Implement advanced automation, containerization, and infrastructure management solutions.'
      },
      {
        level: 'Senior Level',
        title: 'Senior DevOps Engineer',
        duration: '4-7 years',
        skills: ['Platform Engineering', 'Security Automation', 'Multi-cloud Strategy', 'Performance Optimization'],
        certifications: ['AWS DevOps Professional', 'SRE Certification'],
        description: 'Design resilient platforms, optimize infrastructure costs, and implement scalable automation.'
      },
      {
        level: 'Expert Level',
        title: 'DevOps Architect',
        duration: '7+ years',
        skills: ['DevSecOps', 'Enterprise Architecture', 'Cloud-native Platforms', 'Disaster Recovery'],
        certifications: ['Cloud Security', 'Enterprise Architect'],
        description: 'Lead enterprise infrastructure strategies, design cloud-native platforms, and optimize organization-wide systems.'
      }
    ],
    security: [
      {
        level: 'Entry Level',
        title: 'Security Analyst',
        duration: '1-2 years',
        skills: ['Security Fundamentals', 'SIEM Tools', 'Vulnerability Assessment', 'Security Compliance'],
        certifications: ['CompTIA Security+', 'CEH (Certified Ethical Hacker)'],
        description: 'Monitor security events, analyze threats, and implement basic security controls.'
      },
      {
        level: 'Mid Level',
        title: 'Cybersecurity Specialist',
        duration: '2-4 years',
        skills: ['Penetration Testing', 'Security Architecture', 'Incident Response', 'Risk Assessment'],
        certifications: ['CISSP Associate', 'GIAC Security Essentials'],
        description: 'Conduct security assessments, respond to incidents, and design security solutions.'
      },
      {
        level: 'Senior Level',
        title: 'Security Engineer',
        duration: '4-7 years',
        skills: ['Advanced Threat Detection', 'Security Automation', 'Cloud Security', 'Security Architecture'],
        certifications: ['CISSP', 'OSCP'],
        description: 'Design and implement comprehensive security systems, lead incident response, and develop security strategies.'
      },
      {
        level: 'Expert Level',
        title: 'Security Architect',
        duration: '7+ years',
        skills: ['Enterprise Security', 'Zero Trust Architecture', 'Security Governance', 'Advanced Threat Mitigation'],
        certifications: ['CISM', 'CCSP (Certified Cloud Security Professional)'],
        description: 'Define security vision, design enterprise security architecture, and lead security governance.'
      }
    ]
  };

  const getSteps = () => {
    return roadmapSteps[activeTab as keyof typeof roadmapSteps] || roadmapSteps.developer;
  };

  return (
    <section id="career-roadmaps" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-gray-50/80"></div>
        <motion.div 
          className="absolute top-1/4 right-0 w-72 h-72 bg-jobonboard-purple/5 rounded-full blur-3xl"
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
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-jobonboard-blue/10 text-jobonboard-blue text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            <span>Career Pathways</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interactive Career Roadmaps
          </h2>
          <p className="text-lg text-gray-600">
            Explore step-by-step guides for various IT roles, including required skills, certifications, and experience levels.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="developer" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              {roadmapOptions.map(option => (
                <TabsTrigger 
                  key={option.id}
                  value={option.id}
                  className="flex items-center gap-2 py-3 data-[state=active]:bg-jobonboard-purple data-[state=active]:text-white"
                >
                  <option.icon className="w-4 h-4" />
                  <span className="hidden md:inline">{option.label}</span>
                  <span className="md:hidden">{option.label.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {Object.keys(roadmapSteps).map(tabId => (
              <TabsContent key={tabId} value={tabId}>
                <div className="relative pl-8 md:pl-12">
                  {/* Vertical timeline line */}
                  <div className="absolute top-0 left-3 md:left-5 bottom-0 w-1 bg-gradient-to-b from-jobonboard-blue via-jobonboard-purple to-jobonboard-green rounded-full"></div>
                  
                  {/* Timeline content */}
                  <div className="space-y-12">
                    {roadmapSteps[tabId as keyof typeof roadmapSteps].map((step, index) => (
                      <motion.div 
                        key={step.level} 
                        className="relative"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        {/* Timeline node */}
                        <div className="absolute -left-12 md:-left-14 top-0 w-8 h-8 bg-white rounded-full border-2 border-jobonboard-purple flex items-center justify-center shadow-md">
                          <Award className="w-4 h-4 text-jobonboard-purple" />
                        </div>
                        
                        {/* Content box */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                            <div>
                              <span className="inline-block px-3 py-1 bg-jobonboard-purple/10 text-jobonboard-purple text-sm font-medium rounded-full mb-2">
                                {step.level}
                              </span>
                              <h3 className="text-xl font-bold">{step.title}</h3>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="w-4 h-4 mr-1" />
                              <span>{step.duration}</span>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 mb-5">{step.description}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                                <Notebook className="w-4 h-4 mr-2 text-jobonboard-blue" />
                                Required Skills
                              </h4>
                              <ul className="space-y-1">
                                {step.skills.map((skill, i) => (
                                  <li key={i} className="flex items-start text-sm">
                                    <Check className="w-4 h-4 text-jobonboard-green mt-0.5 mr-2 flex-shrink-0" />
                                    <span>{skill}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                                <BookOpen className="w-4 h-4 mr-2 text-jobonboard-purple" />
                                Recommended Certifications
                              </h4>
                              <ul className="space-y-1">
                                {step.certifications.map((cert, i) => (
                                  <li key={i} className="flex items-start text-sm">
                                    <Check className="w-4 h-4 text-jobonboard-green mt-0.5 mr-2 flex-shrink-0" />
                                    <span>{cert}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="text-jobonboard-purple border-jobonboard-purple hover:bg-jobonboard-purple/10 mt-2"
                          >
                            Learn More
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CareerRoadmaps;
