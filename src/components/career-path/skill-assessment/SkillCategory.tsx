
import React from 'react';
import { motion } from 'framer-motion';

type Skill = {
  name: string;
  level: number;
};

type SkillCategoryProps = {
  name: string;
  skills: Skill[];
  index: number;
};

const SkillCategory: React.FC<SkillCategoryProps> = ({ name, skills, index }) => {
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
    <div>
      <h4 className="font-semibold text-gray-700 mb-4">{name}</h4>
      <div className="space-y-4">
        {skills.map((skill, skillIndex) => (
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
  );
};

export default SkillCategory;
