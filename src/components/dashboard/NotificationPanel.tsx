
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const NotificationPanel = () => {
  const notifications = [
    {
      type: "job",
      message: "A new job matching your profile: UX Designer at DesignHub",
      time: "1 hour ago",
      isNew: true
    },
    {
      type: "application",
      message: "Your application for Frontend Developer was viewed",
      time: "Yesterday",
      isNew: false
    },
    {
      type: "message",
      message: "New message from Emma Thompson: 'Thanks for connecting!'",
      time: "2 days ago",
      isNew: false
    }
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex items-center justify-between">
          Notifications
          <Badge className="bg-red-500 text-white text-xs h-5 min-w-5 flex items-center justify-center rounded-full p-0 px-1.5">
            {notifications.filter(n => n.isNew).length}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-3">
          {notifications.map((notification, index) => (
            <div key={index} className={`border rounded-lg p-3 ${notification.isNew ? 'bg-blue-50 border-blue-100' : ''}`}>
              <p className="text-sm">{notification.message}</p>
              <div className="mt-1 flex justify-between items-center">
                <span className="text-xs text-muted-foreground">{notification.time}</span>
                {notification.isNew && (
                  <Badge variant="outline" className="text-xs bg-blue-100 text-blue-800 border-blue-200">
                    New
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
        <button className="text-xs text-jobonboard-purple w-full text-center mt-3">
          View All Notifications
        </button>
      </CardContent>
    </Card>
  );
};

export default NotificationPanel;
