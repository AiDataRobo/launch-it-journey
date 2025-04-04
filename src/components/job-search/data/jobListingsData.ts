
// Mock job listings - in a real application, this would come from an API
export interface JobListing {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  isRemote: boolean;
  experience: string;
  salary: string;
  posted: string;
  category: string;
  description: string;
  skills: string[];
  featured: boolean;
  urgent: boolean;
  fresherFriendly: boolean;
}

export const allJobListings: JobListing[] = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechGlobal Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    isRemote: false,
    experience: 'Senior',
    salary: '$120,000 - $150,000',
    posted: '2 days ago',
    category: 'Web Development',
    description: 'We are looking for a Senior Frontend Developer with extensive experience in React and TypeScript to join our product team. You will be responsible for building high-quality user interfaces and implementing new features.',
    skills: ['React', 'TypeScript', 'Tailwind CSS'],
    featured: true,
    urgent: false,
    fresherFriendly: false
  },
  {
    id: 2,
    title: 'UX/UI Designer',
    company: 'Creative Solutions',
    location: 'Remote',
    type: 'Contract',
    isRemote: true,
    experience: 'Mid',
    salary: '$90,000 - $110,000',
    posted: '1 week ago',
    category: 'Design',
    description: 'Creative Solutions is hiring a UX/UI Designer to create beautiful and functional interfaces for our clients. You will work closely with product managers and developers to deliver outstanding designs.',
    skills: ['Figma', 'User Research', 'Prototyping'],
    featured: false,
    urgent: true,
    fresherFriendly: false
  },
  {
    id: 3,
    title: 'Full Stack Engineer',
    company: 'StartUp Innovations',
    location: 'New York, NY',
    type: 'Full-time',
    isRemote: false,
    experience: 'Mid',
    salary: '$130,000 - $160,000',
    posted: '3 days ago',
    category: 'Web Development',
    description: 'As a Full Stack Engineer at StartUp Innovations, you will build and maintain our core product features. You will work across the entire stack, from database to frontend, delivering a seamless user experience.',
    skills: ['Node.js', 'React', 'MongoDB'],
    featured: true,
    urgent: false,
    fresherFriendly: false
  },
  {
    id: 4,
    title: 'Data Scientist',
    company: 'DataMind Analytics',
    location: 'Remote',
    type: 'Full-time',
    isRemote: true,
    experience: 'Senior',
    salary: '$140,000 - $180,000',
    posted: '5 days ago',
    category: 'Data Science',
    description: 'We are seeking a Data Scientist to analyze large datasets and build machine learning models to solve complex business problems. You will work with cross-functional teams to implement data-driven solutions.',
    skills: ['Python', 'TensorFlow', 'SQL'],
    featured: false,
    urgent: false,
    fresherFriendly: false
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    company: 'CloudScale Systems',
    location: 'Chicago, IL',
    type: 'Full-time',
    isRemote: false,
    experience: 'Mid',
    salary: '$110,000 - $140,000',
    posted: '1 week ago',
    category: 'DevOps',
    description: 'Join our team as a DevOps Engineer to build and maintain our cloud infrastructure. You will work on automating deployment processes and ensuring system reliability and scalability.',
    skills: ['AWS', 'Kubernetes', 'Terraform'],
    featured: false,
    urgent: false,
    fresherFriendly: false
  },
  {
    id: 6,
    title: 'Product Manager Intern',
    company: 'Future Finance',
    location: 'Boston, MA',
    type: 'Internship',
    isRemote: false,
    experience: 'Fresher',
    salary: '$25 - $30 per hour',
    posted: '2 days ago',
    category: 'Product Management',
    description: 'Gain valuable experience as a Product Manager Intern. You will assist in product development, conduct market research, and work closely with design and engineering teams.',
    skills: ['Market Research', 'Product Strategy', 'Agile'],
    featured: false,
    urgent: false,
    fresherFriendly: true
  },
  {
    id: 7,
    title: 'Junior Software Developer',
    company: 'HealthTech Innovations',
    location: 'Remote',
    type: 'Part-time',
    isRemote: true,
    experience: 'Junior',
    salary: '$70,000 - $90,000',
    posted: '4 days ago',
    category: 'Web Development',
    description: 'Great opportunity for junior developers to join a growing health tech company. You will work on feature development and bug fixes for our telehealth platform.',
    skills: ['JavaScript', 'React', 'HTML/CSS'],
    featured: false,
    urgent: true,
    fresherFriendly: true
  },
  {
    id: 8,
    title: 'Sustainability Consultant',
    company: 'GreenEarth Solutions',
    location: 'Seattle, WA',
    type: 'Freelance',
    isRemote: true,
    experience: 'Mid',
    salary: 'Project-based',
    posted: '1 week ago',
    category: 'Consulting',
    description: 'We are looking for a Sustainability Consultant to work on environmental impact assessment projects. You will help clients develop and implement sustainability strategies.',
    skills: ['Environmental Science', 'Data Analysis', 'Reporting'],
    featured: false,
    urgent: false,
    fresherFriendly: false
  }
];
