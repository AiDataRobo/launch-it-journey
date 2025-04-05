
import { ApplicationData } from '../types';
import { companyLogos } from '../../job-search/data/companyLogos';

// Create placeholder logos for companies not in companyLogos
const placeholderLogos = {
  "Google": "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
  "Apple": "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
  "Microsoft": "https://images.unsplash.com/photo-1642132652806-8aa05081455c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
  "Amazon": "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
  "Netflix": "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
  "Meta": "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
  "Twitter": "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
  "Airbnb": "https://images.unsplash.com/photo-1580129958560-fefe3becbfd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
};

export const initialApplications: ApplicationData[] = [
  {
    id: 1,
    jobTitle: "Senior Frontend Developer",
    company: "Google",
    status: "Interview",
    appliedDate: "2025-03-20",
    notes: "Had a great phone screening. Technical interview scheduled for next week.",
    logo: placeholderLogos.Google,
    location: "Mountain View, CA (Remote)",
    salary: "$140,000 - $170,000",
    nextStep: "Technical Interview",
    nextStepDate: "2025-04-10"
  },
  {
    id: 2,
    jobTitle: "UX Designer",
    company: "Apple",
    status: "Applied",
    appliedDate: "2025-03-28",
    notes: "Applied via company website. Waiting to hear back.",
    logo: placeholderLogos.Apple,
    location: "Cupertino, CA",
    salary: "$120,000 - $150,000"
  },
  {
    id: 3,
    jobTitle: "Product Manager",
    company: "Microsoft",
    status: "Rejected",
    appliedDate: "2025-03-15",
    notes: "Received rejection email. Position was filled internally.",
    logo: placeholderLogos.Microsoft,
    location: "Redmond, WA (Hybrid)",
    salary: "$130,000 - $160,000"
  },
  {
    id: 4,
    jobTitle: "Full Stack Engineer",
    company: "Amazon",
    status: "Final Round",
    appliedDate: "2025-03-10",
    notes: "Completed 4 interviews. Final round with director scheduled.",
    logo: placeholderLogos.Amazon,
    location: "Seattle, WA",
    salary: "$145,000 - $175,000",
    nextStep: "Final Interview",
    nextStepDate: "2025-04-08"
  },
  {
    id: 5,
    jobTitle: "Data Analyst",
    company: "Netflix",
    status: "Technical",
    appliedDate: "2025-03-22",
    notes: "Passed initial screening. Technical assessment sent via email.",
    logo: placeholderLogos.Netflix,
    location: "Los Gatos, CA (Remote)",
    salary: "$110,000 - $130,000",
    nextStep: "Submit Technical Assessment",
    nextStepDate: "2025-04-05"
  },
  {
    id: 6,
    jobTitle: "DevOps Engineer",
    company: "Meta",
    status: "Offer",
    appliedDate: "2025-02-28",
    notes: "Received offer! Negotiating salary and benefits.",
    logo: placeholderLogos.Meta,
    location: "Menlo Park, CA (Hybrid)",
    salary: "$160,000 - $190,000",
    nextStep: "Respond to Offer",
    nextStepDate: "2025-04-07"
  },
  {
    id: 7,
    jobTitle: "Marketing Specialist",
    company: "Twitter",
    status: "Screening",
    appliedDate: "2025-03-25",
    notes: "HR reached out to schedule initial screening call.",
    logo: placeholderLogos.Twitter,
    location: "San Francisco, CA",
    salary: "$90,000 - $110,000",
    nextStep: "Phone Screening",
    nextStepDate: "2025-04-06"
  },
  {
    id: 8,
    jobTitle: "Backend Developer",
    company: "Airbnb",
    status: "Withdrawn",
    appliedDate: "2025-03-05",
    notes: "Withdrew application after accepting another offer.",
    logo: placeholderLogos.Airbnb,
    location: "San Francisco, CA (Remote)",
    salary: "$130,000 - $155,000"
  }
];

export const applicationStatusOptions = [
  { value: "Applied", label: "Applied" },
  { value: "Screening", label: "Screening" },
  { value: "Interview", label: "Interview" },
  { value: "Technical", label: "Technical" },
  { value: "Final Round", label: "Final Round" },
  { value: "Offer", label: "Offer" },
  { value: "Rejected", label: "Rejected" },
  { value: "Withdrawn", label: "Withdrawn" }
];

export const statusColors: Record<string, { bg: string, text: string, border: string }> = {
  "Applied": { bg: "bg-blue-100", text: "text-blue-800", border: "border-blue-200" },
  "Screening": { bg: "bg-purple-100", text: "text-purple-800", border: "border-purple-200" },
  "Interview": { bg: "bg-amber-100", text: "text-amber-800", border: "border-amber-200" },
  "Technical": { bg: "bg-orange-100", text: "text-orange-800", border: "border-orange-200" },
  "Final Round": { bg: "bg-indigo-100", text: "text-indigo-800", border: "border-indigo-200" },
  "Offer": { bg: "bg-green-100", text: "text-green-800", border: "border-green-200" },
  "Rejected": { bg: "bg-red-100", text: "text-red-800", border: "border-red-200" },
  "Withdrawn": { bg: "bg-gray-100", text: "text-gray-800", border: "border-gray-200" }
};

export const getApplicationProgressValue = (status: string): number => {
  const progressMap: Record<string, number> = {
    "Applied": 10,
    "Screening": 25,
    "Interview": 40,
    "Technical": 55, 
    "Final Round": 70,
    "Offer": 100,
    "Rejected": 100,
    "Withdrawn": 100
  };
  
  return progressMap[status] || 0;
};
