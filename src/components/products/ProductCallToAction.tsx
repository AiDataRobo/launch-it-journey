
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Sparkles, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductCallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 opacity-70">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50/80 to-white"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-jobonboard-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-jobonboard-blue/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container px-6 mx-auto relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="bg-gradient-to-r from-jobonboard-purple/90 to-jobonboard-blue/90 p-1">
            <div className="bg-white rounded-t-xl p-8 md:p-12 relative">
              {/* Decorative sparkles */}
              <motion.div 
                className="absolute top-6 right-6 text-jobonboard-purple"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Sparkles size={24} />
              </motion.div>
              
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-jobonboard-purple/10 text-jobonboard-purple text-sm font-medium mb-4"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Take Your Career to the Next Level</span>
                </motion.div>
                
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Ready to accelerate your career?
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Start with our free tools or upgrade to premium services for personalized guidance, exclusive features, and accelerated career growth.
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Button size="lg" className="bg-jobonboard-purple hover:bg-jobonboard-purple-light group" asChild>
                    <Link to="/signup" className="inline-flex items-center">
                      Get Started Free
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  
                  <Button size="lg" variant="outline" className="group" asChild>
                    <Link to="/products#premium-services" className="inline-flex items-center">
                      Explore Premium
                      <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 divide-x divide-white/20 bg-gradient-to-r from-jobonboard-purple to-jobonboard-blue">
              {[
                { label: "Success Rate", value: "92%" },
                { label: "Active Users", value: "10,000+" },
                { label: "Career Paths", value: "25+" }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="p-4 text-center text-white"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-white/80 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCallToAction;
