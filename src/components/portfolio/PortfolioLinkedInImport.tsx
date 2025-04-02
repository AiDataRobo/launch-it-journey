
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, ArrowRight, Linkedin, Upload, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { PortfolioData, PortfolioSection } from '@/types/portfolio';
import PublishPortfolioModal from './PublishPortfolioModal';

interface PortfolioLinkedInImportProps {
  onStartFromScratch: () => void;
}

const PortfolioLinkedInImport: React.FC<PortfolioLinkedInImportProps> = ({ onStartFromScratch }) => {
  const [isImporting, setIsImporting] = useState(false);
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [importStep, setImportStep] = useState(0);
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
  const [generatedPortfolio, setGeneratedPortfolio] = useState<PortfolioData | null>(null);
  const { toast } = useToast();

  const handleImport = () => {
    if (!linkedinUrl) {
      toast({
        title: "LinkedIn URL required",
        description: "Please enter your LinkedIn profile URL to continue.",
        variant: "destructive",
      });
      return;
    }

    // Simulate the import process with steps
    setIsImporting(true);
    simulateImportProcess();
  };

  const simulateImportProcess = () => {
    // For demo purpose, we'll simulate a multi-step import process
    const steps = [
      "Connecting to LinkedIn...",
      "Fetching profile data...",
      "Analyzing work experience...",
      "Extracting skills...",
      "Generating portfolio draft...",
      "Complete!"
    ];

    let currentStep = 0;
    
    const processInterval = setInterval(() => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        setImportStep(currentStep);
        
        toast({
          title: steps[currentStep],
          description: `Step ${currentStep + 1} of ${steps.length}`,
        });
      } else {
        clearInterval(processInterval);
        // Complete the import and generate portfolio data
        setTimeout(() => {
          setIsImporting(false);
          setImportStep(0);
          
          // Generate sample portfolio data based on LinkedIn import
          const portfolioData = generatePortfolioFromLinkedIn();
          setGeneratedPortfolio(portfolioData);
          
          toast({
            title: "Import completed!",
            description: "Your LinkedIn data has been successfully imported. You can now publish your portfolio.",
            variant: "default",
          });
          
          // Open the publish modal automatically
          setIsPublishModalOpen(true);
        }, 1500);
      }
    }, 1500);
  };

  // Generate portfolio data from LinkedIn (simulated)
  const generatePortfolioFromLinkedIn = (): PortfolioData => {
    // In a real implementation, this would use actual data from LinkedIn API
    // For now, we'll create a sample portfolio with mock data
    
    const sections: PortfolioSection[] = [
      {
        id: 'about-1',
        type: 'about',
        title: 'About Me',
        content: {
          description: 'Passionate software developer with expertise in frontend technologies and a strong focus on creating user-friendly applications.'
        }
      },
      {
        id: 'experience-1',
        type: 'experience',
        title: 'Work Experience',
        content: [
          {
            title: 'Senior Frontend Developer',
            company: 'Tech Solutions Inc.',
            period: '2020 - Present',
            description: 'Lead developer on multiple high-profile projects, specializing in React and TypeScript.'
          },
          {
            title: 'Web Developer',
            company: 'Digital Innovations',
            period: '2018 - 2020',
            description: 'Developed and maintained responsive web applications using modern JavaScript frameworks.'
          }
        ]
      },
      {
        id: 'education-1',
        type: 'education',
        title: 'Education',
        content: [
          {
            degree: 'Master of Computer Science',
            institution: 'Tech University',
            year: '2016 - 2018'
          },
          {
            degree: 'Bachelor of Computer Science',
            institution: 'State University',
            year: '2012 - 2016'
          }
        ]
      },
      {
        id: 'skills-1',
        type: 'skills',
        title: 'Skills',
        content: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'HTML/CSS', 'Git', 'UI/UX Design', 'RESTful APIs']
      },
      {
        id: 'projects-1',
        type: 'projects',
        title: 'Projects',
        content: [
          {
            title: 'E-commerce Platform',
            description: 'Developed a full-stack e-commerce platform with React, Node.js, and MongoDB.',
            link: 'https://github.com/example/ecommerce'
          },
          {
            title: 'Portfolio Generator',
            description: 'Created a tool for developers to generate and customize portfolio websites.',
            link: 'https://github.com/example/portfolio-gen'
          }
        ]
      },
      {
        id: 'contact-1',
        type: 'contact',
        title: 'Contact',
        content: {
          email: 'user@example.com',
          phone: '(123) 456-7890',
          location: 'San Francisco, CA'
        }
      }
    ];
    
    return {
      sections,
      template: 'modern',
      colors: {
        primary: '#8B5CF6',
        secondary: '#10B981',
        background: '#ffffff',
        text: '#333333'
      },
      meta: {
        title: 'Professional Portfolio',
        createdAt: new Date().toISOString()
      }
    };
  };

  return (
    <div className="space-y-6">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <Linkedin size={48} className="text-jobonboard-purple mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Import from LinkedIn</h2>
        <p className="text-muted-foreground">
          Create your portfolio instantly by importing your LinkedIn profile data. 
          We'll extract your work experience, skills, education, and more.
        </p>
      </div>

      {isImporting ? (
        <div className="space-y-6 py-4">
          <div className="w-full bg-muted rounded-full h-2.5 mb-6">
            <motion.div 
              className="bg-jobonboard-purple h-2.5 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${(importStep / 5) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="relative mb-4">
                <div className="animate-pulse w-24 h-24 bg-jobonboard-purple/20 rounded-full flex items-center justify-center">
                  <Upload className="text-jobonboard-purple h-12 w-12" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Importing your LinkedIn data</h3>
              <p className="text-muted-foreground mb-6">
                Please wait while we process your LinkedIn profile. This will only take a moment.
              </p>
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-jobonboard-purple/5 border border-jobonboard-purple/20 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="text-jobonboard-purple h-5 w-5 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm">
                Enter your LinkedIn profile URL to import your information. You'll be able to review and edit before finalizing.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="linkedin-url">LinkedIn Profile URL</Label>
              <div className="flex gap-2">
                <Input 
                  id="linkedin-url" 
                  placeholder="https://www.linkedin.com/in/yourprofile" 
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                />
                <Button 
                  onClick={handleImport}
                  className="bg-jobonboard-purple hover:bg-jobonboard-purple/90"
                >
                  Import
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Example: https://www.linkedin.com/in/johndoe
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center pt-4 border-t">
            <p className="text-sm text-muted-foreground mb-3">Don't want to import from LinkedIn?</p>
            <Button 
              variant="outline" 
              onClick={onStartFromScratch}
              className="group"
            >
              Start from scratch
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      )}

      {/* Publish portfolio modal that opens automatically after LinkedIn import */}
      {generatedPortfolio && (
        <PublishPortfolioModal 
          isOpen={isPublishModalOpen}
          onClose={() => setIsPublishModalOpen(false)}
          portfolioData={generatedPortfolio}
        />
      )}
    </div>
  );
};

export default PortfolioLinkedInImport;
