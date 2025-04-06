
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Medal, Medal2, ThumbsUp, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { leaderboardData } from './data';

const LeaderboardSection = () => {
  const [activeCategory, setActiveCategory] = useState('web-development');
  
  // Filter leaderboard data by category
  const filteredData = leaderboardData.filter(item => item.categoryId === activeCategory);
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skill Assessment Leaderboards</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how your skills rank against others and get motivated to improve your position.
          </p>
        </div>
        
        <div className="mb-8 overflow-x-auto">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {leaderboardData
              .map(item => item.categoryId)
              .filter((value, index, self) => self.indexOf(value) === index)
              .map(categoryId => {
                const category = leaderboardData.find(item => item.categoryId === categoryId)?.category;
                return (
                  <Button 
                    key={categoryId}
                    variant={activeCategory === categoryId ? "default" : "outline"}
                    className={activeCategory === categoryId ? "bg-jobonboard-purple hover:bg-jobonboard-purple-light" : ""}
                    onClick={() => setActiveCategory(categoryId)}
                  >
                    {category}
                  </Button>
                );
              })}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16 text-center">Rank</TableHead>
                  <TableHead>Candidate</TableHead>
                  <TableHead className="text-center">Score</TableHead>
                  <TableHead className="text-center">Level</TableHead>
                  <TableHead className="text-center">Completed</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((item, index) => (
                  <TableRow key={item.id}>
                    <TableCell className="text-center font-medium">
                      {index === 0 ? (
                        <Medal className="w-6 h-6 text-yellow-500 inline" />
                      ) : index === 1 ? (
                        <Medal2 className="w-6 h-6 text-gray-400 inline" />
                      ) : index === 2 ? (
                        <Medal2 className="w-6 h-6 text-amber-700 inline" />
                      ) : (
                        <span className="text-gray-500">{index + 1}</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-jobonboard-purple/10 flex items-center justify-center text-sm font-medium text-jobonboard-purple">
                          {item.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-500">{item.title}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {item.score}%
                      </span>
                    </TableCell>
                    <TableCell className="text-center">{item.level}</TableCell>
                    <TableCell className="text-center text-gray-500">{item.completedDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              icon: <Users className="w-6 h-6 text-jobonboard-purple" />, 
              title: "2,500+ Users",
              description: "Have taken our skill assessments"
            },
            { 
              icon: <ThumbsUp className="w-6 h-6 text-jobonboard-blue" />, 
              title: "Industry-Verified",
              description: "Questions designed by professionals"
            },
            { 
              icon: <TrendingUp className="w-6 h-6 text-jobonboard-green" />, 
              title: "Regular Updates",
              description: "New questions added every month"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeaderboardSection;
