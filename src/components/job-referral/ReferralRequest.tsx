
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';
import { useJobReferrals } from '@/hooks/use-job-referrals';
import ReferralForm from './ReferralForm';
import SuccessView from './SuccessView';
import { ReferralFormValues } from './referral-types';

interface ReferralRequestProps {
  jobId: string;
  isOpen: boolean;
  onClose: () => void;
}

const ReferralRequest: React.FC<ReferralRequestProps> = ({ jobId, isOpen, onClose }) => {
  const { jobPostings, submitReferralRequest } = useJobReferrals();
  const job = jobPostings.find(j => j.id === jobId);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = async (data: ReferralFormValues) => {
    setIsSubmitting(true);
    
    try {
      const resumeFile = data.resume && data.resume.length > 0 ? data.resume[0] : null;
      const fullReason = data.additionalInfo 
        ? `${data.reason}\n\nAdditional Information:\n${data.additionalInfo}`
        : data.reason;

      const result = await submitReferralRequest(jobId, fullReason, resumeFile);
      
      if (result) {
        setIsSubmitted(true);
        
        toast({
          title: "Referral Request Submitted",
          description: "Your request has been sent successfully.",
        });
        
        // Reset form after successful submission
        setTimeout(() => {
          setIsSubmitted(false);
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error('Error submitting request:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!job) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[525px]">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle>Request Referral</DialogTitle>
              <DialogDescription>
                Request a referral for {job.title} at {job.company}. 
                Include a compelling reason why you're a good fit for this role.
              </DialogDescription>
            </DialogHeader>
            
            <ReferralForm 
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              onCancel={onClose}
            />
          </>
        ) : (
          <SuccessView onClose={onClose} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ReferralRequest;
