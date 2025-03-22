
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import CommunityTopicItem from './CommunityTopicItem';
import CommunityBenefit from './CommunityBenefit';
import { communityTopics } from './data';

const benefits = [
  {
    title: 'Peer Networking',
    description: 'Connect with professionals at all stages of their IT careers.'
  },
  {
    title: 'Knowledge Sharing',
    description: 'Learn from real-world experiences and industry insights.'
  },
  {
    title: 'Resume Reviews',
    description: 'Get feedback on your resume from experienced professionals.'
  },
  {
    title: 'Mock Interviews',
    description: 'Practice your interview skills with community volunteers.'
  },
  {
    title: 'Job Referrals',
    description: 'Access exclusive job opportunities through community connections.'
  },
];

const CommunityTab: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-jobonboard-purple" />
                Popular Discussions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {communityTopics.map((topic, index) => (
                  <CommunityTopicItem key={index} topic={topic} index={index} />
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                variant="ghost" 
                className="w-full text-jobonboard-purple hover:bg-jobonboard-purple/10 hover:text-jobonboard-purple-light"
              >
                View All Discussions
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-jobonboard-green" />
                Community Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <CommunityBenefit 
                    key={index}
                    title={benefit.title}
                    description={benefit.description}
                    index={index}
                  />
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-jobonboard-green hover:bg-jobonboard-green-light text-white"
              >
                Join Our Community
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default CommunityTab;
