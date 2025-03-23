
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProductCallToAction = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to accelerate your career?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Start with our free tools or upgrade to premium services for personalized guidance and exclusive features.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-jobonboard-purple hover:bg-jobonboard-purple-light" asChild>
              <Link to="/signup">Get Started Free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/products#premium-services">Explore Premium</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCallToAction;
