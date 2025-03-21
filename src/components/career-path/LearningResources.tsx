
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Filter, Star, Clock, ArrowUpRight, Code, Database, Shield, Brain, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const courses = [
  {
    id: 1,
    title: 'Complete Full-Stack Web Development',
    description: 'Master frontend and backend technologies to build complete web applications.',
    platform: 'Udemy',
    category: 'Development',
    level: 'Intermediate',
    duration: '24 weeks',
    rating: 4.8,
    reviews: 12500,
    tag: 'Bestseller',
    icon: Code,
    color: 'text-jobonboard-blue',
    bgColor: 'bg-jobonboard-blue/10',
  },
  {
    id: 2,
    title: 'Machine Learning & Data Science Bootcamp',
    description: 'Learn Python, TensorFlow, and data analysis techniques for a career in data science.',
    platform: 'Coursera',
    category: 'Data Science',
    level: 'Advanced',
    duration: '16 weeks',
    rating: 4.7,
    reviews: 8900,
    tag: 'Top Rated',
    icon: Database,
    color: 'text-jobonboard-purple',
    bgColor: 'bg-jobonboard-purple/10',
  },
  {
    id: 3,
    title: 'Cybersecurity Professional Certificate',
    description: 'Develop skills in network security, penetration testing, and security management.',
    platform: 'edX',
    category: 'Security',
    level: 'Beginner to Intermediate',
    duration: '20 weeks',
    rating: 4.9,
    reviews: 5600,
    tag: 'Certificate',
    icon: Shield,
    color: 'text-jobonboard-green',
    bgColor: 'bg-jobonboard-green/10',
  },
  {
    id: 4,
    title: 'Artificial Intelligence Fundamentals',
    description: 'Understand the core concepts of AI, machine learning, and neural networks.',
    platform: 'LinkedIn Learning',
    category: 'Artificial Intelligence',
    level: 'Intermediate',
    duration: '12 weeks',
    rating: 4.6,
    reviews: 3200,
    tag: 'New',
    icon: Brain,
    color: 'text-pink-500',
    bgColor: 'bg-pink-50',
  },
];

const categories = [
  { name: 'All', value: 'all', count: 845 },
  { name: 'Development', value: 'dev', count: 340 },
  { name: 'Data Science', value: 'data', count: 210 },
  { name: 'Security', value: 'security', count: 175 },
  { name: 'Cloud', value: 'cloud', count: 120 },
];

const LearningResources = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <section id="learning-resources" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 -right-24 w-96 h-96 bg-jobonboard-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -left-24 w-96 h-96 bg-jobonboard-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-jobonboard-purple/10 text-jobonboard-purple text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Learning Opportunities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Courses & Learning Resources
          </h2>
          <p className="text-lg text-gray-600">
            Access high-quality courses, certifications, and tutorials tailored for your IT career path.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Search and Filters */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-10 flex flex-col md:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                type="text"
                placeholder="Search for courses, skills, or topics..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="text-jobonboard-purple w-5 h-5" />
              <span className="text-sm font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category.value}
                  variant={activeCategory === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category.value)}
                  className={activeCategory === category.value ? "bg-jobonboard-purple hover:bg-jobonboard-purple-light" : ""}
                >
                  {category.name}
                  <span className="ml-1 text-xs opacity-70">({category.count})</span>
                </Button>
              ))}
            </div>
          </motion.div>
          
          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              >
                <div className="h-40 bg-gradient-to-r from-gray-100 to-gray-200 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-full opacity-80 ${course.bgColor}`}></div>
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <course.icon className={`${course.color} w-20 h-20`} />
                  </div>
                  {course.tag && (
                    <span className="absolute top-4 right-4 px-2 py-1 bg-white/90 text-jobonboard-purple text-xs font-medium rounded-full">
                      {course.tag}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                      {course.platform}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                      <span className="text-xs text-gray-500">({course.reviews.toLocaleString()})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2 h-14">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2 h-10">{course.description}</p>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <span>{course.level}</span>
                  </div>
                  
                  <Button 
                    className="w-full bg-jobonboard-purple hover:bg-jobonboard-purple-light text-white"
                  >
                    View Course
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Learning Platforms */}
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6">Integrated Learning Platforms</h3>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              Job Onboard partners with top learning platforms to provide you with a seamless learning experience and special discounts.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {['Udemy', 'Coursera', 'LinkedIn Learning', 'Pluralsight', 'edX'].map((platform, index) => (
                <motion.div 
                  key={platform}
                  className="text-center opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.6, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-24 h-24 bg-gray-200 rounded-full mb-2 flex items-center justify-center">
                    <span className="font-bold text-gray-500">{platform.charAt(0)}</span>
                  </div>
                  <span className="text-sm font-medium">{platform}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LearningResources;
