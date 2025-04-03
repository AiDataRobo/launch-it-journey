
import React from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Home, 
  CircleUser, 
  Linkedin, 
  FileText, 
  Briefcase, 
  BookOpen, 
  BarChart3, 
  Settings,
  Users
} from 'lucide-react';
import { MenuItem, CollapsibleMenu, SubMenuItem } from './SidebarMenuItem';
import { SidebarMenu as SMenu } from '@/components/ui/sidebar';

interface SidebarMenuProps {
  expandedMenus: Record<string, boolean>;
  toggleMenuSection: (section: string) => void;
}

const SidebarMenuComponent: React.FC<SidebarMenuProps> = ({ expandedMenus, toggleMenuSection }) => {
  const location = useLocation();
  
  // Check if a path is active
  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  // Main menu items
  const mainMenuItems = [
    { id: 'dashboard', path: '/dashboard', label: 'Dashboard', icon: Home },
    { id: 'profile', path: '/profile', label: 'Profile', icon: CircleUser },
    { id: 'linkedin', path: '/linkedin-optimization', label: 'LinkedIn Optimizer', icon: Linkedin },
    { id: 'portfolio', path: '/portfolio-generator', label: 'Portfolio Generator', icon: FileText },
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
    <SMenu>
      {mainMenuItems.map((item) => (
        <MenuItem 
          key={item.id}
          id={item.id}
          path={item.path}
          label={item.label}
          icon={item.icon}
          isActive={isActivePath(item.path)}
        />
      ))}

      {/* Skills & Learning - Collapsible Section */}
      <CollapsibleMenu
        id="skills"
        label="Skills & Learning"
        icon={BookOpen}
        isExpanded={expandedMenus.skills}
        isActive={skillMenuItems.some(item => isActivePath(item.path))}
        onToggle={() => toggleMenuSection('skills')}
      >
        {skillMenuItems.map((item) => (
          <SubMenuItem
            key={item.id}
            id={item.id}
            path={item.path}
            label={item.label}
            isActive={isActivePath(item.path)}
          />
        ))}
      </CollapsibleMenu>

      {/* Network - Collapsible Section */}
      <CollapsibleMenu
        id="network"
        label="Network"
        icon={Users}
        isExpanded={expandedMenus.network}
        isActive={networkMenuItems.some(item => isActivePath(item.path))}
        onToggle={() => toggleMenuSection('network')}
      >
        {networkMenuItems.map((item) => (
          <SubMenuItem
            key={item.id}
            id={item.id}
            path={item.path}
            label={item.label}
            isActive={isActivePath(item.path)}
          />
        ))}
      </CollapsibleMenu>

      <MenuItem 
        id="settings"
        path="/settings"
        label="Settings"
        icon={Settings}
        isActive={isActivePath('/settings')}
      />
    </SMenu>
  );
};

export default SidebarMenuComponent;
