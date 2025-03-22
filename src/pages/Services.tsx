
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Scan, Linkedin, Book, Users, Mic2, Award, Briefcase, Laptop, Eye, Network, Share2,
  LayoutDashboard, UserCog, DollarSign, MapPin, Globe, UserPlus, Search, Palette, Shield, UserCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const serviceCategories = [
  {
    id: 'prepare-yourself',
    title: 'Prepare Yourself',
    subtitle: 'Job Readiness',
    description: 'Get the skills and tools you need to stand out in the job market',
    services: [
      {
        title: 'AI Resume Scanner',
        description: 'Get instant feedback on your resume with AI-powered suggestions',
        icon: Scan,
        isPremium: false,
        href: '/services/ai-resume-scanner',
      },
      {
        title: 'LinkedIn Profile Optimization',
        description: 'Improve your LinkedIn profile to attract recruiters',
        icon: Linkedin,
        isPremium: false,
        href: '/services/linkedin-optimization',
      },
      {
        title: 'Personal Branding Guide',
        description: 'Learn how to showcase your skills and achievements online',
        icon: Book,
        isPremium: false,
        href: '/services/personal-branding',
      },
      {
        title: 'Soft Skills Training',
        description: 'Courses on communication, leadership, and teamwork',
        icon: Users,
        isPremium: false,
        href: '/services/soft-skills',
      },
      {
        title: 'Mock Interviews (AI & Human)',
        description: 'Practice with AI or book a session with a real expert',
        icon: Mic2,
        isPremium: false,
        href: '/services/mock-interviews',
      },
      {
        title: 'Certifications & Skill Tests',
        description: 'Validate your skills with industry-recognized tests',
        icon: Award,
        isPremium: false,
        href: '/services/certifications',
      },
    ],
  },
  {
    id: 'find-a-job',
    title: 'Find a Job',
    subtitle: 'Job Search & Networking',
    description: 'Discover opportunities and connect with employers',
    services: [
      {
        title: 'Internship & Apprenticeship Finder',
        description: 'Get work experience before landing a job',
        icon: Briefcase,
        isPremium: false,
        href: '/services/internships',
      },
      {
        title: 'Freelancing & Side Gigs',
        description: 'Find remote jobs and freelance opportunities',
        icon: Laptop,
        isPremium: false,
        href: '/services/freelancing',
      },
      {
        title: 'Hidden Job Market',
        description: 'Get access to jobs that aren\'t publicly listed',
        icon: Eye,
        isPremium: false,
        href: '/services/hidden-jobs',
      },
      {
        title: 'Networking Events & Webinars',
        description: 'Join industry events, connect with professionals',
        icon: Network,
        isPremium: false,
        href: '/services/networking-events',
      },
      {
        title: 'Referral Program',
        description: 'Get job referrals from professionals in your industry',
        icon: Share2,
        isPremium: false,
        href: '/services/referrals',
      },
    ],
  },
  {
    id: 'grow-your-career',
    title: 'Grow Your Career',
    subtitle: 'Career Growth',
    description: 'Take your career to the next level with expert guidance',
    services: [
      {
        title: 'Workplace Success Guide',
        description: 'Learn strategies for excelling in your job',
        icon: LayoutDashboard,
        isPremium: false,
        href: '/services/workplace-success',
      },
      {
        title: 'Leadership & Management Training',
        description: 'Transition into management roles smoothly',
        icon: UserCog,
        isPremium: false,
        href: '/services/leadership-training',
      },
      {
        title: 'Salary Negotiation Coach',
        description: 'Get expert help in securing the best salary package',
        icon: DollarSign,
        isPremium: false,
        href: '/services/salary-negotiation',
      },
      {
        title: 'Career Change Roadmap',
        description: 'Plan a smooth transition into a new industry',
        icon: MapPin,
        isPremium: false,
        href: '/services/career-change',
      },
      {
        title: 'Remote Work Hub',
        description: 'Find remote job opportunities and resources',
        icon: Globe,
        isPremium: false,
        href: '/services/remote-work',
      },
    ],
  },
  {
    id: 'premium-services',
    title: 'Exclusive Premium Services',
    subtitle: 'Premium Features',
    description: 'Unlock advanced career tools and personalized guidance',
    services: [
      {
        title: '1-on-1 Career Coaching',
        description: 'Personalized coaching sessions with career experts',
        icon: UserPlus,
        isPremium: true,
        href: '/services/career-coaching',
      },
      {
        title: 'Personalized Job Search Assistant',
        description: 'A dedicated expert to help you find a job',
        icon: Search,
        isPremium: true,
        href: '/services/job-search-assistant',
      },
      {
        title: 'Portfolio Builder',
        description: 'Create an online portfolio showcasing your best work',
        icon: Palette,
        isPremium: true,
        href: '/services/portfolio-builder',
      },
      {
        title: 'Interview Guarantee Program',
        description: 'A premium service where we work until you get an interview',
        icon: Shield,
        isPremium: true,
        href: '/services/interview-guarantee',
      },
      {
        title: 'Industry Mentorship Program',
        description: 'Connect with experienced mentors from top companies',
        icon: UserCheck,
        isPremium: true,
        href: '/services/mentorship',
      },
    ],
  },
];

