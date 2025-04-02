
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import PortfolioLinkedInImport from '@/components/portfolio/PortfolioLinkedInImport';
import PortfolioDragDrop from '@/components/portfolio/PortfolioDragDrop';
import PortfolioFeatures from '@/components/portfolio/PortfolioFeatures';
import PortfolioTemplates from '@/components/portfolio/PortfolioTemplates';
import { AlertCircle, AlertTriangle, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PortfolioGenerator = () => {
  const [activeTab, setActiveTab] = useState("linkedin");
  const { toast } = useToast();
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const handleStartFromScratch = () => {
    setActiveTab("builder");
    toast({
      title: "Builder mode activated",
      description: "You can now start building your portfolio from scratch.",
      variant: "default",
    });
  };

  return (
    <DashboardLayout>
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <motion.div 
          className="mb-8 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-4xl font-bold tracking-tight text-gradient-primary mb-3">
            Portfolio Generator
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Create a professional portfolio website in minutes. Import from LinkedIn or build from scratch with our drag and drop editor.
          </p>
        </motion.div>

        <Tabs defaultValue={activeTab} onValueChange={handleTabChange} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="linkedin" className="text-base py-3">
                LinkedIn Import
              </TabsTrigger>
              <TabsTrigger value="builder" className="text-base py-3">
                Builder
              </TabsTrigger>
            </TabsList>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: activeTab === "linkedin" ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <TabsContent value="linkedin" className="mt-0">
              <Card className="border-0 shadow-sm bg-card">
                <CardContent className="p-6">
                  <PortfolioLinkedInImport onStartFromScratch={handleStartFromScratch} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="builder" className="mt-0">
              <Card className="border-0 shadow-sm bg-card">
                <CardContent className="p-6">
                  <PortfolioDragDrop />
                </CardContent>
              </Card>
            </TabsContent>
          </motion.div>
        </Tabs>

        <PortfolioTemplates />
        <PortfolioFeatures />
      </div>
    </DashboardLayout>
  );
};

export default PortfolioGenerator;
