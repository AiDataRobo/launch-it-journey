
import React from 'react';
import Navbar from '@/components/Navbar';

// Update the component to pass props correctly to Navbar
// The error indicates that Navbar doesn't accept a className prop
const NavbarWrap: React.FC<{ className?: string }> = ({ className }) => {
  // Since Navbar doesn't accept className directly, we need to create a wrapper div
  return (
    <div className={className}>
      <Navbar />
    </div>
  );
};

export default NavbarWrap;
