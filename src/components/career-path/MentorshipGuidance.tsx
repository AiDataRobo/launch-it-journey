
import React, { useState } from 'react';
import { Users } from 'lucide-react';
import SectionHeader from './mentorship/SectionHeader';
import BackgroundDecorations from './mentorship/BackgroundDecorations';
import TabNavigation from './mentorship/TabNavigation';
import MentorsTab from './mentorship/MentorsTab';
import CommunityTab from './mentorship/CommunityTab';

const MentorshipGuidance = () => {
  const [activeTab, setActiveTab] = useState('mentors');
  
  return (
    <section id="mentorship-guidance" className="py-20 relative overflow-hidden">
      <BackgroundDecorations />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader 
          icon={Users}
          tagText="Expert Guidance"
          title="Mentorship & Community Support"
          description="Connect with industry experts and join a supportive community to accelerate your IT career journey."
        />

        <div className="max-w-7xl mx-auto">
          <TabNavigation 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
          />
          
          {activeTab === 'mentors' && <MentorsTab />}
          {activeTab === 'community' && <CommunityTab />}
        </div>
      </div>
    </section>
  );
};

export default MentorshipGuidance;
