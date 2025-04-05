
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter,
  DialogDescription
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { applicationStatusOptions } from './data/applicationData';
import { ApplicationData } from './types';

interface AddApplicationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdd: (application: ApplicationData) => void;
}

const AddApplicationDialog: React.FC<AddApplicationDialogProps> = ({ 
  open, 
  onOpenChange,
  onAdd
}) => {
  const [newApplication, setNewApplication] = useState<Partial<ApplicationData>>({
    jobTitle: '',
    company: '',
    status: 'Applied',
    appliedDate: format(new Date(), 'yyyy-MM-dd'),
    notes: '',
    location: '',
    salary: ''
  });
  
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const handleChange = (field: keyof ApplicationData, value: string) => {
    setNewApplication(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      ...newApplication,
      id: 0, // This will be replaced in the parent component
      appliedDate: date ? format(date, 'yyyy-MM-dd') : format(new Date(), 'yyyy-MM-dd')
    } as ApplicationData);
    
    // Reset form
    setNewApplication({
      jobTitle: '',
      company: '',
      status: 'Applied',
      appliedDate: format(new Date(), 'yyyy-MM-dd'),
      notes: '',
      location: '',
      salary: ''
    });
    setDate(new Date());
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Add New Application</DialogTitle>
          <DialogDescription>
            Track a new job application you've submitted.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="jobTitle">Job Title*</Label>
              <Input
                id="jobTitle"
                value={newApplication.jobTitle}
                onChange={(e) => handleChange('jobTitle', e.target.value)}
                required
                placeholder="e.g. Frontend Developer"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company">Company*</Label>
              <Input
                id="company"
                value={newApplication.company}
                onChange={(e) => handleChange('company', e.target.value)}
                required
                placeholder="e.g. Acme Inc."
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={newApplication.location}
                  onChange={(e) => handleChange('location', e.target.value)}
                  placeholder="e.g. New York, NY (Remote)"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="salary">Salary</Label>
                <Input
                  id="salary"
                  value={newApplication.salary}
                  onChange={(e) => handleChange('salary', e.target.value)}
                  placeholder="e.g. $100,000 - $120,000"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="status">Status*</Label>
                <Select
                  value={newApplication.status}
                  onValueChange={(value) => handleChange('status', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    {applicationStatusOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Applied Date*</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                value={newApplication.notes}
                onChange={(e) => handleChange('notes', e.target.value)}
                placeholder="Add any notes about this application..."
                className="h-24"
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button 
              type="submit"
              className="bg-jobonboard-purple hover:bg-jobonboard-purple/90"
            >
              Add Application
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddApplicationDialog;
