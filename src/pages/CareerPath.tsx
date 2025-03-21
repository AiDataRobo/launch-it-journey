
import React from 'react';
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

const CareerPath = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavbarWrap />
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
