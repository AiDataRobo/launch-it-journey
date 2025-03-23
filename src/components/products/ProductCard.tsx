
import React from 'react';
import { LucideIcon, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  cta: string;
  color: string;
  bgColor: string;
  premium: boolean;
  index?: number;
}

const ProductCard = ({
  id,
  title,
  description,
  icon: Icon,
  cta,
  color,
  bgColor,
  premium,
  index = 0
}: ProductCardProps) => {
  // Determine the appropriate link based on product type
  const getProductLink = () => {
    if (premium) {
      return `/services/premium/${id}`;
    }
    
    // Based on product category
    if (id.includes('resume')) {
      return `/services/resume-tools/${id}`;
    } else if (id.includes('interview')) {
      return `/services/interview-prep/${id}`;
    } else {
      return `/services/job-tools/${id}`;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5 }}
    >
      <Card className={`border ${premium ? 'border-amber-200' : 'border-gray-100'} hover:shadow-lg transition-all h-full`}>
        <CardHeader className="pb-4">
          <div className="flex items-center mb-3">
            <motion.div 
              className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center mr-3`}
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Icon className={color} size={24} />
            </motion.div>
            {premium && (
              <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-1.5"></span>
                Premium
              </span>
            )}
          </div>
          <CardTitle className="text-xl">
            <Link to={getProductLink()} className="hover:text-jobonboard-purple transition-colors">
              {title}
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600 min-h-[80px]">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button 
            className={`w-full group ${
              premium 
                ? 'bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500' 
                : color === 'text-jobonboard-blue' 
                  ? 'bg-jobonboard-blue hover:bg-jobonboard-blue-light' 
                  : color === 'text-jobonboard-green' 
                    ? 'bg-jobonboard-green hover:bg-jobonboard-green-light' 
                    : 'bg-jobonboard-purple hover:bg-jobonboard-purple-light'
            }`}
            asChild
          >
            <Link to={getProductLink()} className="inline-flex items-center justify-center">
              {cta}
              <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
