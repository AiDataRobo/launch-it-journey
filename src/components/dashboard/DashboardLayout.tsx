
import React, { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import { Bell, Settings, Menu, X, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import useSidebarToggle from '@/hooks/use-sidebar-toggle';
import { 
  Sidebar, 
  SidebarProvider, 
  SidebarContent, 
  SidebarHeader, 
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from '@/components/ui/sidebar';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { user, signOut } = useAuth();
  const { isOpen, toggle } = useSidebarToggle(true); // Set default to true for visibility
  const [isMobile, setIsMobile] = useState(false);

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

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  const userInitials = user?.email 
    ? getInitials(user.email.split('@')[0]) 
    : 'U';

  return (
    <SidebarProvider defaultOpen={!isMobile}>
      <div className="flex flex-col min-h-screen bg-background">
        <div className="flex-grow flex relative">
          {/* Mobile sidebar toggle */}
          <div className="lg:hidden fixed bottom-4 right-4 z-50">
            <Button 
              onClick={toggle}
              size="icon"
              className="rounded-full bg-jobonboard-purple shadow-lg"
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Floating Sidebar */}
          <Sidebar variant="floating" collapsible={isMobile ? "offcanvas" : "icon"}>
            <SidebarHeader>
              <div className="flex items-center space-x-3 p-2">
                <Avatar>
                  <AvatarFallback>{userInitials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{user?.email}</p>
                  <p className="text-xs text-muted-foreground">Dashboard</p>
                </div>
              </div>
            </SidebarHeader>
            
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>Dashboard</SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>Profile</SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>Job Search</SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>Resume Builder</SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>Interviews</SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>Skills & Learning</SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>Network</SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>Settings</SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            
            <SidebarFooter>
              <Button 
                onClick={signOut} 
                variant="outline" 
                className="w-full text-red-500 hover:text-red-700 hover:bg-red-50 flex items-center gap-2"
              >
                <LogOut size={16} />
                Sign Out
              </Button>
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
