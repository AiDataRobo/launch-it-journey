
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CurrentSkills from './skill-assessment/CurrentSkills';
import Certifications from './skill-assessment/Certifications';
import NextSteps from './skill-assessment/NextSteps';
import { skillCategories, certifications, nextStepsRecommendations } from './skill-assessment/data';

const SkillAssessment = () => {
  const [showResults, setShowResults] = useState(true);

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
                <CurrentSkills skillCategories={skillCategories} />
              </div>
              
              {/* Certifications and Recommendations */}
              <div>
                <Certifications certifications={certifications} />
                <NextSteps recommendations={nextStepsRecommendations} />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillAssessment;
