
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatDistanceToNow } from 'date-fns';
import { RecentActivity } from '@/hooks/use-dashboard-data';

interface NotificationPanelProps {
  notifications?: RecentActivity[];
}

const NotificationPanel: React.FC<NotificationPanelProps> = ({ notifications = [] }) => {
  const getNotificationIcon = (type: string) => {
    switch(type) {
      case 'application': return '📝';
      case 'referral': return '🤝';
      case 'interview': return '🗓️';
      case 'profile': return '👤';
      default: return '📣';
    }
  };

  const formatTimestamp = (timestamp: string) => {
    try {
      return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
    } catch (e) {
      return 'recently';
    }
  };

  const getStatusBadgeStyle = (status?: string) => {
    if (!status) return {};
    
    switch(status) {
      case 'Accepted': 
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Rejected': 
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Pending': 
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Expired': 
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  const displayNotifications = notifications.length > 0 ? notifications : [
    {
      id: '1',
      type: 'referral',
      title: 'A new job matching your profile: UX Designer',
      company: 'DesignHub',
      timestamp: new Date().toISOString(),
      status: 'New'
    },
    {
      id: '2',
      type: 'application',
      title: 'Your application was viewed',
      company: 'TechCorp',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      status: 'Pending'
    }
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex items-center justify-between">
          Notifications
          <Badge className="bg-red-500 text-white text-xs h-5 min-w-5 flex items-center justify-center rounded-full p-0 px-1.5">
            {displayNotifications.filter(n => !n.status || n.status === 'New' || n.status === 'Pending').length}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-3">
          {displayNotifications.map((notification) => (
            <div 
              key={notification.id} 
              className={`border rounded-lg p-3 ${notification.status === 'New' ? 'bg-blue-50 border-blue-100' : ''}`}
            >
              <div className="flex gap-3">
                <div className="text-xl">{getNotificationIcon(notification.type)}</div>
                <div className="flex-1">
                  <p className="text-sm">{notification.title}</p>
                  {notification.company && (
                    <p className="text-xs text-gray-500">{notification.company}</p>
                  )}
                  <div className="mt-1 flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">
                      {formatTimestamp(notification.timestamp)}
                    </span>
                    {notification.status && (
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${getStatusBadgeStyle(notification.status)}`}
                      >
                        {notification.status}
                      </Badge>
                    )}
                  </div>
                </div>
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