const ServiceHero = () => {
  return (
    <section className="pt-28 pb-16 px-4 md:px-0">
      <div className="container mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Career Services Designed for <span className="text-gradient-primary">Your Success</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Comprehensive tools and resources to help you prepare, find, and excel in your dream career
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-jobonboard-blue hover:bg-jobonboard-blue/90">
              Explore All Services
            </Button>
            <Button size="lg" variant="outline">
              View Premium Offers
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-md transition-shadow group">
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <div className={`p-2 rounded-lg ${service.isPremium ? 'bg-jobonboard-purple/10' : 'bg-jobonboard-blue/10'}`}>
              <service.icon className={`h-6 w-6 ${service.isPremium ? 'text-jobonboard-purple' : 'text-jobonboard-blue'}`} />
            </div>
            {service.isPremium && (
              <span className="px-2 py-1 bg-jobonboard-purple/10 text-jobonboard-purple text-xs font-medium rounded-full">
                Premium
              </span>
            )}
          </div>
          <CardTitle className="text-lg mt-3 group-hover:text-jobonboard-blue transition-colors">
            {service.title}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {service.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline" size="sm" className="w-full" asChild>
            <Link to={service.href || "#"}>Learn More</Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const CategorySection = ({ category, index }) => {
  return (
    <section id={category.id} className="py-16 px-4 md:px-0">
      <div className="container mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-4">
            <span className="text-sm font-medium">{category.subtitle}</span>
          </div>
          <h2 className="text-3xl font-bold mb-3">{category.title}</h2>
          <p className="text-lg text-muted-foreground">{category.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.services.map((service, serviceIndex) => (
            <ServiceCard key={service.title} service={service} index={serviceIndex} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCategories = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center">
            <TabsList className="mb-8">
              <TabsTrigger value="all">All Services</TabsTrigger>
              {serviceCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="all">
            {serviceCategories.map((category, index) => (
              <CategorySection key={category.id} category={category} index={index} />
            ))}
          </TabsContent>

          {serviceCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <CategorySection category={category} index={0} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

const CallToAction = () => {
  return (
    <section className="py-20 px-4 md:px-0 bg-jobonboard-purple/5">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to accelerate your career?</h2>
          <p className="text-lg mb-8 text-muted-foreground">
            Sign up now to access all our services and take the first step towards your dream career.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-jobonboard-purple hover:bg-jobonboard-purple/90" asChild>
              <Link to="/signup">Get Started Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact-us">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Handle hash links for smooth scrolling
    setTimeout(() => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <ServiceHero />
        <ServiceCategories />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
