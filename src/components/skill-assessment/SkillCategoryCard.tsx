
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SkillCategory } from './types';

interface SkillCategoryCardProps {
  category: SkillCategory;
  index: number;
  onStartQuiz: (categoryId: string) => void;
}

const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ 
  category,
  index,
  onStartQuiz
}) => {
  // Animation variants
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        delay: i * 0.1
      }
    })
  };
  
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all hover:shadow-lg"
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
    >
      <div className="p-6">
        <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center ${category.colorClass}`}>
          {category.icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
        <p className="text-gray-600 mb-4 h-12">{category.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            <span>{category.timeLimit} minutes</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <Award className="w-4 h-4 mr-1" />
            <span>{category.questions} questions</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <Button 
            className="w-full bg-jobonboard-purple hover:bg-jobonboard-purple-light"
            onClick={() => onStartQuiz(category.id)}
          >
            Start Assessment
          </Button>
          
          {category.practiceModeAvailable && (
            <Button 
              variant="outline"
              className="w-full"
            >
              Practice Mode
            </Button>
          )}
        </div>
      </div>
      
      {category.difficulty && (
        <div className={`py-2 px-6 text-center text-sm ${
          category.difficulty === 'Beginner' ? 'bg-green-50 text-green-600' :
          category.difficulty === 'Intermediate' ? 'bg-yellow-50 text-yellow-600' :
          'bg-red-50 text-red-600'
        }`}>
          {category.difficulty} Level
        </div>
      )}
    </motion.div>
  );
};

export default SkillCategoryCard;
