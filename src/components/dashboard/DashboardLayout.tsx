
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import useSidebarToggle from '@/hooks/use-sidebar-toggle';
import { 
  Sidebar, 
  SidebarProvider, 
  SidebarContent, 
  SidebarHeader, 
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent
} from '@/components/ui/sidebar';

// Import refactored components
import SidebarProfile from './sidebar/SidebarProfile';
import SidebarMenuComponent from './sidebar/SidebarMenu';
import MobileSidebarToggle from './sidebar/MobileSidebarToggle';
import SidebarLogout from './sidebar/SidebarLogout';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { user, signOut } = useAuth();
  const { isOpen, toggle } = useSidebarToggle(true);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({
    skills: false,
    network: false
  });

  // Toggle expanded state for a menu section
  const toggleMenuSection = (section: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Check if the viewport is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <SidebarProvider defaultOpen={!isMobile}>
      <div className="flex flex-col min-h-screen bg-background">
        <div className="flex-grow flex relative">
          {/* Mobile sidebar toggle */}
          <MobileSidebarToggle isOpen={isOpen} toggle={toggle} />

          {/* Floating Sidebar */}
          <Sidebar variant="floating" collapsible={isMobile ? "offcanvas" : "icon"}>
            <SidebarHeader>
              <SidebarProfile user={user} />
            </SidebarHeader>
            
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenuComponent 
                    expandedMenus={expandedMenus} 
                    toggleMenuSection={toggleMenuSection} 
                  />
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            
            <SidebarFooter>
              <SidebarLogout onSignOut={signOut} />
            </SidebarFooter>
          </Sidebar>

          {/* Main content */}
          <div className="flex-grow lg:ml-4 p-4">
            {children}
          </div>
        </div>
        
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
