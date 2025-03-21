
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, ChevronRight, Check, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const skillCategories = [
  {
    name: 'Programming & Web',
    skills: [
      { name: 'JavaScript', level: 65 },
      { name: 'HTML/CSS', level: 80 },
      { name: 'React', level: 60 },
      { name: 'Python', level: 40 },
    ]
  },
  {
    name: 'Data & Analytics',
    skills: [
      { name: 'SQL', level: 55 },
      { name: 'Data Visualization', level: 30 },
      { name: 'Statistical Analysis', level: 25 },
      { name: 'Machine Learning', level: 15 },
    ]
  },
  {
    name: 'DevOps & Infrastructure',
    skills: [
      { name: 'Git/Version Control', level: 75 },
      { name: 'Docker', level: 30 },
      { name: 'CI/CD', level: 20 },
      { name: 'Cloud Services (AWS/Azure)', level: 45 },
    ]
  },
];

const certifications = [
  { name: 'AWS Cloud Practitioner', status: 'completed', date: 'Jun 2023' },
  { name: 'JavaScript Algorithms & Data Structures', status: 'completed', date: 'Mar 2023' },
  { name: 'React Developer', status: 'in-progress', progress: 65 },
  { name: 'Full Stack Web Development', status: 'recommended' },
];

const SkillAssessment = () => {
  const [showResults, setShowResults] = useState(true);
  
  const getSkillLevel = (level: number) => {
    if (level < 30) return 'Beginner';
    if (level < 60) return 'Intermediate';
    if (level < 85) return 'Advanced';
    return 'Expert';
  };
  
  const getSkillColor = (level: number) => {
    if (level < 30) return 'bg-jobonboard-blue/70';
    if (level < 60) return 'bg-jobonboard-blue';
    if (level < 85) return 'bg-jobonboard-purple';
    return 'bg-jobonboard-green';
  };

  return (
    <section id="skill-assessment" className="py-20 bg-gray-50 relative overflow-hidden">
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
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-jobonboard-green/10 text-jobonboard-green text-sm font-medium mb-4">
            <Target className="w-4 h-4" />
            <span>Skills & Progress Tracking</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Assess Your Skills & Track Progress
          </h2>
          <p className="text-lg text-gray-600">
            Evaluate your current skill set, identify gaps, and track your progress towards your desired IT role.
          </p>
          
          {!showResults && (
            <Button 
              onClick={() => setShowResults(true)}
              className="mt-6 bg-jobonboard-green hover:bg-jobonboard-green-light"
            >
              Take Skill Assessment
            </Button>
          )}
        </motion.div>

        {showResults && (
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Skill Categories */}
              <div className="lg:col-span-2">
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-jobonboard-blue/10 text-jobonboard-blue flex items-center justify-center mr-3">
                      <span className="font-bold">1</span>
                    </span>
                    Your Current Skills
                  </h3>
                  
                  <div className="space-y-8">
                    {skillCategories.map((category, index) => (
                      <div key={category.name}>
                        <h4 className="font-semibold text-gray-700 mb-4">{category.name}</h4>
                        <div className="space-y-4">
                          {category.skills.map((skill, skillIndex) => (
                            <motion.div 
                              key={skill.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.1 + (index * 0.1) + (skillIndex * 0.05) }}
                            >
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-sm font-medium">{skill.name}</span>
                                <span className="text-xs font-medium text-gray-500">{getSkillLevel(skill.level)}</span>
                              </div>
                              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <motion.div 
                                  className={`h-full ${getSkillColor(skill.level)} rounded-full`}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{ duration: 0.8, delay: 0.2 + (index * 0.1) + (skillIndex * 0.05) }}
                                ></motion.div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              {/* Certifications and Recommendations */}
              <div>
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-jobonboard-purple/10 text-jobonboard-purple flex items-center justify-center mr-3">
                      <span className="font-bold">2</span>
                    </span>
                    Certifications
                  </h3>
                  
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <motion.div 
                        key={cert.name}
                        className="p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-gray-800">{cert.name}</h4>
                            {cert.status === 'completed' && (
                              <span className="text-xs text-jobonboard-green flex items-center mt-1">
                                <Check className="w-3 h-3 mr-1" />
                                Completed {cert.date}
                              </span>
                            )}
                            {cert.status === 'in-progress' && (
                              <div className="mt-2">
                                <div className="flex justify-between text-xs mb-1">
                                  <span className="text-jobonboard-blue">In Progress</span>
                                  <span>{cert.progress}%</span>
                                </div>
                                <Progress value={cert.progress} className="h-1" />
                              </div>
                            )}
                            {cert.status === 'recommended' && (
                              <span className="text-xs text-gray-500 mt-1">Recommended</span>
                            )}
                          </div>
                          {cert.status === 'recommended' ? (
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="h-7 text-xs border-jobonboard-blue text-jobonboard-blue hover:bg-jobonboard-blue/10"
                            >
                              Start
                            </Button>
                          ) : cert.status === 'in-progress' ? (
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="h-7 text-xs border-jobonboard-purple text-jobonboard-purple hover:bg-jobonboard-purple/10"
                            >
                              Continue
                            </Button>
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-jobonboard-green/10 flex items-center justify-center">
                              <Award className="w-3 h-3 text-jobonboard-green" />
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-jobonboard-green/10 text-jobonboard-green flex items-center justify-center mr-3">
                      <span className="font-bold">3</span>
                    </span>
                    Next Steps
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    Based on your assessment, we recommend focusing on these areas to advance your career:
                  </p>
                  
                  <ul className="space-y-3 mb-4">
                    {['Strengthen your Python skills', 'Learn basic machine learning concepts', 'Practice cloud deployment with AWS'].map((item, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                      >
                        <ChevronRight className="text-jobonboard-purple mt-1 mr-2" size={16} />
                        <span className="text-sm">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full bg-jobonboard-purple hover:bg-jobonboard-purple-light text-white"
                  >
                    View Personalized Learning Path
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillAssessment;
