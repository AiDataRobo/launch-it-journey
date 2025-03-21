
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CareerHero from '@/components/career-path/CareerHero';
import CareerRecommendations from '@/components/career-path/CareerRecommendations';
import CareerRoadmaps from '@/components/career-path/CareerRoadmaps';
import SkillAssessment from '@/components/career-path/SkillAssessment';
import JobMarketInsights from '@/components/career-path/JobMarketInsights';
import LearningResources from '@/components/career-path/LearningResources';
import MentorshipGuidance from '@/components/career-path/MentorshipGuidance';
import SuccessJourneys from '@/components/career-path/SuccessJourneys';
import InterviewPrep from '@/components/career-path/InterviewPrep';
import NavbarWrap from '@/components/NavbarWrap';
import Footer from '@/components/Footer';

const sections = [
  { id: 'career-recommendations', label: 'Career Discovery', component: CareerRecommendations },
  { id: 'career-roadmaps', label: 'Career Roadmaps', component: CareerRoadmaps },
  { id: 'skill-assessment', label: 'Skill Assessment', component: SkillAssessment },
  { id: 'job-market-insights', label: 'Job Market Insights', component: JobMarketInsights },
  { id: 'learning-resources', label: 'Learning Resources', component: LearningResources },
  { id: 'mentorship-guidance', label: 'Mentorship', component: MentorshipGuidance },
  { id: 'success-journeys', label: 'Success Stories', component: SuccessJourneys },
  { id: 'interview-prep', label: 'Interview Prep', component: InterviewPrep },
];

const CareerPath = () => {
  const [activeSection, setActiveSection] = useState('');
  const [showNavigation, setShowNavigation] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const isMobile = useIsMobile();
  
  // Initialize section refs
  useEffect(() => {
    sections.forEach(section => {
      sectionRefs.current[section.id] = document.getElementById(section.id) as HTMLDivElement;
    });
  }, []);
  
  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset to trigger earlier
      
      let currentSection = '';
      for (const section of sections) {
        const element = sectionRefs.current[section.id];
        
        if (element && element.offsetTop <= scrollPosition && 
            element.offsetTop + element.offsetHeight > scrollPosition) {
          currentSection = section.id;
        }
      }
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
      
      // Show navigation after scrolling past hero
      setShowNavigation(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for nav
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <NavbarWrap />
      
      {/* Floating Navigation */}
      <motion.div 
        className={`fixed z-50 left-0 right-0 ${isMobile ? 'bottom-0' : 'top-20'} flex justify-center pointer-events-none`}
        initial={{ opacity: 0, y: isMobile ? 20 : -20 }}
        animate={{ 
          opacity: showNavigation ? 1 : 0, 
          y: showNavigation ? 0 : (isMobile ? 20 : -20)
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-white rounded-full shadow-lg py-2 px-4 pointer-events-auto max-w-full overflow-x-auto hide-scrollbar mx-4">
          <div className="flex space-x-1 md:space-x-2">
            {sections.map(section => (
              <Button
                key={section.id}
                variant="ghost"
                size="sm"
                className={`whitespace-nowrap rounded-full text-xs md:text-sm px-3 transition-colors ${
                  activeSection === section.id 
                    ? 'bg-jobonboard-purple text-white hover:bg-jobonboard-purple/90' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </Button>
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Scroll Down Indicator */}
      <motion.div
        className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-40 flex flex-col items-center"
        initial={{ opacity: 1, y: 0 }}
        animate={{ 
          opacity: showNavigation ? 0 : 1,
          y: showNavigation ? 20 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-sm text-gray-500 mb-2">Explore Career Path</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-10 h-10 rounded-full bg-jobonboard-purple/10 flex items-center justify-center cursor-pointer"
          onClick={() => scrollToSection('career-recommendations')}
        >
          <ChevronDown className="text-jobonboard-purple" />
        </motion.div>
      </motion.div>
      
      <main>
        <CareerHero />
        <CareerRecommendations />
        <CareerRoadmaps />
        <SkillAssessment />
        <JobMarketInsights />
        <LearningResources />
        <MentorshipGuidance />
        <SuccessJourneys />
        <InterviewPrep />
      </main>
      <Footer />
    </div>
  );
};

export default CareerPath;
