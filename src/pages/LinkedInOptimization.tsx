
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Award, 
  Briefcase, 
  Users, 
  Share2, 
  CircleUser, 
  MessageSquare, 
  BookOpen,
  Check,
  Star
} from 'lucide-react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const LinkedInOptimization = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState('headline');
  const [profileData, setProfileData] = useState({
    headline: '',
    summary: '',
    experience: '',
    skills: '',
    recommendations: '',
    profileUrl: ''
  });
  
  const [score, setScore] = useState({
    headline: 0,
    summary: 0,
    experience: 0,
    skills: 0, 
    recommendations: 0
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value
    });

    // Simulate score calculation based on input length
    if (value.length > 0) {
      setScore({
        ...score,
        [name]: Math.min(Math.floor(value.length / 10) * 20, 100)
      });
    }
  };

  const handleAnalyze = () => {
    toast({
      title: "Analysis complete",
      description: "We've analyzed your LinkedIn profile and provided recommendations.",
    });
  };

  const handleOptimize = () => {
    toast({
      title: "Optimization suggestions ready",
      description: "AI-powered suggestions for your LinkedIn profile have been generated.",
    });
  };

  const calculateOverallScore = () => {
    const values = Object.values(score);
    return values.reduce((acc, val) => acc + val, 0) / values.length;
  };

  const sectionIcons = {
    headline: <Briefcase className="h-5 w-5" />,
    summary: <BookOpen className="h-5 w-5" />,
    experience: <Award className="h-5 w-5" />,
    skills: <Star className="h-5 w-5" />,
    recommendations: <MessageSquare className="h-5 w-5" />
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Main Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">LinkedIn Profile Optimizer</h1>
                <p className="text-muted-foreground">
                  Enhance your LinkedIn profile to stand out to recruiters and potential employers
                </p>
              </div>

              <Card className="mb-6">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <Linkedin className="h-5 w-5 text-jobonboard-blue" />
                    LinkedIn Profile Score
                  </CardTitle>
                  <CardDescription>
                    Your current profile score based on completed sections
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Overall Score</span>
                      <span className="text-sm font-medium">{Math.round(calculateOverallScore())}%</span>
                    </div>
                    <Progress value={calculateOverallScore()} className="h-2" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(score).map(([key, value]) => (
                      <div key={key} className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-xs flex items-center gap-1 capitalize">
                            {sectionIcons[key]}
                            {key}
                          </span>
                          <span className="text-xs">{value}%</span>
                        </div>
                        <Progress value={value} className="h-1.5" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Tabs defaultValue="optimize" className="mb-6">
                <TabsList className="mb-4">
                  <TabsTrigger value="optimize">Optimize Profile</TabsTrigger>
                  <TabsTrigger value="analyze">Analyze Current Profile</TabsTrigger>
                </TabsList>
                
                <TabsContent value="optimize" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile Enhancement</CardTitle>
                      <CardDescription>
                        Enter your profile details to get AI-powered suggestions
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="headline">Professional Headline</Label>
                          <Input 
                            id="headline" 
                            name="headline"
                            placeholder="e.g., Full Stack Developer | React Specialist | JavaScript Expert"
                            value={profileData.headline}
                            onChange={handleInputChange}
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="summary">Professional Summary</Label>
                          <Textarea 
                            id="summary" 
                            name="summary"
                            placeholder="Briefly describe your professional background, expertise, and career goals..."
                            value={profileData.summary}
                            onChange={handleInputChange}
                            rows={4}
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="experience">Key Experience</Label>
                          <Textarea 
                            id="experience" 
                            name="experience"
                            placeholder="List your most relevant work experiences..."
                            value={profileData.experience}
                            onChange={handleInputChange}
                            rows={3}
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="skills">Core Skills</Label>
                          <Textarea 
                            id="skills" 
                            name="skills"
                            placeholder="List your main technical and soft skills..."
                            value={profileData.skills}
                            onChange={handleInputChange}
                            rows={3}
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="recommendations">Recommendations & Endorsements</Label>
                          <Textarea 
                            id="recommendations" 
                            name="recommendations"
                            placeholder="Enter any recommendations you have or would like to request..."
                            value={profileData.recommendations}
                            onChange={handleInputChange}
                            rows={3}
                          />
                        </div>
                        
                        <Button onClick={handleOptimize} className="bg-jobonboard-blue hover:bg-jobonboard-blue/90">
                          Generate Optimization Suggestions
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="analyze" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile Analysis</CardTitle>
                      <CardDescription>
                        Let us analyze your existing LinkedIn profile
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="profileUrl">LinkedIn Profile URL</Label>
                          <Input 
                            id="profileUrl" 
                            name="profileUrl"
                            placeholder="https://www.linkedin.com/in/yourname/"
                            value={profileData.profileUrl}
                            onChange={handleInputChange}
                          />
                        </div>
                        
                        <Button onClick={handleAnalyze} className="bg-jobonboard-purple hover:bg-jobonboard-purple/90">
                          Analyze My Profile
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
          
          {/* Sidebar with tips */}
          <div className="w-full md:w-80 space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Tips & Best Practices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <div className="flex-shrink-0 mt-1 text-jobonboard-blue">
                    <Check size={16} />
                  </div>
                  <p className="text-sm">Use a professional photo that clearly shows your face</p>
                </div>
                <div className="flex gap-2">
                  <div className="flex-shrink-0 mt-1 text-jobonboard-blue">
                    <Check size={16} />
                  </div>
                  <p className="text-sm">Include industry keywords relevant to your target jobs</p>
                </div>
                <div className="flex gap-2">
                  <div className="flex-shrink-0 mt-1 text-jobonboard-blue">
                    <Check size={16} />
                  </div>
                  <p className="text-sm">Quantify your achievements with specific metrics</p>
                </div>
                <div className="flex gap-2">
                  <div className="flex-shrink-0 mt-1 text-jobonboard-blue">
                    <Check size={16} />
                  </div>
                  <p className="text-sm">Regularly engage with your network to increase visibility</p>
                </div>
                <div className="flex gap-2">
                  <div className="flex-shrink-0 mt-1 text-jobonboard-blue">
                    <Check size={16} />
                  </div>
                  <p className="text-sm">Request recommendations from past colleagues and managers</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Premium Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-jobonboard-purple/10 rounded-lg flex items-start gap-3">
                  <CircleUser className="h-5 w-5 text-jobonboard-purple flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium">Expert Review</h4>
                    <p className="text-xs text-muted-foreground">Get personalized feedback from a career coach</p>
                  </div>
                </div>
                <div className="p-3 bg-jobonboard-blue/10 rounded-lg flex items-start gap-3">
                  <Briefcase className="h-5 w-5 text-jobonboard-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium">Industry Templates</h4>
                    <p className="text-xs text-muted-foreground">Access to premium templates for your specific industry</p>
                  </div>
                </div>
                <div className="p-3 bg-jobonboard-green/10 rounded-lg flex items-start gap-3">
                  <Users className="h-5 w-5 text-jobonboard-green flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium">Network Growth</h4>
                    <p className="text-xs text-muted-foreground">AI-powered connection suggestions relevant to your career</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Upgrade to Premium
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LinkedInOptimization;
