
import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Home, ShoppingCart, Info, Users, Mail, ChevronDown, ChevronUp, FileText, Search, BookOpen, Diamond } from 'lucide-react';
import { ProductsDropdown } from './dropdowns/ProductsDropdown';
import { ServicesDropdown } from './dropdowns/ServicesDropdown';

interface NavbarDesktopMenuProps {
  isProductsDropdownOpen: boolean;
  isServicesDropdownOpen: boolean;
  setIsProductsDropdownOpen: (isOpen: boolean) => void;
  setIsServicesDropdownOpen: (isOpen: boolean) => void;
  productsDropdownRef: React.RefObject<HTMLDivElement>;
  servicesDropdownRef: React.RefObject<HTMLDivElement>;
}

export const NavbarDesktopMenu: React.FC<NavbarDesktopMenuProps> = ({
  isProductsDropdownOpen,
  isServicesDropdownOpen,
  setIsProductsDropdownOpen,
  setIsServicesDropdownOpen,
  productsDropdownRef,
  servicesDropdownRef
}) => {
  const navItems = [
    { name: 'About Us', icon: <Info className="w-4 h-4 mr-2" />, href: '/about-us' },
    { name: 'Community', icon: <Users className="w-4 h-4 mr-2" />, href: '/community' },
    { name: 'Contact Us', icon: <Mail className="w-4 h-4 mr-2" />, href: '/contact-us' },
  ];

  return (
    <nav className="hidden md:flex items-center space-x-6">
      <Link 
        to="/" 
        className="flex items-center text-foreground/80 hover:text-foreground transition-colors"
      >
        <Home className="w-4 h-4 mr-2" />
        Home
      </Link>

      <div ref={productsDropdownRef} className="relative">
        <button 
          onClick={() => {
            setIsProductsDropdownOpen(!isProductsDropdownOpen);
            setIsServicesDropdownOpen(false);
          }}
          className="flex items-center text-foreground/80 hover:text-foreground transition-colors"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Products
          {isProductsDropdownOpen ? (
            <ChevronUp className="w-4 h-4 ml-1" />
          ) : (
            <ChevronDown className="w-4 h-4 ml-1" />
          )}
        </button>

        {isProductsDropdownOpen && <ProductsDropdown onClose={() => setIsProductsDropdownOpen(false)} />}
      </div>

      <div ref={servicesDropdownRef} className="relative">
        <button 
          onClick={() => {
            setIsServicesDropdownOpen(!isServicesDropdownOpen);
            setIsProductsDropdownOpen(false);
          }}
          className="flex items-center text-foreground/80 hover:text-foreground transition-colors"
        >
          <Briefcase className="w-4 h-4 mr-2" />
          Services
          {isServicesDropdownOpen ? (
            <ChevronUp className="w-4 h-4 ml-1" />
          ) : (
            <ChevronDown className="w-4 h-4 ml-1" />
          )}
        </button>

        {isServicesDropdownOpen && <ServicesDropdown onClose={() => setIsServicesDropdownOpen(false)} />}
      </div>

      {navItems.map((item) => (
        <Link 
          key={item.name}
          to={item.href} 
          className="flex items-center text-foreground/80 hover:text-foreground transition-colors"
        >
          {item.icon}
          {item.name}
        </Link>
      ))}
    </nav>
  );
};
