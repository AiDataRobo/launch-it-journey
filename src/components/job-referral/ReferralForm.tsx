
import React from 'react';
import { useForm } from 'react-hook-form';
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
import { DialogFooter } from '@/components/ui/dialog';
import { Upload } from 'lucide-react';
import { ReferralFormValues } from './referral-types';

interface ReferralFormProps {
  onSubmit: (data: ReferralFormValues) => void;
  isSubmitting: boolean;
  onCancel: () => void;
}

const ReferralForm: React.FC<ReferralFormProps> = ({ 
  onSubmit, 
  isSubmitting, 
  onCancel 
}) => {
  const form = useForm<ReferralFormValues>({
    defaultValues: {
      reason: '',
      resume: null,
      additionalInfo: '',
    },
  });

  return (
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
            onClick={onCancel}
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
  );
};

export default ReferralForm;
