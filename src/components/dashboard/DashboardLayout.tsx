
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import { Bell, Settings, Menu, X, LogOut, Home, Briefcase, BookOpen, Users, MessageSquare, BarChart3, CircleUser, ChevronDown, ChevronRight, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import useSidebarToggle from '@/hooks/use-sidebar-toggle';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
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
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton
} from '@/components/ui/sidebar';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { user, signOut } = useAuth();
  const { isOpen, toggle } = useSidebarToggle(true);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
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

  // Check if a path is active
  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  // Main menu items
  const mainMenuItems = [
    { id: 'dashboard', path: '/dashboard', label: 'Dashboard', icon: Home },
    { id: 'profile', path: '/profile', label: 'Profile', icon: CircleUser },
    { id: 'linkedin', path: '/linkedin-optimization', label: 'LinkedIn Optimizer', icon: Linkedin },
    { id: 'job-search', path: '/job-search', label: 'Job Search', icon: Briefcase },
    { id: 'resume', path: '/resume-builder', label: 'Resume Builder', icon: BookOpen },
    { id: 'interviews', path: '/interviews', label: 'Interviews', icon: BarChart3 }
  ];

  // Skill submenu items
  const skillMenuItems = [
    { id: 'skill-assessment', path: '/skills/assessment', label: 'Skill Assessment' },
    { id: 'learning', path: '/skills/learning', label: 'Learning Resources' },
    { id: 'certifications', path: '/skills/certifications', label: 'Certifications' }
  ];

  // Network submenu items
  const networkMenuItems = [
    { id: 'connections', path: '/network/connections', label: 'Connections' },
    { id: 'mentors', path: '/network/mentors', label: 'Find Mentors' },
    { id: 'communities', path: '/network/communities', label: 'Communities' }
  ];

  return (
    <SidebarProvider defaultOpen={!isMobile}>
      <div className="flex flex-col min-h-screen bg-background">
        <div className="flex-grow flex relative">
          {/* Mobile sidebar toggle */}
          <div className="lg:hidden fixed bottom-4 right-4 z-50">
            <Button 
              onClick={toggle}
              size="icon"
              className="rounded-full bg-jobonboard-purple shadow-lg hover:bg-jobonboard-purple/90"
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Floating Sidebar */}
          <Sidebar variant="floating" collapsible={isMobile ? "offcanvas" : "icon"}>
            <SidebarHeader>
              <div className="flex items-center space-x-3 p-2">
                <Avatar>
                  <AvatarImage src={user?.user_metadata?.avatar_url} />
                  <AvatarFallback className="bg-jobonboard-purple text-white">{userInitials}</AvatarFallback>
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
                    {mainMenuItems.map((item) => (
                      <SidebarMenuItem key={item.id}>
                        <SidebarMenuButton 
                          isActive={isActivePath(item.path)}
                          tooltip={item.label}
                          asChild
                        >
                          <Link to={item.path}>
                            <item.icon size={18} />
                            <span>{item.label}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}

                    {/* Skills & Learning - Collapsible Section */}
                    <SidebarMenuItem>
                      <SidebarMenuButton 
                        onClick={() => toggleMenuSection('skills')}
                        isActive={skillMenuItems.some(item => isActivePath(item.path))}
                      >
                        <BookOpen size={18} />
                        <span>Skills & Learning</span>
                        {expandedMenus.skills ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                      </SidebarMenuButton>
                      
                      {expandedMenus.skills && (
                        <SidebarMenuSub>
                          {skillMenuItems.map((item) => (
                            <SidebarMenuSubItem key={item.id}>
                              <SidebarMenuSubButton 
                                isActive={isActivePath(item.path)}
                                asChild
                              >
                                <Link to={item.path}>
                                  {item.label}
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      )}
                    </SidebarMenuItem>

                    {/* Network - Collapsible Section */}
                    <SidebarMenuItem>
                      <SidebarMenuButton 
                        onClick={() => toggleMenuSection('network')}
                        isActive={networkMenuItems.some(item => isActivePath(item.path))}
                      >
                        <Users size={18} />
                        <span>Network</span>
                        {expandedMenus.network ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                      </SidebarMenuButton>
                      
                      {expandedMenus.network && (
                        <SidebarMenuSub>
                          {networkMenuItems.map((item) => (
                            <SidebarMenuSubItem key={item.id}>
                              <SidebarMenuSubButton 
                                isActive={isActivePath(item.path)}
                                asChild
                              >
                                <Link to={item.path}>
                                  {item.label}
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      )}
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                      <SidebarMenuButton 
                        isActive={isActivePath('/settings')}
                        tooltip="Settings"
                        asChild
                      >
                        <Link to="/settings">
                          <Settings size={18} />
                          <span>Settings</span>
                        </Link>
                      </SidebarMenuButton>
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
