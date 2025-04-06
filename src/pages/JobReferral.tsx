
import React, { useEffect } from 'react';
import NavbarWrap from '@/components/NavbarWrap';
import Footer from '@/components/Footer';
import JobReferralHeader from '@/components/job-referral/JobReferralHeader';
import JobReferralList from '@/components/job-referral/JobReferralList';
import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const JobReferral = () => {
  const { user, loading } = useAuth();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    if (!loading) {
      setAuthChecked(true);
    }
  }, [loading]);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <NavbarWrap />
      <main className="flex-grow">
        <JobReferralHeader />
        <div className="container mx-auto px-4 py-8">
          {authChecked && !user ? (
            <div className="mb-8 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
              <h3 className="mb-2 text-lg font-medium text-yellow-800">Authentication Required</h3>
              <p className="mb-4 text-yellow-700">
                To request job referrals and track your applications, please sign in or create an account.
              </p>
              <div className="flex gap-3">
                <Link to="/login">
                  <Button className="bg-jobonboard-purple hover:bg-jobonboard-purple-light">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outline">
                    Create Account
                  </Button>
                </Link>
              </div>
            </div>
          ) : null}
          <JobReferralList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobReferral;
