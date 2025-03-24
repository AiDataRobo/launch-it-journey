
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const DashboardCustomization = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Customize Your Dashboard</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium mb-2">Dashboard Widgets</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Choose which sections appear on your dashboard and the order they appear in.
            </p>
            <Button className="bg-jobonboard-purple hover:bg-jobonboard-purple-light">
              Customize Widgets
            </Button>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-2">Notification Preferences</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Control which notifications you receive and how you receive them.
            </p>
            <Button variant="outline">
              Manage Notifications
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCustomization;
