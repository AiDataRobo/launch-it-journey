
import React from 'react';
import { Link } from 'react-router-dom';

export const NavbarLogo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <span className="text-xl font-bold text-foreground">Job<span className="text-jobonboard-blue">Onboard</span></span>
    </Link>
  );
};
