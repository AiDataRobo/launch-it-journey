export interface JobReferralListing {
  id: number;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  type: string;
  tags: string[];
  postedDate: string;
  urgency: 'Low' | 'Medium' | 'High';
  referralCount: number;
  description: string;
  requirements: string[];
}

export interface MyReferral {
  id: number;
  jobTitle: string;
  company: string;
  requestedDate: string;
  status: 'Pending' | 'Accepted' | 'Rejected' | 'Expired';
  referrer?: string;
  feedback?: string;
  reason: string;
}

// Mock data for development/fallback purposes
export const jobReferralListings: JobReferralListing[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA (Remote)",
    type: "Full-time",
    tags: ["React", "TypeScript", "UI/UX"],
    postedDate: "2 days ago",
    urgency: "High",
    referralCount: 5,
    description: "We're looking for a skilled Frontend Developer to join our growing team.",
    requirements: ["5+ years of experience", "Strong React skills", "TypeScript proficiency"]
  },
  {
    id: 2,
    title: "DevOps Engineer",
    company: "CloudSystems",
    location: "Austin, TX (Hybrid)",
    type: "Full-time",
    tags: ["AWS", "Kubernetes", "Docker"],
    postedDate: "1 week ago",
    urgency: "Medium",
    referralCount: 3,
    description: "Join our DevOps team to build and maintain our cloud infrastructure.",
    requirements: ["3+ years of DevOps experience", "AWS certification", "CI/CD expertise"]
  },
  {
    id: 3,
    title: "Product Manager",
    company: "InnovateTech",
    location: "New York, NY (On-site)",
    type: "Full-time",
    tags: ["Product Strategy", "Agile", "B2B"],
    postedDate: "3 days ago",
    urgency: "Medium",
    referralCount: 4,
    description: "Lead product development for our B2B SaaS platform.",
    requirements: ["4+ years in product management", "B2B SaaS experience", "Technical background"]
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "DataInsights",
    location: "Remote",
    type: "Full-time",
    tags: ["Python", "Machine Learning", "SQL"],
    postedDate: "5 days ago",
    urgency: "Low",
    referralCount: 2,
    description: "Build machine learning models to derive insights from our data.",
    requirements: ["MS or PhD in related field", "3+ years of experience", "Python expertise"]
  },
  {
    id: 5,
    title: "UX/UI Designer",
    company: "DesignMasters",
    location: "Seattle, WA (Hybrid)",
    type: "Full-time",
    tags: ["Figma", "User Research", "Prototyping"],
    postedDate: "1 day ago",
    urgency: "High",
    referralCount: 6,
    description: "Design intuitive and engaging user interfaces for our products.",
    requirements: ["Portfolio demonstrating UI/UX skills", "3+ years of experience", "User research experience"]
  },
  {
    id: 6,
    title: "Backend Developer",
    company: "ServerSystems",
    location: "Chicago, IL (Remote)",
    type: "Contract",
    tags: ["Node.js", "Express", "MongoDB"],
    postedDate: "2 weeks ago",
    urgency: "Low",
    referralCount: 3,
    description: "Develop and maintain backend services for our web applications.",
    requirements: ["3+ years of backend development", "Node.js expertise", "Database design skills"]
  }
];

// Mock data for development/fallback purposes
export const myReferrals: MyReferral[] = [
  {
    id: 101,
    jobTitle: "Senior Frontend Developer",
    company: "TechCorp",
    requestedDate: "2023-10-15",
    status: "Accepted",
    referrer: "John Smith",
    feedback: "Great fit for our team! I've submitted your referral to the hiring manager.",
    reason: "I have 6 years of experience working with React and TypeScript in enterprise applications. I've led frontend development for two major projects and have a strong background in UI/UX collaboration."
  },
  {
    id: 102,
    jobTitle: "Data Engineer",
    company: "DataStream",
    requestedDate: "2023-10-10",
    status: "Pending",
    reason: "I have extensive experience with data pipeline development and have worked with similar tech stacks. I'm particularly interested in the machine learning integration aspects of this role."
  },
  {
    id: 103,
    jobTitle: "Product Designer",
    company: "DesignHub",
    requestedDate: "2023-09-28",
    status: "Rejected",
    feedback: "Thank you for your interest. While your skills are impressive, we're looking for candidates with more experience in B2B product design.",
    reason: "I have 3 years of product design experience with a focus on user-centered design principles. I've worked on multiple consumer applications and am looking to apply those skills in a new domain."
  },
  {
    id: 104,
    jobTitle: "DevOps Engineer",
    company: "CloudSystems",
    requestedDate: "2023-09-05",
    status: "Expired",
    reason: "I have extensive experience with AWS, Kubernetes, and Docker. I've implemented CI/CD pipelines for multiple organizations and am certified in cloud technologies."
  }
];
