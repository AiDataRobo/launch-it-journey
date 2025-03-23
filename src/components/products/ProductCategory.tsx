
import React from 'react';
import { LucideIcon } from 'lucide-react';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

export interface Product {
  id: string;
  title: string;
  description: string;
  cta: string;
  premium: boolean;
}

interface ProductCategoryProps {
  id: string;
  title: string;
  description: string;
  products: Product[];
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
}

const ProductCategory = ({
  id,
  title,
  description,
  products,
  icon: Icon,
  bgColor,
  iconColor,
}: ProductCategoryProps) => {
  return (
    <section id={id} className="py-16 scroll-mt-20">
      <div className="container px-6 mx-auto">
        <div className="mb-12">
          <motion.div 
            className="flex items-start md:items-center flex-col md:flex-row md:gap-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className={`${bgColor} rounded-xl p-3 mb-4 md:mb-0`}
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <Icon className={iconColor} size={28} />
            </motion.div>
            <motion.h2 
              className="text-2xl md:text-3xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {title}
            </motion.h2>
          </motion.div>
          
          <motion.p 
            className="text-gray-600 md:pl-16 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {description}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              icon={Icon}
              cta={product.cta}
              color={iconColor}
              bgColor={bgColor}
              premium={product.premium}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
