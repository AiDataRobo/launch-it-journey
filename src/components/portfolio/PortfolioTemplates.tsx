
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PortfolioTemplates = () => {
  const { toast } = useToast();
  
  const templates = [
    {
      id: "modern",
      name: "Modern",
      thumbnail: "https://placehold.co/300x200/e9ecef/495057?text=Modern+Template",
      description: "Clean and contemporary design with a focus on visuals and minimal text.",
      industry: "Tech, Design, Marketing",
      color: "bg-gradient-to-r from-jobonboard-purple to-jobonboard-blue"
    },
    {
      id: "classic",
      name: "Classic",
      thumbnail: "https://placehold.co/300x200/e9ecef/495057?text=Classic+Template",
      description: "Timeless and professional layout suitable for traditional industries.",
      industry: "Finance, Law, Consulting",
      color: "bg-gradient-to-r from-jobonboard-blue to-jobonboard-green"
    },
    {
      id: "creative",
      name: "Creative",
      thumbnail: "https://placehold.co/300x200/e9ecef/495057?text=Creative+Template",
      description: "Bold and artistic design that showcases your creative projects.",
      industry: "Art, Photography, Film",
      color: "bg-gradient-to-r from-pink-500 to-orange-400"
    },
    {
      id: "minimalist",
      name: "Minimalist",
      thumbnail: "https://placehold.co/300x200/e9ecef/495057?text=Minimalist+Template",
      description: "Simple and elegant design with a focus on typography and whitespace.",
      industry: "All industries",
      color: "bg-gradient-to-r from-slate-500 to-slate-800"
    }
  ];

  const handleSelectTemplate = (templateId: string) => {
    toast({
      title: "Template selected",
      description: `You've selected the ${templateId} template. Start customizing it now!`,
    });
  };

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
    <div className="py-12 border-t">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-3 text-gradient-primary">Professional Templates</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose from our professionally designed templates optimized for different industries and career paths.
        </p>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {templates.map((template) => (
          <motion.div 
            key={template.id}
            variants={item}
            className="group"
          >
            <Card className="overflow-hidden border hover:shadow-lg transition-shadow">
              <div className={`h-2 ${template.color}`}></div>
              <div className="relative">
                <img 
                  src={template.thumbnail} 
                  alt={template.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button 
                    onClick={() => handleSelectTemplate(template.id)}
                    className="bg-white text-gray-800 hover:bg-gray-100"
                  >
                    Select Template
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">{template.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{template.description}</p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    Best for: {template.industry}
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PortfolioTemplates;
