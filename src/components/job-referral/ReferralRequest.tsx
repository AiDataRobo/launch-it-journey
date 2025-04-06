
import React from 'react';
import { useForm } from 'react-hook-form';
import { 
  Dialog, 
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { Upload, CheckCircle2 } from 'lucide-react';
import { jobReferralListings } from './data/jobReferralData';

interface ReferralRequestProps {
  jobId: number;
  isOpen: boolean;
  onClose: () => void;
}

type FormValues = {
  reason: string;
  resume: FileList | null;
  additionalInfo: string;
};

const ReferralRequest: React.FC<ReferralRequestProps> = ({ jobId, isOpen, onClose }) => {
  const job = jobReferralListings.find(j => j.id === jobId);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  
  const form = useForm<FormValues>({
    defaultValues: {
      reason: '',
      resume: null,
      additionalInfo: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form data:', data);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Referral Request Submitted",
      description: "Your request has been sent successfully.",
    });
    
    // Reset form after successful submission
    setTimeout(() => {
      setIsSubmitted(false);
      form.reset();
      onClose();
    }, 2000);
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
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 py-4">
                <FormField
                  control={form.control}
                  name="reason"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Why are you a good fit for this role?*</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Explain why you're qualified for this position and why someone should refer you..."
                          className="min-h-[120px]"
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="resume"
                  render={({ field: { value, onChange, ...fieldProps } }) => (
                    <FormItem>
                      <FormLabel>Upload your resume*</FormLabel>
                      <FormControl>
                        <div className="grid w-full items-center gap-1.5">
                          <label 
                            htmlFor="resume-upload" 
                            className="group flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 px-6 py-4 transition-colors hover:border-jobonboard-purple/70 hover:bg-gray-50"
                          >
                            <Upload className="mb-2 h-8 w-8 text-gray-400 group-hover:text-jobonboard-purple" />
                            <div className="text-sm font-medium text-gray-700">
                              Drop your resume here or click to browse
                            </div>
                            <div className="mt-1 text-xs text-gray-500">
                              PDF, DOCX or RTF (max 5MB)
                            </div>
                            <Input
                              id="resume-upload"
                              type="file"
                              className="hidden"
                              accept=".pdf,.docx,.rtf"
                              onChange={(e) => {
                                onChange(e.target.files);
                              }}
                              {...fieldProps}
                              required
                            />
                          </label>
                          {value && value.length > 0 && (
                            <div className="mt-1 flex items-center justify-between text-sm text-gray-500">
                              <span>{value[0].name}</span>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => onChange(null)}
                                className="h-auto p-0 text-red-500 hover:text-red-700"
                              >
                                Remove
                              </Button>
                            </div>
                          )}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="additionalInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional information (optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Any additional context that might help with your referral request..."
                          className="min-h-[80px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <DialogFooter className="pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="mr-2"
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    className="bg-jobonboard-purple hover:bg-jobonboard-purple-light"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="mb-2 text-lg font-medium">Request Submitted</h3>
            <p className="mb-6 text-center text-gray-600">
              Your referral request has been submitted successfully. You'll be notified when there's an update.
            </p>
            <Button onClick={onClose}>Close</Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ReferralRequest;
