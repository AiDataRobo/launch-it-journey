
import React from 'react';
import { motion } from 'framer-motion';
import { IconProps } from 'lucide-react';

interface SectionHeaderProps {
  icon: React.ComponentType<IconProps>;
  tagText: string;
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  icon: Icon, 
  tagText, 
  title, 
  description 
}) => {
  return (
    <motion.div 
      className="max-w-2xl mx-auto text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-jobonboard-green/10 text-jobonboard-green text-sm font-medium mb-4">
        <Icon className="w-4 h-4" />
        <span>{tagText}</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h2>
      <p className="text-lg text-gray-600">
        {description}
      </p>
    </motion.div>
  );
};

export default SectionHeader;
