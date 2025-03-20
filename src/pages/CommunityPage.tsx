
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  MessageSquare, 
  Users, 
  VideoIcon, 
  Calendar, 
  BookOpen, 
  GraduationCap, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const CommunityPage = () => {
  const events = [
    {
      title: "Monthly Networking Mixer",
      date: "June 15, 2023",
      time: "6:00 PM - 8:00 PM EST",
      type: "Virtual",
      description: "Connect with peers and industry professionals in a casual online setting.",
      attendees: 42,
    },
    {
      title: "Tech Resume Workshop",
      date: "June 22, 2023",
      time: "12:00 PM - 1:30 PM EST",
      type: "In-Person",
      description: "Get professional feedback on your tech resume from hiring managers.",
      attendees: 25,
    },
    {
      title: "Interview Preparation Session",
      date: "July 5, 2023",
      time: "5:30 PM - 7:00 PM EST",
      type: "Virtual",
      description: "Practice technical interviews with experienced tech professionals.",
      attendees: 38,
    },
  ];

  const discussions = [
    {
      title: "Tips for transitioning from customer service to IT support?",
      author: "Maria S.",
      avatar: "/placeholder.svg",
      initials: "MS",
      replies: 24,
      tags: ["Career Transition", "IT Support"],
      preview: "I've been working in customer service for 5 years and want to move into IT support. What skills should I focus on?",
      timeAgo: "2 hours ago",
    },
    {
      title: "Resources for learning cloud computing?",
      author: "David L.",
      avatar: "/placeholder.svg",
      initials: "DL",
      replies: 18,
      tags: ["Cloud Computing", "Learning Resources"],
      preview: "Looking for recommendations on courses or certifications for AWS or Azure.",
      timeAgo: "1 day ago",
    },
    {
      title: "How to prepare for a full-stack developer interview?",
      author: "Chris T.",
      avatar: "/placeholder.svg",
      initials: "CT",
      replies: 32,
      tags: ["Interviews", "Full-Stack"],
      preview: "I have an interview next week for a full-stack role. Any advice on what to expect and how to prepare?",
      timeAgo: "3 days ago",
    },
  ];

  const mentors = [
    {
      name: "Jennifer Wu",
      role: "Senior Software Engineer",
      company: "Microsoft",
      avatar: "/placeholder.svg",
      initials: "JW",
      expertise: ["React", "TypeScript", "Azure"],
      availability: "2 slots available",
    },
    {
      name: "Marcus Johnson",
      role: "Data Scientist",
      company: "Netflix",
      avatar: "/placeholder.svg",
      initials: "MJ",
      expertise: ["Python", "Machine Learning", "Big Data"],
      availability: "1 slot available",
    },
    {
      name: "Priya Sharma",
      role: "Product Manager",
      company: "Google",
      avatar: "/placeholder.svg",
      initials: "PS",
      expertise: ["Product Strategy", "UX", "Agile"],
      availability: "3 slots available",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-gray-50/80"></div>
            <div className="absolute top-1/3 right-0 w-80 h-80 bg-jobonboard-purple/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-jobonboard-blue/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-jobonboard-purple/10 text-jobonboard-purple text-sm font-medium mb-4">
                <Users className="w-4 h-4" />
                <span>Community</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Connect, Learn, and Grow Together</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join a supportive network of professionals helping each other navigate and succeed in IT careers.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-jobonboard-purple hover:bg-jobonboard-purple-light">
                  Join the Community
                </Button>
                <Button size="lg" variant="outline">
                  Browse Discussions
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Community Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <Tabs defaultValue="discussions" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-3 w-full max-w-xl">
                  <TabsTrigger value="discussions" className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>Discussions</span>
                  </TabsTrigger>
                  <TabsTrigger value="events" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Events</span>
                  </TabsTrigger>
                  <TabsTrigger value="mentors" className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>Mentors</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="discussions" className="animate-fade-in">
                <div className="max-w-4xl mx-auto">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Latest Discussions</h2>
                    <Button variant="outline" className="flex items-center gap-2">
                      <span>New Discussion</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {discussions.map((discussion, index) => (
                      <Card key={index} className="hover:shadow-md transition-all">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                              <Avatar className="w-10 h-10">
                                <AvatarImage src={discussion.avatar} alt={discussion.author} />
                                <AvatarFallback>{discussion.initials}</AvatarFallback>
                              </Avatar>
                              <div>
                                <CardTitle className="text-xl mb-1">{discussion.title}</CardTitle>
                                <CardDescription className="text-sm">
                                  Posted by {discussion.author} · {discussion.timeAgo}
                                </CardDescription>
                              </div>
                            </div>
                            <div className="text-sm text-gray-500 flex items-center">
                              <MessageSquare className="w-4 h-4 mr-1" /> {discussion.replies}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-3">{discussion.preview}</p>
                          <div className="flex gap-2">
                            {discussion.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">{tag}</Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                    <div className="text-center mt-8">
                      <Button variant="outline">View All Discussions</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="events" className="animate-fade-in">
                <div className="max-w-4xl mx-auto">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Upcoming Events</h2>
                    <Button variant="outline" className="flex items-center gap-2">
                      <span>All Events</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {events.map((event, index) => (
                      <Card key={index} className="hover:shadow-md transition-all">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <Badge 
                                  variant={event.type === "Virtual" ? "outline" : "default"}
                                  className={event.type === "Virtual" ? "border-jobonboard-blue text-jobonboard-blue" : "bg-jobonboard-purple"}
                                >
                                  {event.type === "Virtual" ? (
                                    <><VideoIcon className="w-3 h-3 mr-1" /> {event.type}</>
                                  ) : (
                                    <>{event.type}</>
                                  )}
                                </Badge>
                                <span className="text-sm text-gray-500">
                                  <Users className="w-3 h-3 inline mr-1" /> {event.attendees} attending
                                </span>
                              </div>
                              <CardTitle className="text-xl">{event.title}</CardTitle>
                              <CardDescription className="mt-1">
                                <Calendar className="w-4 h-4 inline mr-1" /> {event.date} · {event.time}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">{event.description}</p>
                          <Button size="sm" className="bg-jobonboard-purple hover:bg-jobonboard-purple-light">
                            Register Now
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="mentors" className="animate-fade-in">
                <div className="max-w-4xl mx-auto">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Featured Mentors</h2>
                    <Button variant="outline" className="flex items-center gap-2">
                      <span>All Mentors</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {mentors.map((mentor, index) => (
                      <Card key={index} className="hover:shadow-md transition-all">
                        <CardHeader className="text-center pb-2">
                          <Avatar className="w-20 h-20 mx-auto mb-3">
                            <AvatarImage src={mentor.avatar} alt={mentor.name} />
                            <AvatarFallback className="bg-jobonboard-purple text-white text-xl">
                              {mentor.initials}
                            </AvatarFallback>
                          </Avatar>
                          <CardTitle className="text-xl">{mentor.name}</CardTitle>
                          <CardDescription className="text-sm">
                            {mentor.role} at {mentor.company}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                          <div className="flex flex-wrap justify-center gap-2 mb-4">
                            {mentor.expertise.map((skill, i) => (
                              <Badge key={i} variant="secondary" className="bg-gray-100">{skill}</Badge>
                            ))}
                          </div>
                          <p className="text-sm text-jobonboard-green mb-4">
                            <Sparkles className="w-4 h-4 inline mr-1" /> {mentor.availability}
                          </p>
                          <Button size="sm" className="bg-jobonboard-purple hover:bg-jobonboard-purple-light">
                            Book Session
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Resources */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Community Resources</h2>
              <p className="text-lg text-gray-600">
                Access exclusive resources created and curated by our community members.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-md transition-all animate-fade-in">
                <CardHeader>
                  <BookOpen className="w-10 h-10 text-jobonboard-blue mb-4" />
                  <CardTitle>Learning Library</CardTitle>
                  <CardDescription>
                    Tutorials, guides, and articles for various IT roles and skills.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Browse Resources
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-all animate-fade-in" style={{ animationDelay: "100ms" }}>
                <CardHeader>
                  <GraduationCap className="w-10 h-10 text-jobonboard-purple mb-4" />
                  <CardTitle>Study Groups</CardTitle>
                  <CardDescription>
                    Join peers learning similar technologies for accountability and support.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Find a Group
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-all animate-fade-in" style={{ animationDelay: "200ms" }}>
                <CardHeader>
                  <VideoIcon className="w-10 h-10 text-jobonboard-green mb-4" />
                  <CardTitle>Recorded Webinars</CardTitle>
                  <CardDescription>
                    Watch past webinars and workshops from industry experts.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Watch Videos
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-r from-jobonboard-blue to-jobonboard-purple rounded-2xl overflow-hidden shadow-lg p-8 md:p-12 text-white animate-fade-in">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to Join Our Community?</h3>
                  <p className="text-white/80 mb-0 md:mb-0">
                    Connect with peers, mentors, and resources to accelerate your IT career journey.
                  </p>
                </div>
                <Button size="lg" className="px-6 bg-white text-jobonboard-purple hover:bg-gray-100 focus:ring-4 focus:ring-white/50 whitespace-nowrap">
                  Join Now - It's Free
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CommunityPage;
