
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ShoppingCart, Briefcase, Info, Users, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavbarAuthButtons } from './NavbarAuthButtons';

interface NavbarMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NavbarMobileMenu: React.FC<NavbarMobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const navItems = [
    { name: 'About Us', icon: <Info className="w-4 h-4 mr-2" />, href: '/about-us' },
    { name: 'Community', icon: <Users className="w-4 h-4 mr-2" />, href: '/community' },
    { name: 'Contact Us', icon: <Mail className="w-4 h-4 mr-2" />, href: '/contact-us' },
  ];

  return (
    <div className="md:hidden bg-background/95 backdrop-blur-md border-t">
      <div className="container px-6 py-4">
        <nav className="flex flex-col space-y-4 py-4">
          <Link 
            to="/"
            className="flex items-center text-foreground/80 hover:text-foreground p-2 rounded-md"
            onClick={onClose}
          >
            <Home className="w-4 h-4 mr-2" />
            Home
          </Link>
          
          <Link 
            to="/products"
            className="flex items-center text-foreground/80 hover:text-foreground p-2 rounded-md"
            onClick={onClose}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Products
          </Link>
          
          <Link 
            to="/services"
            className="flex items-center text-foreground/80 hover:text-foreground p-2 rounded-md"
            onClick={onClose}
          >
            <Briefcase className="w-4 h-4 mr-2" />
            Services
          </Link>
          
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.href} 
              className="flex items-center text-foreground/80 hover:text-foreground p-2 rounded-md"
              onClick={onClose}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
          
          <div className="flex space-x-4 pt-2">
            <Button variant="outline" size="sm" className="flex-1" asChild>
              <Link to="/login" className="flex items-center justify-center gap-1">
                Log In
              </Link>
            </Button>
            <Button size="sm" className="flex-1 bg-jobonboard-purple hover:bg-jobonboard-purple-light" asChild>
              <Link to="/signup" className="flex items-center justify-center gap-1">
                Sign Up
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
};
