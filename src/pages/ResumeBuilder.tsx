
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Upload, Download, Plus, Edit2, Eye, Copy } from 'lucide-react';

const ResumeBuilder = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Resume Builder</h1>
          <p className="text-gray-600 mt-2">Create and manage your professional resumes</p>
        </div>

        <Tabs defaultValue="editor" className="mb-8">
          <TabsList className="grid grid-cols-3 w-full max-w-md mb-6">
            <TabsTrigger value="editor">Editor</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="editor">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <FileText className="h-5 w-5 text-jobonboard-purple" />
                      Resume Editor
                    </CardTitle>
                    <CardDescription>Build or edit your resume</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium mb-3">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium block mb-1">Full Name</label>
                            <input type="text" className="w-full border rounded-md p-2" placeholder="John Doe" />
                          </div>
                          <div>
                            <label className="text-sm font-medium block mb-1">Job Title</label>
                            <input type="text" className="w-full border rounded-md p-2" placeholder="Software Engineer" />
                          </div>
                          <div>
                            <label className="text-sm font-medium block mb-1">Email</label>
                            <input type="email" className="w-full border rounded-md p-2" placeholder="john.doe@example.com" />
                          </div>
                          <div>
                            <label className="text-sm font-medium block mb-1">Phone</label>
                            <input type="tel" className="w-full border rounded-md p-2" placeholder="(123) 456-7890" />
                          </div>
                          <div className="md:col-span-2">
                            <label className="text-sm font-medium block mb-1">Location</label>
                            <input type="text" className="w-full border rounded-md p-2" placeholder="San Francisco, CA" />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="font-medium">Experience</h3>
                          <Button size="sm" variant="outline" className="flex items-center gap-1">
                            <Plus className="h-4 w-4" /> Add
                          </Button>
                        </div>
                        <Card className="bg-gray-50">
                          <CardContent className="p-4">
                            <div className="flex justify-between">
                              <div>
                                <h4 className="font-medium">Software Engineer</h4>
                                <p className="text-sm text-gray-600">Tech Company Inc.</p>
                                <p className="text-xs text-gray-500">Jan 2020 - Present</p>
                              </div>
                              <div className="flex gap-1">
                                <Button size="icon" variant="ghost" className="h-8 w-8">
                                  <Edit2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="font-medium">Education</h3>
                          <Button size="sm" variant="outline" className="flex items-center gap-1">
                            <Plus className="h-4 w-4" /> Add
                          </Button>
                        </div>
                        <Card className="bg-gray-50">
                          <CardContent className="p-4">
                            <div className="flex justify-between">
                              <div>
                                <h4 className="font-medium">Bachelor of Science in Computer Science</h4>
                                <p className="text-sm text-gray-600">University Name</p>
                                <p className="text-xs text-gray-500">2016 - 2020</p>
                              </div>
                              <div className="flex gap-1">
                                <Button size="icon" variant="ghost" className="h-8 w-8">
                                  <Edit2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="font-medium">Skills</h3>
                          <Button size="sm" variant="outline" className="flex items-center gap-1">
                            <Plus className="h-4 w-4" /> Add
                          </Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <div className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                            JavaScript
                            <button className="text-gray-500 hover:text-gray-700">×</button>
                          </div>
                          <div className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                            React
                            <button className="text-gray-500 hover:text-gray-700">×</button>
                          </div>
                          <div className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                            Node.js
                            <button className="text-gray-500 hover:text-gray-700">×</button>
                          </div>
                          <div className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                            TypeScript
                            <button className="text-gray-500 hover:text-gray-700">×</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Save Draft</Button>
                    <Button className="bg-jobonboard-purple hover:bg-jobonboard-purple/90">
                      Generate Resume
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Eye className="h-5 w-5 text-jobonboard-purple" />
                      Preview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <div className="w-full h-96 border rounded flex items-center justify-center bg-gray-50">
                      <div className="text-center">
                        <FileText className="h-12 w-12 mx-auto text-gray-400" />
                        <p className="mt-2 text-gray-500">Resume preview will appear here</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button variant="outline" className="flex-1 flex items-center justify-center gap-1">
                      <Download className="h-4 w-4" /> Download
                    </Button>
                    <Button variant="outline" className="flex-1 flex items-center justify-center gap-1">
                      <Copy className="h-4 w-4" /> Share
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="text-lg">Import Resume</CardTitle>
                    <CardDescription>Upload an existing resume</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="border-2 border-dashed rounded-lg p-6 text-center">
                      <Upload className="h-10 w-10 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm text-gray-500 mb-2">
                        Drag and drop your resume, or click to browse
                      </p>
                      <Button variant="outline" size="sm">Upload Resume</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="templates">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <FileText className="h-12 w-12 text-gray-400" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium">Template {index}</h3>
                    <p className="text-sm text-gray-500">Professional & clean layout</p>
                  </CardContent>
                  <CardFooter className="bg-gray-50 p-3">
                    <Button className="w-full bg-jobonboard-purple hover:bg-jobonboard-purple/90">
                      Use Template
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Resume History</CardTitle>
                <CardDescription>Your previously saved resumes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center">
                        <FileText className="h-8 w-8 text-jobonboard-purple mr-3" />
                        <div>
                          <h4 className="font-medium">Resume Version {index}</h4>
                          <p className="text-xs text-gray-500">Saved on {new Date().toLocaleDateString()}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Edit</Button>
                        <Button size="sm" variant="outline">Download</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default ResumeBuilder;
