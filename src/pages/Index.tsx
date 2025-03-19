
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import CareerPaths from '@/components/CareerPaths';
import Testimonials from '@/components/Testimonials';
import SkillResources from '@/components/SkillResources';
import MentorshipScheduler from '@/components/MentorshipScheduler';
import Community from '@/components/Community';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Ensure the page starts at the top when loaded
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <CareerPaths />
        <Testimonials />
        <SkillResources />
        <MentorshipScheduler />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
