
import React from 'react';
import { motion } from 'framer-motion';
import CertificationItem, { Certification } from './CertificationItem';

type CertificationsProps = {
  certifications: Certification[];
};

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
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
          <CertificationItem 
            key={cert.name} 
            certification={cert} 
            index={index} 
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Certifications;
