
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, UserPlus, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NetworkPage = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Your Professional Network</h1>
          <p className="text-gray-600 mt-2">Build and manage your professional connections</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-xl flex items-center gap-2">
                <Users className="h-5 w-5 text-jobonboard-purple" />
                Connections
              </CardTitle>
              <CardDescription>Manage your connections</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-3">0</p>
              <Button variant="outline" className="w-full">View Connections</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-xl flex items-center gap-2">
                <UserPlus className="h-5 w-5 text-jobonboard-purple" />
                Find Connections
              </CardTitle>
              <CardDescription>Discover new professionals</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-3">Expand your network with professionals in your field</p>
              <Button className="w-full bg-jobonboard-purple hover:bg-jobonboard-purple/90">Find People</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-xl flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-jobonboard-purple" />
                Messages
              </CardTitle>
              <CardDescription>Connect with your network</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-3">No unread messages</p>
              <Button variant="outline" className="w-full">Open Messages</Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Suggested Connections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="flex p-4 items-center">
              <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold mr-4">JD</div>
              <div className="flex-1">
                <h3 className="font-medium">John Doe</h3>
                <p className="text-sm text-gray-500">Software Engineer at Tech Co</p>
              </div>
              <Button size="sm" variant="outline">Connect</Button>
            </Card>
            
            <Card className="flex p-4 items-center">
              <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold mr-4">AS</div>
              <div className="flex-1">
                <h3 className="font-medium">Alice Smith</h3>
                <p className="text-sm text-gray-500">Product Manager at Product Inc</p>
              </div>
              <Button size="sm" variant="outline">Connect</Button>
            </Card>
            
            <Card className="flex p-4 items-center">
              <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold mr-4">RJ</div>
              <div className="flex-1">
                <h3 className="font-medium">Robert Johnson</h3>
                <p className="text-sm text-gray-500">UX Designer at Design Studio</p>
              </div>
              <Button size="sm" variant="outline">Connect</Button>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NetworkPage;
