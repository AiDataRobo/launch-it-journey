
import React from 'react';
import Navbar from '@/components/Navbar';

const NavbarWrap: React.FC<{ className?: string }> = ({ className }) => {
  return <Navbar className={className} />;
};

export default NavbarWrap;
