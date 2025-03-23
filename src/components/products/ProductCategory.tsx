
import React from 'react';
import { LucideIcon } from 'lucide-react';
import ProductCard from './ProductCard';

export interface ProductItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  cta: string;
  color: string;
  bgColor: string;
  premium: boolean;
}

interface ProductCategoryProps {
  id: string;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
  icon: LucideIcon;
  products: ProductItem[];
}

const ProductCategory = ({
  id,
  title,
  description,
  bgColor,
  iconColor,
  icon: Icon,
  products
}: ProductCategoryProps) => {
  return (
    <section 
      id={id} 
      className="py-16 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-70"></div>
      
      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-3xl mb-12">
          <div className={`inline-block px-4 py-1 rounded-full ${bgColor} ${iconColor} text-sm font-medium mb-4`}>
            {id === 'premium-services' ? 'Premium Offerings' : title.split(' & ')[0]}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              icon={product.icon}
              cta={product.cta}
              color={product.color}
              bgColor={product.bgColor}
              premium={product.premium}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
