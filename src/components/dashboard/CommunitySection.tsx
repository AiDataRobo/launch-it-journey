
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CommunityDiscussion } from '@/hooks/use-dashboard-data';

interface CommunitySectionProps {
  discussions?: CommunityDiscussion[];
}

const CommunitySection: React.FC<CommunitySectionProps> = ({ discussions = [] }) => {
  // Use default discussions if none are provided
  const displayDiscussions = discussions.length > 0 ? discussions : [
    {
      id: "1",
      title: "Tips for technical interviews at FAANG companies",
      user: {
        name: "Alex Johnson",
        avatar: null,
        role: "Senior Developer"
      },
      replies: 24
    },
    {
      id: "2",
      title: "Career switch from marketing to UX design",
      user: {
        name: "Sarah Williams",
        avatar: null,
        role: "UX Designer"
      },
      replies: 18
    }
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Community</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-3">
          {displayDiscussions.map((discussion) => (
            <div key={discussion.id} className="border rounded-lg p-3 hover:shadow-sm transition-all cursor-pointer">
              <h3 className="font-medium text-sm">{discussion.title}</h3>
              
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    {discussion.user.avatar ? (
                      <AvatarImage src={discussion.user.avatar} alt={discussion.user.name} />
                    ) : (
                      <AvatarFallback className="text-xs">
                        {discussion.user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    <p className="text-xs">{discussion.user.name}</p>
                    <p className="text-xs text-muted-foreground">{discussion.user.role}</p>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">
                  {discussion.replies} replies
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="text-xs text-jobonboard-purple w-full text-center mt-3">
          Join the Conversation
        </button>
      </CardContent>
    </Card>
  );
};

export default CommunitySection;
