
import { Mentor, CommunityTopic } from './types';

export const mentors: Mentor[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Senior Software Engineer',
    company: 'Google',
    expertise: ['Frontend Development', 'React', 'UI/UX'],
    yearsExperience: 8,
    rating: 4.9,
    reviews: 124,
    imgSrc: '/placeholder.svg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Data Science Lead',
    company: 'Microsoft',
    expertise: ['Machine Learning', 'Python', 'Data Visualization'],
    yearsExperience: 11,
    rating: 4.8,
    reviews: 87,
    imgSrc: '/placeholder.svg',
  },
  {
    id: 3,
    name: 'Priya Patel',
    role: 'Cybersecurity Expert',
    company: 'Amazon',
    expertise: ['Network Security', 'Threat Analysis', 'Compliance'],
    yearsExperience: 7,
    rating: 4.7,
    reviews: 62,
    imgSrc: '/placeholder.svg',
  },
];

export const communityTopics: CommunityTopic[] = [
  { title: 'Career transition strategies for non-CS majors', replies: 38, views: 1240 },
  { title: 'How to prepare for technical interviews in 2024', replies: 67, views: 2350 },
  { title: 'Which certifications are worth it for DevOps?', replies: 42, views: 1815 },
  { title: 'Balancing learning new technologies and job searching', replies: 29, views: 945 },
];
