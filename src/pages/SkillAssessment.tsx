
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SkillAssessmentHero from '@/components/skill-assessment/SkillAssessmentHero';
import SkillCategoriesList from '@/components/skill-assessment/SkillCategoriesList';
import LeaderboardSection from '@/components/skill-assessment/LeaderboardSection';
import CertificateShowcase from '@/components/skill-assessment/CertificateShowcase';

const SkillAssessment = () => {
  useEffect(() => {
    // Ensure the page starts at the top when loaded
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        <SkillAssessmentHero />
        <SkillCategoriesList />
        <LeaderboardSection />
        <CertificateShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default SkillAssessment;
