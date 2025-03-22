
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export type Certification = {
  name: string;
  status: 'completed' | 'in-progress' | 'recommended';
  date?: string;
  progress?: number;
};

type CertificationItemProps = {
  certification: Certification;
  index: number;
};

const CertificationItem: React.FC<CertificationItemProps> = ({ certification, index }) => {
  const { name, status, date, progress } = certification;
  
  return (
    <motion.div 
      className="p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
    >
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium text-gray-800">{name}</h4>
          {status === 'completed' && (
            <span className="text-xs text-jobonboard-green flex items-center mt-1">
              <Check className="w-3 h-3 mr-1" />
              Completed {date}
            </span>
          )}
          {status === 'in-progress' && progress && (
            <div className="mt-2">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-jobonboard-blue">In Progress</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-1" />
            </div>
          )}
          {status === 'recommended' && (
            <span className="text-xs text-gray-500 mt-1">Recommended</span>
          )}
        </div>
        {status === 'recommended' ? (
          <Button 
            size="sm" 
            variant="outline" 
            className="h-7 text-xs border-jobonboard-blue text-jobonboard-blue hover:bg-jobonboard-blue/10"
          >
            Start
          </Button>
        ) : status === 'in-progress' ? (
          <Button 
            size="sm" 
            variant="outline" 
            className="h-7 text-xs border-jobonboard-purple text-jobonboard-purple hover:bg-jobonboard-purple/10"
          >
            Continue
          </Button>
        ) : (
          <div className="w-6 h-6 rounded-full bg-jobonboard-green/10 flex items-center justify-center">
            <Award className="w-3 h-3 text-jobonboard-green" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CertificationItem;
