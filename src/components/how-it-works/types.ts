
import { LucideIcon } from 'lucide-react';

export interface StepType {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  borderColor: string;
  detailedDescription: string;
  insights: string[];
}

export interface MilestoneType {
  title: string;
  icon: LucideIcon;
  color: string;
}
