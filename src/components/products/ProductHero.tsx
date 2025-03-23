
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Career Acceleration Products</h1>
          <p className="text-lg text-gray-600 mb-8">
            Professional tools and services designed to help you prepare, find opportunities, and grow in your career
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-jobonboard-purple hover:bg-jobonboard-purple-light" asChild>
              <Link to="/products">Explore All Products</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services#pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
        
        {/* Quick navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`#${category.id}`}
              className="flex items-center p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all group"
            >
              <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mr-4`}>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
