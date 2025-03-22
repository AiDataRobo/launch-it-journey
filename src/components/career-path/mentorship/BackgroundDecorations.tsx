
import React from 'react';
import { motion } from 'framer-motion';

const BackgroundDecorations: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-gray-50/80"></div>
      <motion.div 
        className="absolute top-1/4 right-0 w-72 h-72 bg-jobonboard-blue/5 rounded-full blur-3xl"
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
        className="absolute bottom-1/4 left-0 w-72 h-72 bg-jobonboard-purple/5 rounded-full blur-3xl"
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
  );
};

export default BackgroundDecorations;
