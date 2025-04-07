
export type ReferralFormValues = {
  reason: string;
  resume: FileList | null;
  additionalInfo: string;
};

export interface JobDetails {
  id: string;
  title: string;
  company: string;
}
