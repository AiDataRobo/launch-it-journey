
import React from 'react';
import { Link } from 'react-router-dom';

interface ServicesDropdownProps {
  onClose: () => void;
}

export const ServicesDropdown: React.FC<ServicesDropdownProps> = ({ onClose }) => {
  return (
    <div className="absolute top-full left-0 mt-2 w-64 bg-background rounded-md shadow-lg border border-border z-50">
      <div className="py-2">
        <Link 
          to="/services"
          className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
          onClick={onClose}
        >
          All Services
        </Link>
        
        <div className="px-4 py-2 text-xs font-semibold text-muted-foreground">Categories</div>
        
        <Link 
          to="/services#prepare-yourself"
          className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
          onClick={onClose}
        >
          Prepare Yourself
        </Link>
        
        <Link 
          to="/services#find-a-job"
          className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
          onClick={onClose}
        >
          Find a Job
        </Link>
        
        <Link 
          to="/services#grow-your-career"
          className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
          onClick={onClose}
        >
          Grow Your Career
        </Link>
        
        <Link 
          to="/services#premium-services"
          className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
          onClick={onClose}
        >
          Premium Services
        </Link>
      </div>
    </div>
  );
};
