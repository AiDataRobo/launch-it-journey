
import React from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileSidebarToggleProps {
  isOpen: boolean;
  toggle: () => void;
}

const MobileSidebarToggle: React.FC<MobileSidebarToggleProps> = ({ isOpen, toggle }) => {
  return (
    <div className="lg:hidden fixed bottom-4 right-4 z-50">
      <Button 
        onClick={toggle}
        size="icon"
        className="rounded-full bg-jobonboard-purple shadow-lg hover:bg-jobonboard-purple/90"
      >
        {isOpen ? <X /> : <Menu />}
      </Button>
    </div>
  );
};

export default MobileSidebarToggle;
