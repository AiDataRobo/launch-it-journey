
import React from 'react';

interface NavbarContainerProps {
  children: React.ReactNode;
  isScrolled: boolean;
}

export const NavbarContainer: React.FC<NavbarContainerProps> = ({ 
  children, 
  isScrolled 
}) => {
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      {children}
    </header>
  );
};
