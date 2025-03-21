
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CareerHero = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-jobonboard-blue/5 via-white to-jobonboard-purple/5"></div>
        <motion.div 
          className="absolute top-1/4 right-0 w-72 h-72 bg-jobonboard-purple/5 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 left-0 w-72 h-72 bg-jobonboard-blue/5 rounded-full blur-3xl"
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

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <motion.div 
            className="flex-1 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-jobonboard-purple/10 text-jobonboard-purple text-sm font-medium mb-6">
              <Compass className="w-4 h-4" />
              <span>Career Guidance</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Find Your Perfect 
              <span className="text-gradient-secondary"> IT Career Path</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Discover personalized career paths, build in-demand skills, and connect with industry experts to accelerate your IT career journey.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-jobonboard-purple hover:bg-jobonboard-purple-light text-white">
                Discover Your Path
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button size="lg" variant="outline" className="border-jobonboard-blue text-jobonboard-blue hover:bg-jobonboard-blue/10">
                Take Skill Assessment
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 w-full max-w-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-jobonboard-blue/80 to-jobonboard-purple/80 rounded-2xl shadow-xl overflow-hidden">
              <div className="absolute inset-1 bg-white rounded-xl overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="IT Career Journey" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
