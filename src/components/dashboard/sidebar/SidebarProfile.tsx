
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from '@supabase/supabase-js';

interface SidebarProfileProps {
  user: User | null;
}

const SidebarProfile: React.FC<SidebarProfileProps> = ({ user }) => {
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
  );
};

export default SidebarProfile;
