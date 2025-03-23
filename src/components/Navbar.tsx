import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Home, Briefcase, ShoppingCart, Users, Info, Mail, LogIn, UserPlus, ChevronDown, ChevronUp, FileText, Search, BookOpen, Diamond } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const productsDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target as Node)) {
        setIsProductsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: 'Home', icon: <Home className="w-4 h-4 mr-2" />, href: '/' },
    { name: 'About Us', icon: <Info className="w-4 h-4 mr-2" />, href: '/about-us' },
    { name: 'Community', icon: <Users className="w-4 h-4 mr-2" />, href: '/community' },
    { name: 'Contact Us', icon: <Mail className="w-4 h-4 mr-2" />, href: '/contact-us' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-foreground">Job<span className="text-jobonboard-blue">Onboard</span></span>
          </Link>

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

              {isProductsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-background rounded-md shadow-lg border border-border z-50">
                  <div className="py-2">
                    <Link 
                      to="/products"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      All Products
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-muted-foreground">Categories</div>
                    
                    <Link 
                      to="/products#resume-tools"
                      className="flex items-center px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      <FileText className="w-4 h-4 mr-2 text-jobonboard-blue" />
                      Resume Tools
                    </Link>
                    
                    <Link 
                      to="/products#job-search"
                      className="flex items-center px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      <Search className="w-4 h-4 mr-2 text-jobonboard-green" />
                      Job Search Tools
                    </Link>
                    
                    <Link 
                      to="/products#interview-tools"
                      className="flex items-center px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      <BookOpen className="w-4 h-4 mr-2 text-jobonboard-purple" />
                      Interview Prep
                    </Link>
                    
                    <Link 
                      to="/products#premium-services"
                      className="flex items-center px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      <Diamond className="w-4 h-4 mr-2 text-amber-500" />
                      Premium Services
                    </Link>
                  </div>
                </div>
              )}
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

              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-background rounded-md shadow-lg border border-border z-50">
                  <div className="py-2">
                    <Link 
                      to="/services"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      All Services
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-muted-foreground">Categories</div>
                    
                    <Link 
                      to="/services#prepare-yourself"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      Prepare Yourself
                    </Link>
                    
                    <Link 
                      to="/services#find-a-job"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      Find a Job
                    </Link>
                    
                    <Link 
                      to="/services#grow-your-career"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      Grow Your Career
                    </Link>
                    
                    <Link 
                      to="/services#premium-services"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      Premium Services
                    </Link>
                  </div>
                </div>
              )}
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

          <div className="hidden md:flex items-center space-x-4">
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

          <div className="flex items-center md:hidden space-x-4">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t">
          <div className="container px-6 py-4">
            <nav className="flex flex-col space-y-4 py-4">
              <Link 
                to="/"
                className="flex items-center text-foreground/80 hover:text-foreground p-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Link>
              
              <Link 
                to="/products"
                className="flex items-center text-foreground/80 hover:text-foreground p-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Products
              </Link>
              
              <Link 
                to="/services"
                className="flex items-center text-foreground/80 hover:text-foreground p-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Services
              </Link>
              
              {navItems.slice(1).map((item) => (
                <Link 
                  key={item.name}
                  to={item.href} 
                  className="flex items-center text-foreground/80 hover:text-foreground p-2 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
              
              <div className="flex space-x-4 pt-2">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <Link to="/login" className="flex items-center justify-center gap-1">
                    <LogIn className="w-4 h-4" />
                    Log In
                  </Link>
                </Button>
                <Button size="sm" className="flex-1 bg-jobonboard-purple hover:bg-jobonboard-purple-light" asChild>
                  <Link to="/signup" className="flex items-center justify-center gap-1">
                    <UserPlus className="w-4 h-4" />
                    Sign Up
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
