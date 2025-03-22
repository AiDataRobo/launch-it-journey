
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Calendar } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mentor } from './types';

interface MentorCardProps {
  mentor: Mentor;
  index: number;
}

const MentorCard: React.FC<MentorCardProps> = ({ mentor, index }) => {
  return (
    <motion.div 
      key={mentor.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
    >
      <Card className="h-full flex flex-col">
        <CardHeader className="pb-0">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
              <img 
                src={mentor.imgSrc} 
                alt={mentor.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <CardTitle className="text-lg">{mentor.name}</CardTitle>
              <div className="text-sm text-gray-600 mt-1">{mentor.role}</div>
              <div className="text-sm text-gray-500">{mentor.company}</div>
              <div className="flex items-center mt-1">
                <span className="text-amber-500 font-medium text-sm">{mentor.rating}</span>
                <div className="flex ml-1">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-3 h-3 ${i < Math.floor(mentor.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-gray-500 ml-1">({mentor.reviews})</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="py-4">
          <div className="mb-3">
            <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
              <Award className="w-3 h-3" />
              <span>Expertise</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {mentor.expertise.map(skill => (
                <span 
                  key={skill} 
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
              <Clock className="w-3 h-3" />
              <span>Experience</span>
            </div>
            <div className="text-sm">{mentor.yearsExperience} years</div>
          </div>
        </CardContent>
        <CardFooter className="mt-auto">
          <Button 
            className="w-full bg-jobonboard-purple hover:bg-jobonboard-purple-light text-white"
          >
            Book a Session
            <Calendar className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default MentorCard;
