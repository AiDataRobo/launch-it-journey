
import React from 'react';
import { ArrowRight, Package, FileCheck, Zap, BadgeCheck, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface QuickNavItem {
  id: string;
  title: string;
  bgColor: string;
  iconColor: string;
  icon: LucideIcon;
}

interface ProductHeroProps {
  categories: QuickNavItem[];
}

const ProductHero = ({ categories }: ProductHeroProps) => {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 10
      } 
    }
  };

  // Features to highlight
  const features = [
    { icon: Package, text: "All-in-one career tools" },
    { icon: FileCheck, text: "Customizable templates" },
    { icon: Zap, text: "AI-powered insights" },
    { icon: BadgeCheck, text: "Expert-backed resources" }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-jobonboard-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-jobonboard-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 mb-16">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-jobonboard-purple/10 text-jobonboard-purple text-sm font-medium mb-6"
            >
              <Package className="w-4 h-4" />
              <span>Career Growth Products</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Career Acceleration <span className="text-gradient-primary">Products</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Professional tools and services designed to help you prepare, find opportunities, and grow in your career journey.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button size="lg" className="bg-jobonboard-purple hover:bg-jobonboard-purple-light group" asChild>
                <Link to="#all-products" className="inline-flex items-center">
                  Explore All Products
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services#pricing">View Pricing</Link>
              </Button>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 gap-3"
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center ${index % 2 === 0 ? 'bg-jobonboard-purple/10' : 'bg-jobonboard-blue/10'}`}>
                    <feature.icon className={`w-4 h-4 ${index % 2 === 0 ? 'text-jobonboard-purple' : 'text-jobonboard-blue'}`} />
                  </div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative max-w-lg w-full">
              {/* Main illustration */}
              <div className="relative z-10 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8Y29kaW5nfHwwfHx8fDE2MjE1MjQwMzA&ixlib=rb-4.0.3&q=80&w=700" 
                  alt="Career Growth Tools" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-5 -right-5 w-24 h-24 bg-jobonboard-purple/10 rounded-full blur-md z-0"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.6, 0.8, 0.6]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-5 -left-5 w-20 h-20 bg-jobonboard-blue/10 rounded-full blur-md z-0"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.6, 0.8, 0.6]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>
        
        {/* Quick navigation */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
            >
              <Link 
                to={`#${category.id}`}
                className="flex items-center p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all group"
              >
                <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className={`${category.iconColor}`} size={24} />
                </div>
                <div>
                  <h3 className="font-medium mb-1 group-hover:text-jobonboard-purple transition-colors">{category.title.split(' & ')[0]}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>View products</span>
                    <ArrowRight className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductHero;
