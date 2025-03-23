
import React, { useEffect } from 'react';
import NavbarWrap from '@/components/NavbarWrap';
import Footer from '@/components/Footer';
import ProductHero from '@/components/products/ProductHero';
import ProductCategory from '@/components/products/ProductCategory';
import ProductCallToAction from '@/components/products/ProductCallToAction';
import { productCategories } from '@/components/products/productData';
import { useLocation } from 'react-router-dom';

const Products = () => {
  const location = useLocation();
  
  // Scroll to section if hash is present in URL
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  
  return (
    <>
      <NavbarWrap />
      <main className="pt-24 pb-16">
        {/* Hero section */}
        <ProductHero categories={productCategories} />

        {/* Products by category */}
        {productCategories.map((category) => (
          <ProductCategory
            key={category.id}
            id={category.id}
            title={category.title}
            description={category.description}
            bgColor={category.bgColor}
            iconColor={category.iconColor}
            icon={category.icon}
            products={category.products}
          />
        ))}

        {/* Call to action section */}
        <ProductCallToAction />
      </main>
      <Footer />
    </>
  );
};

export default Products;
