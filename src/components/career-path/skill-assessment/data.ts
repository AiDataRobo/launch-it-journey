
export const skillCategories = [
  {
    name: 'Programming & Web',
    skills: [
      { name: 'JavaScript', level: 65 },
      { name: 'HTML/CSS', level: 80 },
      { name: 'React', level: 60 },
      { name: 'Python', level: 40 },
    ]
  },
  {
    name: 'Data & Analytics',
    skills: [
      { name: 'SQL', level: 55 },
      { name: 'Data Visualization', level: 30 },
      { name: 'Statistical Analysis', level: 25 },
      { name: 'Machine Learning', level: 15 },
    ]
  },
  {
    name: 'DevOps & Infrastructure',
    skills: [
      { name: 'Git/Version Control', level: 75 },
      { name: 'Docker', level: 30 },
      { name: 'CI/CD', level: 20 },
      { name: 'Cloud Services (AWS/Azure)', level: 45 },
    ]
  },
];

// Using the exact string literals from the Certification type
export const certifications = [
  { name: 'AWS Cloud Practitioner', status: 'completed' as const, date: 'Jun 2023' },
  { name: 'JavaScript Algorithms & Data Structures', status: 'completed' as const, date: 'Mar 2023' },
  { name: 'React Developer', status: 'in-progress' as const, progress: 65 },
  { name: 'Full Stack Web Development', status: 'recommended' as const },
];

export const nextStepsRecommendations = [
  'Strengthen your Python skills',
  'Learn basic machine learning concepts',
  'Practice cloud deployment with AWS'
];
