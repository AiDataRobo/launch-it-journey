import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, ArrowRight, Linkedin, Upload, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

interface PortfolioLinkedInImportProps {
  onStartFromScratch: () => void;
}

const PortfolioLinkedInImport: React.FC<PortfolioLinkedInImportProps> = ({ onStartFromScratch }) => {
  const [isImporting, setIsImporting] = useState(false);
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [importStep, setImportStep] = useState(0);
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
        // Complete the import
        setTimeout(() => {
          setIsImporting(false);
          setImportStep(0);
          toast({
            title: "Import completed!",
            description: "Your LinkedIn data has been successfully imported. Now you can customize your portfolio.",
            variant: "default",
          });
          // Here you'd redirect to the editor with the imported data
        }, 1500);
      }
    }, 1500);
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
    </div>
  );
};

export default PortfolioLinkedInImport;
