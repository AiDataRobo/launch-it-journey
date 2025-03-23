
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  cta: string;
  color: string;
  bgColor: string;
  premium: boolean;
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
    <Card className={`border ${premium ? 'border-amber-200' : 'border-gray-100'} hover:shadow-md transition-all`}>
      <CardHeader className="pb-4">
        <div className="flex items-center mb-3">
          <div className={`w-10 h-10 ${bgColor} rounded-lg flex items-center justify-center mr-3`}>
            <Icon className={color} size={20} />
          </div>
          {premium && (
            <span className="px-2 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full">
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
          className={`w-full ${
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
          <Link to={getProductLink()}>
            {cta}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
