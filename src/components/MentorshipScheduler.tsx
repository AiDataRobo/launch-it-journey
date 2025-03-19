
import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MentorshipScheduler = () => {
  // This function opens Cal.com in a new window when clicked
  const openCalScheduler = () => {
    // Replace this URL with your actual Cal.com scheduling link
    window.open('https://cal.com/team/jobonboard/mentorship', '_blank');
  };

  return (
    <section id="mentorship" className="py-24 bg-gradient-to-b from-white to-jobonboard-blue/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-10 w-64 h-64 rounded-full bg-jobonboard-purple/5 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-jobonboard-green/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-1 rounded-full bg-jobonboard-purple/10 text-jobonboard-purple text-sm font-medium mb-4">
            One-on-One Guidance
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule a Mentorship Session</h2>
          <p className="text-lg text-gray-600">
            Book a personalized 30-minute session with our industry experts to get guidance 
            tailored to your career goals and challenges.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Column - Information */}
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6">Why Book a Mentorship Call?</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-jobonboard-blue/10 p-2 rounded-full mr-4 mt-1">
                      <Calendar className="w-5 h-5 text-jobonboard-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Personalized Guidance</h4>
                      <p className="text-gray-600">Get advice specific to your career situation and goals.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-jobonboard-green/10 p-2 rounded-full mr-4 mt-1">
                      <Clock className="w-5 h-5 text-jobonboard-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Expert Industry Insights</h4>
                      <p className="text-gray-600">Learn from professionals with years of experience in the IT field.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-jobonboard-purple/10 p-2 rounded-full mr-4 mt-1">
                      <Clock className="w-5 h-5 text-jobonboard-purple" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Action Plan Creation</h4>
                      <p className="text-gray-600">Walk away with concrete next steps to advance your IT career.</p>
                    </div>
                  </li>
                </ul>
                
                <Button 
                  onClick={openCalScheduler}
                  className="mt-8 bg-jobonboard-purple hover:bg-jobonboard-purple-light text-white px-6 py-2 rounded-full transition-all"
                >
                  Book Your Session Now
                </Button>
              </div>
              
              {/* Right Column - Cal.com Embed Preview */}
              <div className="bg-gradient-to-br from-jobonboard-blue to-jobonboard-purple p-8 md:p-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="mb-4">
                    <Calendar className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Easy Scheduling</h3>
                  <p className="mb-6 opacity-90">
                    Select a date and time that works for you, and we'll confirm your booking instantly.
                  </p>
                  <Button 
                    onClick={openCalScheduler} 
                    variant="outline" 
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  >
                    View Calendar
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center text-gray-500 animate-fade-in">
            <p>Our mentors are available Monday through Friday, 9 AM - 5 PM EST.</p>
            <p className="mt-2">Can't find a suitable time? <a href="#" className="text-jobonboard-blue hover:underline">Contact us</a> for more options.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipScheduler;
