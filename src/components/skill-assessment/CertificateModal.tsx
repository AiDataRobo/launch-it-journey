
import React, { useRef } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Download, Share2 } from 'lucide-react';
import { format } from 'date-fns';
import { toast } from '@/hooks/use-toast';
import { Quiz } from './types';
import { useAuth } from '@/context/AuthContext';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  quiz: Quiz;
  score: number;
  completionDate: Date;
}

const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  quiz,
  score,
  completionDate
}) => {
  const certificateRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();
  
  // Get skill level based on score
  const getSkillLevel = () => {
    if (score >= 90) return 'Expert';
    if (score >= 75) return 'Advanced';
    if (score >= quiz.passingScore) return 'Proficient';
    return 'Beginner';
  };
  
  // Generate certificate ID
  const certificateId = `JOB-${Math.floor(Math.random() * 10000)}-${format(completionDate, 'yyyyMMdd')}`;
  
  // Handle download (simulated)
  const handleDownload = () => {
    // In a real app, you'd use html2canvas, jsPDF, or a similar library to create a PDF
    toast({
      title: "Certificate Downloaded",
      description: "Your certificate has been saved to your device."
    });
  };
  
  // Handle share
  const handleShare = () => {
    navigator.clipboard.writeText(
      `I've earned a ${getSkillLevel()} certification in ${quiz.title} on JobOnboard! #TechCertification #JobOnboard`
    );
    toast({
      title: "Copied to clipboard",
      description: "Share your certificate with others!"
    });
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden">
        <div className="p-6">
          <div 
            ref={certificateRef}
            className="bg-white border-8 border-double border-gray-200 p-8 rounded-lg mb-6"
          >
            <div className="text-center">
              <h2 className="text-3xl font-serif font-bold text-jobonboard-purple mb-2">Certificate of Achievement</h2>
              <p className="text-gray-500 mb-6">This certifies that</p>
              
              <p className="text-2xl font-medium mb-6">
                {user?.email?.split('@')[0] || 'Job Candidate'}
              </p>
              
              <p className="text-gray-500 mb-6">has successfully completed the</p>
              
              <h3 className="text-xl font-bold mb-2">{quiz.title}</h3>
              <p className="text-lg font-medium text-jobonboard-purple mb-6">with a score of {score}%</p>
              
              <div className="flex justify-center mb-6">
                <div className="h-[1px] w-48 bg-gray-300"></div>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mb-6">
                <div className="text-center">
                  <p className="text-gray-800 font-medium">Jane Smith</p>
                  <p className="text-sm text-gray-500">Lead Instructor</p>
                </div>
                
                <div className="text-center">
                  <p className="text-gray-800 font-medium">
                    {format(completionDate, 'MMMM d, yyyy')}
                  </p>
                  <p className="text-sm text-gray-500">Date of Completion</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-8">
                <div>
                  <p className="text-xs text-gray-500">Certificate ID: {certificateId}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Skill Level: {getSkillLevel()}</p>
                </div>
              </div>
              
              <div className="absolute top-2 right-2">
                <img 
                  src="https://asset.brandfetch.io/idAnDTFapY/idx2KdyuL4.svg" 
                  alt="JobOnboard" 
                  className="w-16 h-16 opacity-10"
                />
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 justify-center">
            <Button 
              onClick={handleDownload}
              className="flex items-center gap-2 bg-jobonboard-purple hover:bg-jobonboard-purple-light"
            >
              <Download className="w-4 h-4" />
              Download Certificate
            </Button>
            
            <Button 
              variant="outline" 
              onClick={handleShare}
              className="flex items-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CertificateModal;
