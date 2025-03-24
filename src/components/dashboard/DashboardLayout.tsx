
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bell, Settings, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { user, signOut } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

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
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <div className="flex-grow flex">
        {/* Mobile sidebar toggle */}
        <div className="lg:hidden fixed bottom-4 right-4 z-50">
          <Button 
            onClick={toggleSidebar}
            size="icon"
            className="rounded-full bg-jobonboard-purple shadow-lg"
          >
            {sidebarOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Sidebar */}
        <div 
          className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 lg:translate-x-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-4 border-b">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarFallback>{userInitials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm">{user?.email}</p>
                <p className="text-xs text-muted-foreground">Dashboard</p>
              </div>
            </div>
          </div>
          
          <nav className="p-4 space-y-2">
            <a href="#" className="flex items-center p-2 rounded-md hover:bg-gray-100">
              <span className="text-sm font-medium">Dashboard</span>
            </a>
            <a href="#" className="flex items-center p-2 rounded-md hover:bg-gray-100">
              <span className="text-sm font-medium">Profile</span>
            </a>
            <a href="#" className="flex items-center p-2 rounded-md hover:bg-gray-100">
              <span className="text-sm font-medium">Job Search</span>
            </a>
            <a href="#" className="flex items-center p-2 rounded-md hover:bg-gray-100">
              <span className="text-sm font-medium">Resume Builder</span>
            </a>
            <a href="#" className="flex items-center p-2 rounded-md hover:bg-gray-100">
              <span className="text-sm font-medium">Interviews</span>
            </a>
            <a href="#" className="flex items-center p-2 rounded-md hover:bg-gray-100">
              <span className="text-sm font-medium">Skills & Learning</span>
            </a>
            <a href="#" className="flex items-center p-2 rounded-md hover:bg-gray-100">
              <span className="text-sm font-medium">Network</span>
            </a>
            <a href="#" className="flex items-center p-2 rounded-md hover:bg-gray-100">
              <span className="text-sm font-medium">Settings</span>
            </a>
          </nav>
          
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
            <Button 
              onClick={signOut} 
              variant="outline" 
              className="w-full text-red-500 hover:text-red-700 hover:bg-red-50"
            >
              Sign Out
            </Button>
          </div>
        </div>

        {/* Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/20 z-30 lg:hidden"
            onClick={toggleSidebar}
          />
        )}

        {/* Main content */}
        <div className="flex-grow lg:ml-64">
          {children}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DashboardLayout;
