
export interface ApplicationData {
  id: number;
  jobTitle: string;
  company: string;
  status: string;
  appliedDate: string;
  notes: string;
  logo?: string;
  location?: string;
  salary?: string;
  nextStep?: string;
  nextStepDate?: string;
  jobDescription?: string;
}

export type ApplicationStatus = 
  | 'Applied' 
  | 'Screening' 
  | 'Interview' 
  | 'Technical' 
  | 'Final Round' 
  | 'Offer' 
  | 'Rejected' 
  | 'Withdrawn';

export interface FilterState {
  status: string;
  company: string;
  dateRange: {
    from: Date | undefined;
    to: Date | undefined;
  };
  search: string;
}
