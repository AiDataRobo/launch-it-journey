
import React from 'react';
import { ArrowRight, Rocket, CheckCircle, Star, Briefcase, Award, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  // Career journey steps animation
  const journeySteps = [
    { icon: Briefcase, text: "Search Jobs", color: "bg-jobonboard-blue/20 text-jobonboard-blue" },
    { icon: Sparkles, text: "Build Skills", color: "bg-jobonboard-purple/20 text-jobonboard-purple" },
    { icon: CheckCircle, text: "Get Hired", color: "bg-jobonboard-green/20 text-jobonboard-green" },
    { icon: Award, text: "Career Growth", color: "bg-amber-100 text-amber-600" }
  ];

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-blue-50/80"></div>
        <motion.div 
          className="absolute -top-24 -right-24 w-96 h-96 bg-jobonboard-green/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 -left-24 w-80 h-80 bg-jobonboard-blue/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute -bottom-8 right-1/4 w-64 h-64 bg-jobonboard-purple/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-6">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Features Banner */}
            <motion.div 
              className="flex items-center gap-2 px-4 py-2 bg-jobonboard-purple/10 rounded-full w-fit mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-4 h-4 text-jobonboard-purple" />
              <span className="text-sm font-medium text-jobonboard-purple">Trusted by 1000+ IT Professionals</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Launch Your IT Career with <span className="text-gradient-primary">Job Onboard</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Get personalized career guidance, skill-building resources, and job opportunities tailored to your experience level.
            </motion.p>

            {/* Feature List */}
            <motion.div 
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                'Personalized career roadmap',
                'Industry-recognized certifications',
                'Direct connections with top employers'
              ].map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3 text-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle className="w-5 h-5 text-jobonboard-green" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="group px-6 py-6 rounded-full bg-jobonboard-purple text-white font-medium hover:bg-jobonboard-purple-light shadow-md focus-ring inline-flex items-center gap-2"
                  asChild
                >
                  <Link to="/signup">
                    <motion.span
                      initial={{ opacity: 1 }}
                      whileHover={{ opacity: 1 }}
                    >
                      Get Started
                    </motion.span>
                    <motion.div
                      className="ml-1"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Rocket className="w-4 h-4" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="px-6 py-6 rounded-full border border-gray-300 text-gray-700 font-medium hover:border-jobonboard-purple hover:text-jobonboard-purple focus-ring inline-flex items-center gap-2 group"
                  variant="outline"
                  asChild
                >
                  <Link to="#career-paths">
                    <span>Explore Careers</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-jobonboard-blue/5 backdrop-blur-sm rounded-2xl"
                animate={{ rotate: [3, 2, 3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="relative bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100"
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="px-6 py-4 bg-jobonboard-blue/5 border-b border-gray-100">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-8">
                    <motion.div 
                      className="h-6 w-48 bg-jobonboard-purple/20 rounded-md mb-2"
                      initial={{ width: 0 }}
                      animate={{ width: "12rem" }}
                      transition={{ duration: 1, delay: 0.8 }}
                    />
                    <motion.div 
                      className="h-4 w-64 bg-gray-200 rounded-md"
                      initial={{ width: 0 }}
                      animate={{ width: "16rem" }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                  </div>
                  
                  {/* Career Journey Steps Animation */}
                  <div className="space-y-6">
                    {journeySteps.map((step, index) => (
                      <motion.div 
                        key={index}
                        className="flex gap-4 items-center"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1 + index * 0.3 }}
                      >
                        <motion.div 
                          className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <step.icon className="w-6 h-6" />
                        </motion.div>
                        <div>
                          <motion.div 
                            className="h-5 w-32 bg-gray-700 rounded animate-pulse-slow mb-1"
                            initial={{ width: 0 }}
                            animate={{ width: "8rem" }}
                            transition={{ duration: 0.8, delay: 1.2 + index * 0.3 }}
                          >
                            <span className="sr-only">{step.text}</span>
                          </motion.div>
                          <motion.div 
                            className="h-3 w-24 bg-gray-300 rounded animate-pulse-slow"
                            initial={{ width: 0 }}
                            animate={{ width: "6rem" }}
                            transition={{ duration: 0.5, delay: 1.4 + index * 0.3 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div 
                    className="mt-8"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.5 }}
                  >
                    <motion.div 
                      className="h-10 w-full bg-jobonboard-purple/20 rounded-md"
                      whileHover={{ 
                        backgroundColor: "rgba(139, 92, 246, 0.3)",
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                    />
                  </motion.div>
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
