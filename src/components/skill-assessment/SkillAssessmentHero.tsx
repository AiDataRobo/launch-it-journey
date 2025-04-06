
import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';

const SkillAssessmentHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-accent/10 to-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 -right-24 w-96 h-96 bg-jobonboard-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -left-24 w-96 h-96 bg-jobonboard-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-jobonboard-purple/10 text-jobonboard-purple text-sm font-medium mb-4">
              <BrainCircuit className="w-4 h-4" />
              <span>Validate Your Tech Skills</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Prove Your <span className="text-gradient-primary">Technical</span> Expertise
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Take interactive assessments in various IT domains, get certified, and showcase your skills to potential employers.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#skill-categories" 
                className="bg-jobonboard-purple text-white px-6 py-3 rounded-lg font-medium hover:bg-jobonboard-purple-light transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Assessment
              </motion.a>
              <motion.a 
                href="#certificates" 
                className="bg-white border border-gray-200 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Certificates
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold">Web Development Quiz</h3>
                    <p className="text-gray-600">Test your front-end skills</p>
                  </div>
                  <div className="bg-jobonboard-purple/10 text-jobonboard-purple rounded-full py-1 px-3 text-sm font-medium">
                    25 questions
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <p className="font-medium mb-2">Which CSS property is used to change the text color?</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                        <span>text-style</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full border-2 border-jobonboard-purple bg-jobonboard-purple/10"></div>
                        <span className="font-medium">color</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                        <span>font-color</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                        <span>text-color</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center gap-1 text-sm text-gray-500">
                      <span className="font-medium text-jobonboard-purple">7</span> of <span>25</span> questions completed
                    </div>
                    <div className="mt-2 bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-jobonboard-purple h-full rounded-full" style={{ width: '28%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-jobonboard-blue/20 rounded-full blur-xl -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-jobonboard-purple/10 rounded-full blur-xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillAssessmentHero;
