
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, LineChart, Server, Globe, Fingerprint, Network, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SkillCategoryCard from './SkillCategoryCard';
import QuizModal from './QuizModal';
import { skillCategories } from './data';

const SkillCategoriesList = () => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleStartQuiz = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setIsQuizOpen(true);
  };

  return (
    <section id="skill-categories" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Skill Assessment</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select a category below to test your knowledge and earn certificates. 
            All assessments are timed and feature multiple-choice questions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard 
              key={category.id}
              category={category}
              index={index}
              onStartQuiz={handleStartQuiz}
            />
          ))}
        </div>
        
        {/* Show more categories button */}
        <div className="text-center mt-12">
          <Button variant="outline" className="px-6">
            Show More Categories
          </Button>
        </div>
      </div>
      
      {/* Quiz Modal */}
      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        categoryId={selectedCategory}
      />
    </section>
  );
};

export default SkillCategoriesList;
