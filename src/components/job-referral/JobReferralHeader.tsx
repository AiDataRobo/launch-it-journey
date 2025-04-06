
import React from 'react';

const JobReferralHeader = () => {
  return (
    <div className="bg-gradient-to-r from-jobonboard-purple/90 to-jobonboard-blue/90 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Job Referrals
          </h1>
          <p className="text-lg text-white/90">
            Get referred by professionals in your field to increase your chances of landing your dream job. 
            Submit your resume and reason for referral to connect with industry insiders.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm text-white">
              <span className="mr-2">✓</span> Higher interview chances
            </div>
            <div className="flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm text-white">
              <span className="mr-2">✓</span> Skip resume screening
            </div>
            <div className="flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm text-white">
              <span className="mr-2">✓</span> Direct hiring team contact
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobReferralHeader;
