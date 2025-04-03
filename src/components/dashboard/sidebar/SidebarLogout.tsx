
import React from 'react';
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarLogoutProps {
  onSignOut: () => void;
}

const SidebarLogout: React.FC<SidebarLogoutProps> = ({ onSignOut }) => {
  return (
    <Button 
      onClick={onSignOut} 
      variant="outline" 
      className="w-full text-red-500 hover:text-red-700 hover:bg-red-50 flex items-center gap-2"
    >
      <LogOut size={16} />
      Sign Out
    </Button>
  );
};

export default SidebarLogout;
