
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CareerGrowthHub = () => {
  const events = [
    {
      title: "Networking Mastery for Tech Professionals",
      date: "June 15, 2023",
      type: "Webinar",
      host: "Career Connect"
    },
    {
      title: "Resume Workshop: Standing Out in 2023",
      date: "June 18, 2023",
      type: "Workshop",
      host: "Resume Experts"
    }
  ];

  const courses = [
    {
      title: "Leadership in Technology",
      provider: "TechLearn Academy",
      duration: "4 weeks",
      badge: "Trending"
    },
    {
      title: "Communication Skills for Developers",
      provider: "Soft Skills Pro",
      duration: "2 weeks",
      badge: "Popular"
    }
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Career Growth Hub</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <Tabs defaultValue="events">
          <TabsList className="w-full">
            <TabsTrigger value="events" className="flex-1">Events</TabsTrigger>
            <TabsTrigger value="courses" className="flex-1">Courses</TabsTrigger>
          </TabsList>
          
          <TabsContent value="events" className="mt-4 space-y-3">
            {events.map((event, index) => (
              <div key={index} className="border rounded-lg p-3 hover:shadow-sm transition-all cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-sm">{event.title}</h3>
                    <p className="text-xs text-muted-foreground">{event.date}</p>
                  </div>
                  <Badge variant="outline" className="bg-jobonboard-purple/10 text-jobonboard-purple border-jobonboard-purple/20 text-xs">
                    {event.type}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-1">By {event.host}</p>
              </div>
            ))}
            <button className="text-xs text-jobonboard-purple w-full text-center mt-2">
              View All Events
            </button>
          </TabsContent>
          
          <TabsContent value="courses" className="mt-4 space-y-3">
            {courses.map((course, index) => (
              <div key={index} className="border rounded-lg p-3 hover:shadow-sm transition-all cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-sm">{course.title}</h3>
                    <p className="text-xs text-muted-foreground">{course.provider}</p>
                  </div>
                  <Badge variant="outline" className="bg-jobonboard-blue/10 text-jobonboard-blue border-jobonboard-blue/20 text-xs">
                    {course.badge}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{course.duration}</p>
              </div>
            ))}
            <button className="text-xs text-jobonboard-purple w-full text-center mt-2">
              Explore All Courses
            </button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CareerGrowthHub;
