
import { SearchIcon, FileText, Briefcase, GraduationCap, Target, TrendingUp, Award, Map } from 'lucide-react';
import { StepType, MilestoneType } from './types';

export const steps: StepType[] = [
  {
    id: 1,
    title: 'Assess Your Skills',
    description: 'Take our comprehensive assessment to identify your strengths, skills, and areas for growth.',
    icon: SearchIcon,
    color: 'text-jobonboard-blue',
    bgColor: 'bg-jobonboard-blue/10',
    borderColor: 'border-jobonboard-blue/20',
    detailedDescription: 'Our AI-powered assessment analyzes your current technical skills, soft skills, and experience to create a personalized career roadmap.',
    insights: ['Technical skill evaluation', 'Soft skills assessment', 'Experience mapping', 'Strengths identification'],
  },
  {
    id: 2,
    title: 'Build Your Resume',
    description: 'Create a tailored resume highlighting your relevant skills and experience for IT roles.',
    icon: FileText,
    color: 'text-jobonboard-purple',
    bgColor: 'bg-jobonboard-purple/10',
    borderColor: 'border-jobonboard-purple/20',
    detailedDescription: 'Craft a standout resume with our AI-assisted templates that emphasize the skills employers are looking for in the IT industry.',
    insights: ['Role-specific templates', 'Keyword optimization', 'ATS-friendly formatting', 'Professional review'],
  },
  {
    id: 3,
    title: 'Apply for Jobs',
    description: 'Access our curated job listings and receive personalized recommendations.',
    icon: Briefcase,
    color: 'text-jobonboard-green',
    bgColor: 'bg-jobonboard-green/10',
    borderColor: 'border-jobonboard-green/20',
    detailedDescription: 'Our platform matches you with relevant job opportunities based on your skills, experience, and career goals.',
    insights: ['Personalized job matches', 'Application tracking', 'Interview preparation', 'Salary insights'],
  },
  {
    id: 4,
    title: 'Upskill and Grow',
    description: 'Continue learning with courses and resources tailored to your career path.',
    icon: GraduationCap,
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-100',
    detailedDescription: 'Access industry-relevant courses, certifications, and resources to continuously improve your skills and advance in your career.',
    insights: ['Personalized learning paths', 'Industry certifications', 'Hands-on projects', 'Mentor guidance'],
  },
];

export const milestones: MilestoneType[] = [
  { title: 'Entry Level Position', icon: Target, color: 'text-blue-500' },
  { title: 'Mid-Level Role', icon: TrendingUp, color: 'text-purple-500' },
  { title: 'Senior Position', icon: Award, color: 'text-green-500' },
  { title: 'Leadership Role', icon: Map, color: 'text-amber-500' }
];
