
import React from 'react';
import { NavbarContainer } from './NavbarContainer';
import { NavbarDesktopMenu } from './NavbarDesktopMenu';
import { NavbarMobileMenu } from './NavbarMobileMenu';
import { NavbarLogo } from './NavbarLogo';
import { NavbarAuthButtons } from './NavbarAuthButtons';
import { useNavbarState } from './useNavbarState';

const Navbar = () => {
  const {
    isScrolled,
    isMenuOpen,
    isServicesDropdownOpen,
    isProductsDropdownOpen,
    servicesDropdownRef,
    productsDropdownRef,
    setIsMenuOpen,
    setIsServicesDropdownOpen,
    setIsProductsDropdownOpen
  } = useNavbarState();

  return (
    <NavbarContainer isScrolled={isScrolled}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <NavbarLogo />

          <NavbarDesktopMenu 
            isProductsDropdownOpen={isProductsDropdownOpen}
            isServicesDropdownOpen={isServicesDropdownOpen}
            setIsProductsDropdownOpen={setIsProductsDropdownOpen}
            setIsServicesDropdownOpen={setIsServicesDropdownOpen}
            productsDropdownRef={productsDropdownRef}
            servicesDropdownRef={servicesDropdownRef}
          />

          <NavbarAuthButtons className="hidden md:flex items-center space-x-4" />

          <div className="flex items-center md:hidden space-x-4">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <span className="w-6 h-6 flex items-center justify-center">✕</span>
              ) : (
                <span className="w-6 h-6 flex items-center justify-center">☰</span>
              )}
            </button>
          </div>
        </div>
      </div>

      <NavbarMobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </NavbarContainer>
  );
};

export default Navbar;
