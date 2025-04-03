
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, Calendar, Clock, Video, MessageSquare, CheckCircle, AlertCircle, PlayCircle, Users } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const Interviews = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Interview Preparation</h1>
          <p className="text-gray-600 mt-2">Prepare for interviews and track your progress</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-xl flex items-center gap-2">
                <Calendar className="h-5 w-5 text-jobonboard-purple" />
                Upcoming Interviews
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-3">2</p>
              <div className="text-sm text-muted-foreground">Next: Today at 2:00 PM</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-xl flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-jobonboard-purple" />
                Completed Interviews
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-3">5</p>
              <Progress value={60} className="h-2 mb-1" />
              <div className="text-sm text-muted-foreground">60% success rate</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-xl flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-jobonboard-purple" />
                Practice Sessions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-3">12</p>
              <Button className="w-full bg-jobonboard-purple hover:bg-jobonboard-purple/90">Practice Now</Button>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="upcoming" className="mb-8">
          <TabsList className="grid grid-cols-4 w-full max-w-lg mb-6">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="practice">Practice</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming">
            <Card>
              <CardHeader>
                <CardTitle>Scheduled Interviews</CardTitle>
                <CardDescription>Your upcoming interview sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Card className="overflow-hidden border-l-4 border-l-blue-500">
                    <CardContent className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="md:col-span-2">
                          <h3 className="font-medium text-lg">Frontend Developer Interview</h3>
                          <p className="text-muted-foreground">TechCorp Inc.</p>
                          <div className="flex items-center gap-1 mt-2">
                            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Technical</Badge>
                            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Round 2</Badge>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2 text-gray-700">
                            <Calendar className="h-4 w-4" />
                            <span>Today, July 15, 2023</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700 mt-1">
                            <Clock className="h-4 w-4" />
                            <span>2:00 PM - 3:00 PM</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700 mt-1">
                            <Video className="h-4 w-4" />
                            <span>Zoom Meeting</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="outline">Prepare</Button>
                          <Button className="bg-jobonboard-purple hover:bg-jobonboard-purple/90">Join</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden border-l-4 border-l-green-500">
                    <CardContent className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="md:col-span-2">
                          <h3 className="font-medium text-lg">UX Designer Interview</h3>
                          <p className="text-muted-foreground">Design Studio Ltd.</p>
                          <div className="flex items-center gap-1 mt-2">
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Portfolio Review</Badge>
                            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Initial</Badge>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2 text-gray-700">
                            <Calendar className="h-4 w-4" />
                            <span>Tomorrow, July 16, 2023</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700 mt-1">
                            <Clock className="h-4 w-4" />
                            <span>10:00 AM - 11:30 AM</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700 mt-1">
                            <Video className="h-4 w-4" />
                            <span>Microsoft Teams</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="outline">Prepare</Button>
                          <Button variant="outline" disabled>Join</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Schedule Mock Interview</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="practice">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Technical Interview</CardTitle>
                  <CardDescription>Practice coding questions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="text-sm">Completed</div>
                      <div className="font-medium">7/20</div>
                    </div>
                    <Progress value={35} className="h-2" />
                    <p className="text-sm text-gray-600">
                      Practice common algorithms and data structures questions asked in technical interviews.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-jobonboard-purple hover:bg-jobonboard-purple/90">
                    <PlayCircle className="mr-2 h-4 w-4" /> Continue Practice
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Behavioral Interview</CardTitle>
                  <CardDescription>Work through common questions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="text-sm">Completed</div>
                      <div className="font-medium">3/15</div>
                    </div>
                    <Progress value={20} className="h-2" />
                    <p className="text-sm text-gray-600">
                      Practice your responses to common behavioral questions using the STAR method.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-jobonboard-purple hover:bg-jobonboard-purple/90">
                    <PlayCircle className="mr-2 h-4 w-4" /> Continue Practice
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Mock Interviews</CardTitle>
                  <CardDescription>AI-powered interview simulation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="text-sm">Completed</div>
                      <div className="font-medium">2/5</div>
                    </div>
                    <Progress value={40} className="h-2" />
                    <p className="text-sm text-gray-600">
                      Get realistic interview practice with our AI interviewer and receive feedback.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-jobonboard-purple hover:bg-jobonboard-purple/90">
                    <PlayCircle className="mr-2 h-4 w-4" /> Start Mock Interview
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Interview History</CardTitle>
                <CardDescription>Past interviews and outcomes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { company: 'Tech Solutions Inc.', position: 'Senior Developer', date: 'June 10, 2023', status: 'Successful', statusColor: 'bg-green-500' },
                    { company: 'Digital Innovators', position: 'UI Developer', date: 'May 25, 2023', status: 'Pending', statusColor: 'bg-amber-500' },
                    { company: 'WebSoft Technologies', position: 'Frontend Engineer', date: 'May 12, 2023', status: 'Successful', statusColor: 'bg-green-500' },
                    { company: 'Creative Digital', position: 'UX Developer', date: 'April 30, 2023', status: 'Unsuccessful', statusColor: 'bg-red-500' },
                    { company: 'TechGiant Corp', position: 'Software Engineer', date: 'April 15, 2023', status: 'Successful', statusColor: 'bg-green-500' },
                  ].map((interview, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`h-3 w-3 rounded-full ${interview.statusColor}`}></div>
                        <div>
                          <h4 className="font-medium">{interview.position}</h4>
                          <p className="text-sm text-gray-500">{interview.company}</p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">{interview.date}</div>
                      <div>
                        <Badge 
                          className={
                            interview.status === 'Successful' ? 'bg-green-100 text-green-800 hover:bg-green-100' :
                            interview.status === 'Pending' ? 'bg-amber-100 text-amber-800 hover:bg-amber-100' :
                            'bg-red-100 text-red-800 hover:bg-red-100'
                          }
                        >
                          {interview.status}
                        </Badge>
                      </div>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="resources">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Interview Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Research the company thoroughly</li>
                    <li>Practice common interview questions</li>
                    <li>Prepare your own questions to ask</li>
                    <li>Dress professionally and arrive early</li>
                    <li>Follow up with a thank-you note</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View All Tips</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Video Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <Video className="h-10 w-10 text-jobonboard-purple" />
                      <div>
                        <h4 className="font-medium">Technical Interview Masterclass</h4>
                        <p className="text-sm text-gray-500">45 min • Beginner friendly</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Video className="h-10 w-10 text-jobonboard-purple" />
                      <div>
                        <h4 className="font-medium">Answering Behavioral Questions</h4>
                        <p className="text-sm text-gray-500">30 min • All levels</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Video className="h-10 w-10 text-jobonboard-purple" />
                      <div>
                        <h4 className="font-medium">Whiteboard Interview Strategies</h4>
                        <p className="text-sm text-gray-500">60 min • Intermediate</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Browse Library</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Community Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <MessageSquare className="h-10 w-10 text-jobonboard-purple" />
                      <div>
                        <h4 className="font-medium">Interview Preparation Forum</h4>
                        <p className="text-sm text-gray-500">Connect with peers preparing for interviews</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Users className="h-10 w-10 text-jobonboard-purple" />
                      <div>
                        <h4 className="font-medium">Mock Interview Group</h4>
                        <p className="text-sm text-gray-500">Practice with other job seekers</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <AlertCircle className="h-10 w-10 text-jobonboard-purple" />
                      <div>
                        <h4 className="font-medium">Interview FAQs</h4>
                        <p className="text-sm text-gray-500">Answers to common questions</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Join Community</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Interviews;
