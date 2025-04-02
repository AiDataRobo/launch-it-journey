
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, Download, Globe, BarChart, Search, 
  FileCheck, Rocket, Palette, Lock, CloudUpload
} from 'lucide-react';

const PortfolioFeatures = () => {
  const features = [
    {
      icon: <Eye />,
      title: "Live Preview",
      description: "See changes in real-time as you build your portfolio."
    },
    {
      icon: <Download />,
      title: "PDF Export",
      description: "Download your portfolio as a PDF for job applications."
    },
    {
      icon: <Globe />,
      title: "Custom Domain",
      description: "Connect your own domain or use our free subdomain."
    },
    {
      icon: <BarChart />,
      title: "Analytics",
      description: "Track visits and engagement on your portfolio."
    },
    {
      icon: <Search />,
      title: "SEO Optimization",
      description: "Improve your visibility in search engines."
    },
    {
      icon: <FileCheck />,
      title: "ATS Friendly",
      description: "Ensure your portfolio works with ATS systems."
    },
    {
      icon: <Rocket />,
      title: "AI Suggestions",
      description: "Get AI-powered recommendations to improve your portfolio."
    },
    {
      icon: <Palette />,
      title: "Custom Styling",
      description: "Personalize colors, fonts, and layouts to match your brand."
    },
    {
      icon: <Lock />,
      title: "Privacy Controls",
      description: "Choose what information to make public or private."
    },
    {
      icon: <CloudUpload />,
      title: "Cloud Storage",
      description: "Your portfolio is securely stored in the cloud."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <div className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-3 text-gradient-primary">Advanced Portfolio Features</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our portfolio generator includes powerful features to help you stand out from the crowd and showcase your skills effectively.
        </p>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            className="bg-white border rounded-lg p-5 hover:shadow-md transition-shadow text-center"
            variants={item}
          >
            <div className="rounded-full bg-jobonboard-purple/10 p-3 inline-flex mb-4">
              <div className="text-jobonboard-purple">
                {feature.icon}
              </div>
            </div>
            <h3 className="font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PortfolioFeatures;
