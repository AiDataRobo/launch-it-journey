
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { CommunityTopic } from './types';

interface CommunityTopicItemProps {
  topic: CommunityTopic;
  index: number;
}

const CommunityTopicItem: React.FC<CommunityTopicItemProps> = ({ topic, index }) => {
  return (
    <motion.div 
      className="p-4 rounded-lg border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all cursor-pointer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 + (index * 0.05) }}
    >
      <h3 className="font-medium mb-2 hover:text-jobonboard-purple transition-colors">{topic.title}</h3>
      <div className="flex text-sm text-gray-500">
        <span className="flex items-center mr-4">
          <MessageSquare className="w-3 h-3 mr-1" /> 
          {topic.replies} replies
        </span>
        <span className="flex items-center">
          <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M12 17L12 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M12 8L12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          {topic.views} views
        </span>
      </div>
    </motion.div>
  );
};

export default CommunityTopicItem;
