
import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarAuthButtonsProps {
  className?: string;
}

export const NavbarAuthButtons: React.FC<NavbarAuthButtonsProps> = ({ className }) => {
  return (
    <div className={className}>
      <Button variant="outline" size="sm" asChild>
        <Link to="/login" className="flex items-center gap-1">
          <LogIn className="w-4 h-4" />
          Log In
        </Link>
      </Button>
      <Button size="sm" className="bg-jobonboard-purple hover:bg-jobonboard-purple-light" asChild>
        <Link to="/signup" className="flex items-center gap-1">
          <UserPlus className="w-4 h-4" />
          Sign Up
        </Link>
      </Button>
    </div>
  );
};
