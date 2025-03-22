
import React from 'react';
import { ArrowRight, FileSparkle, Sparkles, BookOpen, CheckCircle, Zap, BarChart3, Diamond, Award, Search, List, Users, DollarSign, Briefcase, HelpCircle, GitCommit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import NavbarWrap from '@/components/NavbarWrap';
import Footer from '@/components/Footer';

const Products = () => {
  // Product categories with their respective items
  const productCategories = [
    {
      id: 'resume-tools',
      title: 'Resume & Profile Enhancement Tools',
      description: 'Enhance your professional presence with our cutting-edge tools designed to make you stand out to employers.',
      bgColor: 'bg-jobonboard-blue/5',
      iconColor: 'text-jobonboard-blue',
      icon: FileSparkle,
      products: [
        {
          id: 'ai-resume-scanner',
          title: 'AI Resume Scanner',
          description: 'Get instant AI-powered feedback on your resume to improve your chances of landing interviews.',
          icon: Sparkles,
          cta: 'Scan My Resume',
          color: 'text-jobonboard-blue',
          bgColor: 'bg-jobonboard-blue/10',
          premium: false,
        },
        {
          id: 'resume-builder',
          title: 'Resume Builder',
          description: 'Create professional resumes with our easy-to-use builder featuring ATS-friendly templates.',
          icon: FileSparkle,
          cta: 'Build My Resume',
          color: 'text-jobonboard-blue',
          bgColor: 'bg-jobonboard-blue/10',
          premium: false,
        },
        {
          id: 'linkedin-optimizer',
          title: 'LinkedIn Profile Optimizer',
          description: 'Improve your LinkedIn profile visibility with our optimization tool designed for recruiter searches.',
          icon: Users,
          cta: 'Optimize My Profile',
          color: 'text-jobonboard-blue',
          bgColor: 'bg-jobonboard-blue/10',
          premium: false,
        },
        {
          id: 'portfolio-builder',
          title: 'Portfolio Builder',
          description: 'Showcase your work with a professional online portfolio that highlights your skills and achievements.',
          icon: Briefcase,
          cta: 'Create Portfolio',
          color: 'text-jobonboard-blue',
          bgColor: 'bg-jobonboard-blue/10',
          premium: false,
        },
      ],
    },
    {
      id: 'job-search',
      title: 'Job Search & Career Assistance',
      description: 'Find the perfect job opportunities and get expert assistance in your career journey.',
      bgColor: 'bg-jobonboard-green/5',
      iconColor: 'text-jobonboard-green',
      icon: Search,
      products: [
        {
          id: 'job-tracker',
          title: 'Job Tracker Tool',
          description: 'Organize and track all your job applications in one place, never miss a follow-up again.',
          icon: List,
          cta: 'Start Tracking',
          color: 'text-jobonboard-green',
          bgColor: 'bg-jobonboard-green/10',
          premium: false,
        },
        {
          id: 'hidden-job-market',
          title: 'Hidden Job Market Access',
          description: 'Get exclusive access to unlisted job opportunities from our network of partner companies.',
          icon: HelpCircle,
          cta: 'Explore Hidden Jobs',
          color: 'text-jobonboard-green',
          bgColor: 'bg-jobonboard-green/10',
          premium: false,
        },
        {
          id: 'freelance-finder',
          title: 'Freelance & Side Gig Finder',
          description: 'Discover remote and freelance work opportunities to supplement your income or transition careers.',
          icon: GitCommit,
          cta: 'Find Gigs',
          color: 'text-jobonboard-green',
          bgColor: 'bg-jobonboard-green/10',
          premium: false,
        },
        {
          id: 'job-search-assistant',
          title: 'Personalized Job Search Assistant',
          description: 'Get customized guidance from experts to find the right job that aligns with your career goals.',
          icon: Users,
          cta: 'Get Assistance',
          color: 'text-jobonboard-green',
          bgColor: 'bg-jobonboard-green/10',
          premium: false,
        },
      ],
    },
    {
      id: 'interview-tools',
      title: 'Interview & Career Growth Tools',
      description: 'Prepare for interviews and develop the skills needed to grow in your career.',
      bgColor: 'bg-jobonboard-purple/5',
      iconColor: 'text-jobonboard-purple',
      icon: BookOpen,
      products: [
        {
          id: 'ai-mock-interview',
          title: 'AI Mock Interview Simulator',
          description: 'Practice interviews with our AI-powered simulator and get instant feedback to improve.',
          icon: Sparkles,
          cta: 'Start Practice',
          color: 'text-jobonboard-purple',
          bgColor: 'bg-jobonboard-purple/10',
          premium: false,
        },
        {
          id: 'interview-coaching',
          title: '1-on-1 Interview Coaching',
          description: 'Book personalized coaching sessions with industry professionals to prepare for specific roles.',
          icon: Users,
          cta: 'Book Session',
          color: 'text-jobonboard-purple',
          bgColor: 'bg-jobonboard-purple/10',
          premium: false,
        },
        {
          id: 'salary-negotiation',
          title: 'Salary Negotiation Toolkit',
          description: 'Learn effective strategies for negotiating better compensation packages with our comprehensive guide.',
          icon: DollarSign,
          cta: 'Access Toolkit',
          color: 'text-jobonboard-purple',
          bgColor: 'bg-jobonboard-purple/10',
          premium: false,
        },
        {
          id: 'soft-skills',
          title: 'Soft Skills Training Hub',
          description: 'Develop essential workplace skills with our courses on communication, leadership, and teamwork.',
          icon: Zap,
          cta: 'Explore Courses',
          color: 'text-jobonboard-purple',
          bgColor: 'bg-jobonboard-purple/10',
          premium: false,
        },
      ],
    },
    {
      id: 'premium-services',
      title: 'Exclusive Premium Offerings',
      description: 'Take your career to the next level with our exclusive premium services designed for ambitious professionals.',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-500',
      icon: Diamond,
      products: [
        {
          id: 'interview-guarantee',
          title: 'Interview Guarantee Program',
          description: 'Our premium service that works with you until you successfully land interviews at your target companies.',
          icon: CheckCircle,
          cta: 'Learn More',
          color: 'text-amber-500',
          bgColor: 'bg-amber-50',
          premium: true,
        },
        {
          id: 'career-growth',
          title: 'Career Growth Membership',
          description: 'A monthly subscription that provides exclusive coaching resources and priority support services.',
          icon: BarChart3,
          cta: 'Join Now',
          color: 'text-amber-500',
          bgColor: 'bg-amber-50',
          premium: true,
        },
        {
          id: 'mentorship-program',
          title: 'Industry Mentorship Program',
          description: 'Connect with experienced mentors from top companies for guidance and industry insights.',
          icon: Award,
          cta: 'Find a Mentor',
          color: 'text-amber-500',
          bgColor: 'bg-amber-50',
          premium: true,
        },
        {
          id: 'referral-network',
          title: 'Job Referral Network',
          description: 'Gain access to our exclusive network of professionals who can refer you to opportunities at their companies.',
          icon: Users,
          cta: 'Join Network',
          color: 'text-amber-500',
          bgColor: 'bg-amber-50',
          premium: true,
        },
      ],
    },
  ];

  return (
    <>
      <NavbarWrap />
      <main className="pt-24 pb-16">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
          <div className="container px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Career Acceleration Products</h1>
              <p className="text-lg text-gray-600 mb-8">
                Professional tools and services designed to help you prepare, find opportunities, and grow in your career
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-jobonboard-purple hover:bg-jobonboard-purple-light">
                  Explore All Products
                </Button>
                <Button size="lg" variant="outline">
                  View Pricing
                </Button>
              </div>
            </div>
            
            {/* Quick navigation */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {productCategories.map((category) => (
                <a 
                  key={category.id} 
                  href={`#${category.id}`}
                  className="flex items-center p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all group"
                >
                  <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <category.icon className={`${category.iconColor}`} size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 group-hover:text-jobonboard-purple transition-colors">{category.title.split(' & ')[0]}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>View products</span>
                      <ArrowRight className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Products by category */}
        {productCategories.map((category) => (
          <section 
            key={category.id} 
            id={category.id} 
            className="py-16 relative overflow-hidden"
          >
            {/* Background decorations */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-70"></div>
            
            <div className="container px-6 mx-auto relative z-10">
              <div className="max-w-3xl mb-12">
                <div className={`inline-block px-4 py-1 rounded-full ${category.bgColor} ${category.iconColor} text-sm font-medium mb-4`}>
                  {category.id === 'premium-services' ? 'Premium Offerings' : category.title.split(' & ')[0]}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{category.title}</h2>
                <p className="text-lg text-gray-600">
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.products.map((product) => (
                  <Card 
                    key={product.id} 
                    className={`border ${product.premium ? 'border-amber-200' : 'border-gray-100'} hover:shadow-md transition-all`}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center mb-3">
                        <div className={`w-10 h-10 ${product.bgColor} rounded-lg flex items-center justify-center mr-3`}>
                          <product.icon className={product.color} size={20} />
                        </div>
                        {product.premium && (
                          <span className="px-2 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full">
                            Premium
                          </span>
                        )}
                      </div>
                      <CardTitle className="text-xl">{product.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 min-h-[80px]">
                        {product.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className={`w-full ${
                          product.premium 
                            ? 'bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500' 
                            : product.color === 'text-jobonboard-blue' 
                              ? 'bg-jobonboard-blue hover:bg-jobonboard-blue-light' 
                              : product.color === 'text-jobonboard-green' 
                                ? 'bg-jobonboard-green hover:bg-jobonboard-green-light' 
                                : 'bg-jobonboard-purple hover:bg-jobonboard-purple-light'
                        }`}
                      >
                        {product.cta}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Call to action section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to accelerate your career?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Start with our free tools or upgrade to premium services for personalized guidance and exclusive features.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-jobonboard-purple hover:bg-jobonboard-purple-light">
                  Get Started Free
                </Button>
                <Button size="lg" variant="outline">
                  Explore Premium
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Products;
