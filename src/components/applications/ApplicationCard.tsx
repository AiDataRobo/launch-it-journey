
import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  MapPin, 
  Edit, 
  Trash, 
  Bookmark, 
  Share2, 
  Flag, 
  ChevronDown, 
  ChevronUp,
  ChevronsRight
} from 'lucide-react';
import { ApplicationData } from './types';
import { format } from 'date-fns';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader,
  DialogTitle,
  DialogFooter, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from '@/components/ui/select';
import { applicationStatusOptions, getApplicationProgressValue, statusColors } from './data/applicationData';

interface ApplicationCardProps {
  application: ApplicationData;
  onStatusUpdate: (id: number, status: string) => void;
  onUpdateNotes: (id: number, notes: string) => void;
}

const ApplicationCard: React.FC<ApplicationCardProps> = ({ 
  application, 
  onStatusUpdate,
  onUpdateNotes 
}) => {
  const [expanded, setExpanded] = useState(false);
  const [isEditingNotes, setIsEditingNotes] = useState(false);
  const [notesDraft, setNotesDraft] = useState(application.notes);
  const progressValue = getApplicationProgressValue(application.status);
  const statusStyle = statusColors[application.status] || statusColors.Applied;
  
  const handleNotesUpdate = () => {
    onUpdateNotes(application.id, notesDraft);
    setIsEditingNotes(false);
  };
  
  return (
    <Card className="mb-4 hover:shadow-md transition-all duration-200">
      <CardContent className="p-4 pt-4">
        <div className="flex justify-between items-start">
          <div className="flex items-start gap-3">
            <div className="h-12 w-12 rounded overflow-hidden border flex-shrink-0">
              {application.logo ? (
                <img 
                  src={application.logo as string} 
                  alt={application.company} 
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center bg-gray-100 text-gray-500">
                  {application.company.charAt(0)}
                </div>
              )}
            </div>
            
            <div>
              <h3 className="font-medium text-lg">{application.jobTitle}</h3>
              <p className="text-muted-foreground">{application.company}</p>
              
              {application.location && (
                <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                  <MapPin className="h-3 w-3" />
                  <span>{application.location}</span>
                </div>
              )}
            </div>
          </div>
          
          <Badge className={`${statusStyle.bg} ${statusStyle.text} ${statusStyle.border} border`}>
            {application.status}
          </Badge>
        </div>
        
        <div className="mt-4">
          <div className="flex justify-between items-center text-sm mb-1">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>Applied: {format(new Date(application.appliedDate), 'MMM d, yyyy')}</span>
            </div>
            <span className="text-xs font-medium">
              {progressValue}%
            </span>
          </div>
          
          <Progress 
            value={progressValue} 
            className="h-2" 
            indicatorClassName={
              application.status === 'Rejected' ? 'bg-red-500' :
              application.status === 'Withdrawn' ? 'bg-gray-500' :
              application.status === 'Offer' ? 'bg-green-500' :
              undefined
            }
          />
        </div>
        
        {expanded && (
          <div className="mt-4 space-y-3 pt-3 border-t">
            {application.salary && (
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Salary</span>
                <span className="text-sm font-medium">{application.salary}</span>
              </div>
            )}
            
            {application.nextStep && (
              <div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Next Step</span>
                  <span className="text-sm font-medium">{application.nextStep}</span>
                </div>
                {application.nextStepDate && (
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1 justify-end">
                    <Calendar className="h-3 w-3" />
                    <span>{format(new Date(application.nextStepDate), 'MMM d, yyyy')}</span>
                  </div>
                )}
              </div>
            )}
            
            <div className="pt-2">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Notes</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-6 text-xs p-1" 
                  onClick={() => setIsEditingNotes(!isEditingNotes)}
                >
                  <Edit className="h-3 w-3 mr-1" /> Edit
                </Button>
              </div>
              
              {isEditingNotes ? (
                <div className="space-y-2">
                  <Textarea
                    value={notesDraft}
                    onChange={(e) => setNotesDraft(e.target.value)}
                    className="h-20 text-sm"
                    placeholder="Add notes about this application..."
                  />
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-7 text-xs"
                      onClick={() => {
                        setNotesDraft(application.notes);
                        setIsEditingNotes(false);
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      size="sm"
                      className="h-7 text-xs bg-jobonboard-purple hover:bg-jobonboard-purple/90"
                      onClick={handleNotesUpdate}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  {application.notes || "No notes added yet."}
                </p>
              )}
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="px-4 py-3 border-t flex justify-between items-center bg-muted/30">
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="h-8">
                <ChevronsRight className="h-4 w-4 mr-1" /> Update Status
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Update Application Status</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <Select
                  defaultValue={application.status}
                  onValueChange={(value) => onStatusUpdate(application.id, value)}
                >
                  <SelectTrigger className="w-full">
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
              <DialogFooter>
                <Button type="submit" onClick={() => {}}>Save Changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Bookmark className="h-4 w-4" />
          </Button>
          
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          className="h-8 text-muted-foreground"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <>
              <ChevronUp className="h-4 w-4 mr-1" /> Less
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 mr-1" /> More
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ApplicationCard;
