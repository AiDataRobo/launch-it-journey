
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Briefcase, ShoppingCart, Users, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: <Home className="w-4 h-4 mr-2" />, href: '/' },
    { name: 'Services', icon: <Briefcase className="w-4 h-4 mr-2" />, href: '#how-it-works' },
    { name: 'Products', icon: <ShoppingCart className="w-4 h-4 mr-2" />, href: '#career-paths' },
    { name: 'About Us', icon: <Info className="w-4 h-4 mr-2" />, href: '#skills' },
    { name: 'Community', icon: <Users className="w-4 h-4 mr-2" />, href: '#community' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-foreground">Job<span className="text-jobonboard-blue">Onboard</span></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className="flex items-center text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">Log In</Button>
            <Button size="sm" className="bg-jobonboard-purple hover:bg-jobonboard-purple-light">Sign Up</Button>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t">
          <div className="container px-6 py-4">
            <nav className="flex flex-col space-y-4 py-4">
              {navItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="flex items-center text-foreground/80 hover:text-foreground p-2 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
              <div className="flex space-x-4 pt-2">
                <Button variant="outline" size="sm" className="flex-1">Log In</Button>
                <Button size="sm" className="flex-1 bg-jobonboard-purple hover:bg-jobonboard-purple-light">Sign Up</Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
