
import React from 'react';
import { ArrowRight, Play, ChevronRight, Users, LineChart, FileSearch, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-20 md:pt-28 pb-16 md:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-blue-50/80"></div>
        <motion.div 
          className="absolute -top-24 -right-24 w-96 h-96 bg-jobonboard-blue/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 -left-24 w-80 h-80 bg-jobonboard-purple/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6">
          {/* Left Column - Text & CTA */}
          <motion.div 
            className="w-full lg:w-5/12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Your career companion
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Careers aren't what they used to be, but neither are you. From job search to promotion, we're with you every step. Where are you headed?
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="group px-6 py-6 rounded-full bg-jobonboard-blue text-white font-medium hover:bg-jobonboard-blue-light shadow-md focus-ring inline-flex items-center gap-2"
                  asChild
                >
                  <Link to="/videos">
                    <Play className="w-4 h-4" />
                    <span>Watch video</span>
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="px-6 py-6 rounded-full bg-blue-50 border border-blue-100 text-jobonboard-blue font-medium hover:bg-blue-100 focus-ring inline-flex items-center gap-2"
                  variant="outline"
                  asChild
                >
                  <Link to="/signup">
                    <span>Get started</span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Career Dashboard Visualization */}
          <motion.div 
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div 
                className="relative bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100"
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Dashboard Header */}
                <div className="px-6 py-3 bg-white border-b border-gray-100 flex items-center gap-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex">
                    <motion.span
                      className="text-sm px-4 py-1 rounded-full bg-blue-50 text-jobonboard-blue font-medium mx-1 cursor-pointer"
                      whileHover={{ y: -2 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      Find a New Job
                    </motion.span>
                    <motion.span
                      className="text-sm px-4 py-1 rounded-full text-gray-400 font-medium mx-1 cursor-pointer"
                      whileHover={{ y: -2 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      Excel at Your Job
                    </motion.span>
                    <motion.span
                      className="text-sm px-4 py-1 rounded-full text-gray-400 font-medium mx-1 cursor-pointer"
                      whileHover={{ y: -2 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      Change Career
                    </motion.span>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-6 bg-blue-50/30">
                  <div className="grid grid-cols-12 gap-4">
                    {/* Career Path Elements */}
                    <motion.div 
                      className="col-span-6 lg:col-span-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 1 }}
                    >
                      <div className="bg-blue-100/70 p-4 rounded-xl h-48 flex flex-col">
                        <div className="flex justify-between items-start mb-3">
                          <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center">
                            <FileSearch className="w-3 h-3 text-jobonboard-blue" />
                          </div>
                        </div>
                        <div className="mt-auto">
                          <h3 className="font-medium text-sm mb-1">Find & track jobs</h3>
                          <div className="flex items-center text-xs text-jobonboard-blue">
                            <span>View details</span>
                            <ChevronRight className="w-3 h-3 ml-1" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="col-span-6 lg:col-span-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 1.2 }}
                    >
                      <div className="bg-green-100/70 p-4 rounded-xl h-48 flex flex-col">
                        <div className="flex justify-between items-start mb-3">
                          <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center">
                            <Users className="w-3 h-3 text-jobonboard-green" />
                          </div>
                          <div className="w-8 h-8 bg-white rounded-full overflow-hidden">
                            <img src="public/lovable-uploads/4f98bb9b-7b3d-4c07-b00f-446c6e057610.png" className="w-full h-full object-cover" alt="Coach" />
                          </div>
                        </div>
                        <div className="mt-auto">
                          <h3 className="font-medium text-sm mb-1">Meet with a coach</h3>
                          <div className="flex items-center text-xs text-jobonboard-green">
                            <span>Book session</span>
                            <ChevronRight className="w-3 h-3 ml-1" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="col-span-6 lg:col-span-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 1.4 }}
                    >
                      <div className="bg-green-100/40 p-4 rounded-xl h-48 flex flex-col">
                        <div className="flex justify-between items-start mb-3">
                          <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center">
                            <Briefcase className="w-3 h-3 text-jobonboard-green" />
                          </div>
                          <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">New</span>
                        </div>
                        <div className="mt-auto">
                          <h3 className="font-medium text-sm mb-1">Totally solve your job search</h3>
                          <div className="flex items-center text-xs text-jobonboard-green">
                            <span>Learn more</span>
                            <ChevronRight className="w-3 h-3 ml-1" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="col-span-6 lg:col-span-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 1.6 }}
                    >
                      <div className="bg-blue-100/50 p-4 rounded-xl h-48 flex flex-col">
                        <div className="flex justify-between items-start mb-3">
                          <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center">
                            <LineChart className="w-3 h-3 text-jobonboard-blue" />
                          </div>
                        </div>
                        <div className="mt-auto">
                          <h3 className="font-medium text-sm mb-1">Know your worth</h3>
                          <div className="flex items-center text-xs text-jobonboard-blue">
                            <span>Calculate now</span>
                            <ChevronRight className="w-3 h-3 ml-1" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Career Growth Illustration */}
                    <motion.div
                      className="col-span-12 mt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.8 }}
                    >
                      <div className="flex justify-center items-center h-16 relative">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                          <motion.div
                            className="h-0.5 w-72 bg-gray-200"
                            initial={{ width: 0 }}
                            animate={{ width: 288 }}
                            transition={{ duration: 1, delay: 2 }}
                          />
                        </div>
                        
                        <motion.div
                          className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
                          initial={{ x: -100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ 
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 2.5
                          }}
                        >
                          <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10">
                            <img 
                              src="public/lovable-uploads/4f98bb9b-7b3d-4c07-b00f-446c6e057610.png" 
                              className="w-6 h-6 object-cover" 
                              alt="Career growth" 
                            />
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
