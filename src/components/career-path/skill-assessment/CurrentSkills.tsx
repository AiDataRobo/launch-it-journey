
import React from 'react';
import { motion } from 'framer-motion';
import SkillCategory from './SkillCategory';

export type SkillCategory = {
  name: string;
  skills: {
    name: string;
    level: number;
  }[];
};

type CurrentSkillsProps = {
  skillCategories: SkillCategory[];
};

const CurrentSkills: React.FC<CurrentSkillsProps> = ({ skillCategories }) => {
  return (
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
          <SkillCategory 
            key={category.name}
            name={category.name}
            skills={category.skills}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default CurrentSkills;
