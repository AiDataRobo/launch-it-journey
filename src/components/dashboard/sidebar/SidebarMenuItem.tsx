
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { 
  SidebarMenuItem as SMenuItem, 
  SidebarMenuButton, 
  SidebarMenuSub, 
  SidebarMenuSubItem,
  SidebarMenuSubButton
} from '@/components/ui/sidebar';
import { LucideIcon } from 'lucide-react';

interface MenuItemProps {
  id: string;
  path: string;
  label: string;
  icon: LucideIcon;
  isActive: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({ id, path, label, icon: Icon, isActive }) => {
  return (
    <SMenuItem key={id}>
      <SidebarMenuButton 
        isActive={isActive}
        tooltip={label}
        asChild
      >
        <Link to={path}>
          <Icon size={18} />
          <span>{label}</span>
        </Link>
      </SidebarMenuButton>
    </SMenuItem>
  );
};

interface SubMenuItemProps {
  id: string;
  path: string;
  label: string;
  isActive: boolean;
}

export const SubMenuItem: React.FC<SubMenuItemProps> = ({ id, path, label, isActive }) => {
  return (
    <SidebarMenuSubItem key={id}>
      <SidebarMenuSubButton 
        isActive={isActive}
        asChild
      >
        <Link to={path}>
          {label}
        </Link>
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  );
};

interface CollapsibleMenuProps {
  id: string;
  label: string;
  icon: LucideIcon;
  isExpanded: boolean;
  isActive: boolean;
  onToggle: () => void;
  children?: React.ReactNode;
}

export const CollapsibleMenu: React.FC<CollapsibleMenuProps> = ({ 
  id, 
  label, 
  icon: Icon, 
  isExpanded, 
  isActive, 
  onToggle, 
  children 
}) => {
  return (
    <SMenuItem>
      <SidebarMenuButton 
        onClick={onToggle}
        isActive={isActive}
      >
        <Icon size={18} />
        <span>{label}</span>
        {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </SidebarMenuButton>
      
      {isExpanded && (
        <SidebarMenuSub>
          {children}
        </SidebarMenuSub>
      )}
    </SMenuItem>
  );
};
