
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Job Onboard helped me transition from teaching to a front-end developer role in just 6 months. Their personalized roadmap and mentorship were game-changers.",
      name: "Sarah Johnson",
      role: "Former Teacher, now Front-End Developer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
    },
    {
      id: 2,
      quote: "As a marketing professional with no technical background, I was intimidated by the IT industry. Job Onboard made the transition smooth with tailored resources and support.",
      name: "Michael Chen",
      role: "Former Marketer, now Product Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
    },
    {
      id: 3,
      quote: "After 10 years in finance, I wanted a career change. Job Onboard's assessment identified my transferable skills and guided me to a role in data analysis that leveraged my background.",
      name: "Emma Rodriguez",
      role: "Former Financial Analyst, now Data Scientist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&h=150&auto=format&fit=crop",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let timer;
    
    if (autoplay) {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 6000);
    }
    
    return () => clearInterval(timer);
  }, [autoplay, testimonials.length]);

  const goToPrevious = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-jobonboard-purple/5 to-white"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-1 rounded-full bg-jobonboard-yellow/30 text-amber-700 text-sm font-medium mb-4">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hear From Our Community</h2>
          <p className="text-lg text-gray-600">
            Real stories from professionals who successfully transitioned into IT careers with Job Onboard.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
                    <div className="absolute -top-6 left-10 w-12 h-12 rounded-full bg-jobonboard-purple flex items-center justify-center">
                      <Quote className="text-white" size={20} />
                    </div>
                    <div className="mb-8 text-lg md:text-xl text-gray-700 leading-relaxed">
                      "{testimonial.quote}"
                    </div>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-white shadow"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-jobonboard-purple scale-125' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-jobonboard-purple/50 hover:bg-gray-50 transition-all-medium"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="text-gray-700" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-jobonboard-purple/50 hover:bg-gray-50 transition-all-medium"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
