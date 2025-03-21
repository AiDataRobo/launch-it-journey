
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Code, Database, Shield, Brain, PenTool, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const CareerRecommendations = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const careerOptions = [
    {
      title: "Software Developer",
      description: "Build applications, websites, and software solutions using various programming languages.",
      icon: Code,
      color: "text-jobonboard-blue",
      bgColor: "bg-jobonboard-blue/10",
      matchScore: 92,
    },
    {
      title: "Data Scientist",
      description: "Analyze data, develop models, and extract insights to solve complex business problems.",
      icon: Database,
      color: "text-jobonboard-purple",
      bgColor: "bg-jobonboard-purple/10",
      matchScore: 85,
    },
    {
      title: "Cybersecurity Expert",
      description: "Protect systems and networks from digital attacks and security breaches.",
      icon: Shield,
      color: "text-jobonboard-green",
      bgColor: "bg-jobonboard-green/10",
      matchScore: 78,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="career-recommendations" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 -right-24 w-96 h-96 bg-jobonboard-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -left-24 w-96 h-96 bg-jobonboard-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-jobonboard-purple/10 text-jobonboard-purple text-sm font-medium mb-4">
            <Search className="w-4 h-4" />
            <span>Personalized Recommendations</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover Your Ideal Career Path
          </h2>
          <p className="text-lg text-gray-600">
            Share your skills, experience, and interests to receive personalized IT career recommendations tailored to your unique profile.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {!formSubmitted ? (
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <Label htmlFor="skills" className="mb-2 block">Technical Skills</Label>
                    <Input 
                      id="skills" 
                      placeholder="e.g., JavaScript, Python, SQL" 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="interests" className="mb-2 block">Areas of Interest</Label>
                    <Input 
                      id="interests" 
                      placeholder="e.g., AI, Web Development, Security" 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="experience" className="mb-2 block">Experience Level</Label>
                    <select 
                      id="experience" 
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    >
                      <option value="">Select experience level</option>
                      <option value="beginner">Beginner (0-1 years)</option>
                      <option value="intermediate">Intermediate (1-3 years)</option>
                      <option value="experienced">Experienced (3-5 years)</option>
                      <option value="senior">Senior (5+ years)</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="education" className="mb-2 block">Highest Education</Label>
                    <select 
                      id="education" 
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    >
                      <option value="">Select education level</option>
                      <option value="highschool">High School</option>
                      <option value="associate">Associate Degree</option>
                      <option value="bachelor">Bachelor's Degree</option>
                      <option value="master">Master's Degree</option>
                      <option value="phd">PhD or Doctorate</option>
                      <option value="bootcamp">Bootcamp Graduate</option>
                      <option value="self">Self-taught</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <Button type="submit" size="lg" className="bg-jobonboard-purple hover:bg-jobonboard-purple-light">
                    Get Personalized Recommendations
                  </Button>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-center mb-6">Your Top Career Matches</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {careerOptions.map((career, index) => (
                  <Card key={career.title} className="hover:shadow-md transition-all duration-300 border border-gray-100">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className={`w-12 h-12 ${career.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                          <career.icon className={career.color} size={24} />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-500">Match</span>
                          <span className="text-xl font-bold text-jobonboard-purple">{career.matchScore}%</span>
                        </div>
                      </div>
                      <CardTitle>{career.title}</CardTitle>
                      <CardDescription className="mt-2">
                        {career.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-2">
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Match Score</span>
                          <span className="font-medium">{career.matchScore}%</span>
                        </div>
                        <Progress value={career.matchScore} className="h-2" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full border-jobonboard-purple text-jobonboard-purple hover:bg-jobonboard-purple/10">
                        View Career Path
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button 
                  onClick={() => setFormSubmitted(false)} 
                  variant="ghost" 
                  className="text-jobonboard-blue hover:text-jobonboard-blue-light hover:bg-jobonboard-blue/10"
                >
                  Refine Your Search
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CareerRecommendations;
