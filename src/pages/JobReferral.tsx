
import React from 'react';
import NavbarWrap from '@/components/NavbarWrap';
import Footer from '@/components/Footer';
import JobReferralHeader from '@/components/job-referral/JobReferralHeader';
import JobReferralList from '@/components/job-referral/JobReferralList';

const JobReferral = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <NavbarWrap />
      <main className="flex-grow">
        <JobReferralHeader />
        <div className="container mx-auto px-4 py-8">
          <JobReferralList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobReferral;
