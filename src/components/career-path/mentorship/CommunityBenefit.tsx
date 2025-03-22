
import React from 'react';
import { motion } from 'framer-motion';

interface CommunityBenefitProps {
  title: string;
  description: string;
  index: number;
}

const CommunityBenefit: React.FC<CommunityBenefitProps> = ({ title, description, index }) => {
  return (
    <motion.li 
      className="flex gap-3"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.3 + (index * 0.05) }}
    >
      <div className="w-10 h-10 rounded-full bg-jobonboard-green/10 flex items-center justify-center flex-shrink-0">
        <span className="text-jobonboard-green font-bold">{index + 1}</span>
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </motion.li>
  );
};

export default CommunityBenefit;
