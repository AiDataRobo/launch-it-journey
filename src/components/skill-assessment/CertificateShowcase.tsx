
import React from 'react';
import { motion } from 'framer-motion';
import { Award, FileText, Linkedin, ExternalLink, User, CheckCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CertificateShowcase = () => {
  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Earn Recognized Certificates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stand out with JobOnboard certificates that verify your technical skills to potential employers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white shadow-xl rounded-lg border-8 border-double border-gray-100 p-8 relative transform rotate-2 z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif font-bold text-jobonboard-purple mb-2">Certificate of Excellence</h3>
                <p className="text-gray-500 text-sm">This certifies that</p>
                <p className="text-xl font-medium my-4">Sarah Johnson</p>
                <p className="text-gray-500 text-sm mb-4">has successfully completed</p>
                <h4 className="text-lg font-bold">React & Frontend Development</h4>
                <p className="text-jobonboard-purple font-medium">with a score of 92%</p>
                
                <div className="my-6 flex justify-center">
                  <div className="h-[1px] w-32 bg-gray-300"></div>
                </div>
                
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">David Chen</p>
                    <p className="text-xs text-gray-500">Lead Instructor</p>
                  </div>
                  <div>
                    <p className="font-medium">March 15, 2025</p>
                    <p className="text-xs text-gray-500">Date of Completion</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-3 right-3">
                <Award className="w-12 h-12 text-jobonboard-purple/10" />
              </div>
            </div>
            
            <div className="absolute top-6 left-6 bg-white shadow-xl rounded-lg border-8 border-double border-gray-100 p-8 transform -rotate-3 z-0">
              <div className="text-center opacity-20">
                <h3 className="text-2xl font-serif font-bold mb-2">Certificate of Excellence</h3>
                <p className="text-gray-500 text-sm">This certifies that</p>
                <p className="text-xl font-medium my-4">Mark Williams</p>
                <p className="text-gray-500 text-sm mb-4">has successfully completed</p>
                <h4 className="text-lg font-bold">SQL Database Management</h4>
                <p className="font-medium">with a score of 88%</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">How Our Certificates Help You</h3>
            
            <div className="space-y-6">
              {[
                {
                  icon: <FileText className="w-5 h-5" />,
                  title: "Enhance Your Resume",
                  description: "Add verified technical skills to your resume and stand out from other candidates."
                },
                {
                  icon: <Linkedin className="w-5 h-5" />,
                  title: "LinkedIn Integration",
                  description: "Easily add JobOnboard certificates to your LinkedIn profile with one click."
                },
                {
                  icon: <CheckCheck className="w-5 h-5" />,
                  title: "Skill Verification",
                  description: "Employers can verify your certificates through our secure verification system."
                },
                {
                  icon: <User className="w-5 h-5" />,
                  title: "Personal Growth",
                  description: "Track your progress and identify areas for improvement in your skills."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 rounded-full bg-jobonboard-purple/10 flex items-center justify-center text-jobonboard-purple flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button 
                className="bg-jobonboard-purple hover:bg-jobonboard-purple-light flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                View Certificate Gallery
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificateShowcase;
