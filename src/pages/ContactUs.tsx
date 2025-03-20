
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactUs = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, this would send the form data to your backend
    console.log(values);
    toast.success("Your message has been sent! We'll get back to you soon.");
    form.reset();
  }

  const contactMethods = [
    {
      title: "Email Us",
      description: "Our team will get back to you within 24-48 hours.",
      icon: Mail,
      info: "hello@jobonboard.com",
      link: "mailto:hello@jobonboard.com",
      color: "text-jobonboard-purple",
      bgColor: "bg-jobonboard-purple/10",
    },
    {
      title: "Call Us",
      description: "Available Monday-Friday, 9AM-5PM EST.",
      icon: Phone,
      info: "+1-555-123-4567",
      link: "tel:+15551234567",
      color: "text-jobonboard-blue",
      bgColor: "bg-jobonboard-blue/10",
    },
    {
      title: "Visit Us",
      description: "Schedule an appointment at our office.",
      icon: MapPin,
      info: "123 Tech Avenue, San Francisco, CA 94107",
      link: "https://maps.google.com",
      color: "text-jobonboard-green",
      bgColor: "bg-jobonboard-green/10",
    },
  ];

  const faqs = [
    {
      question: "How long does the job placement process take?",
      answer: "The timeline varies based on your existing skills, learning pace, and job market conditions. On average, our members find suitable roles within 3-6 months of completing their personalized career plan.",
    },
    {
      question: "Do I need prior IT experience to use JobOnboard?",
      answer: "No prior IT experience is required. Our platform is designed to help individuals from all backgrounds transition into IT careers. We'll assess your transferable skills and create a personalized pathway.",
    },
    {
      question: "Are there any guarantees for job placement?",
      answer: "While we can't guarantee job placement, our 95% success rate speaks to the effectiveness of our approach. We provide all the tools, resources, and support needed to maximize your chances of landing a role.",
    },
    {
      question: "What types of IT roles can JobOnboard help me prepare for?",
      answer: "We cover a wide range of IT paths including software development, IT support, cybersecurity, data analysis, cloud engineering, project management, UX/UI design, and more.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-gray-50/80"></div>
            <div className="absolute top-1/3 right-0 w-80 h-80 bg-jobonboard-purple/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-jobonboard-blue/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-jobonboard-purple/10 text-jobonboard-purple text-sm font-medium mb-4">
                <MessageSquare className="w-4 h-4" />
                <span>Get in Touch</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Have questions or need assistance? We're here to help you on your IT career journey.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 ${method.bgColor} rounded-full flex items-center justify-center mb-4`}>
                      <method.icon className={`${method.color} w-6 h-6`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                    <p className="text-gray-600 mb-3">{method.description}</p>
                    <a 
                      href={method.link} 
                      className={`${method.color} font-medium hover:underline`}
                      target={method.title === "Visit Us" ? "_blank" : undefined}
                      rel={method.title === "Visit Us" ? "noopener noreferrer" : undefined}
                    >
                      {method.info}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-sm p-8 animate-fade-in">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john.doe@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="How can we help you?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please describe your question or concern in detail..." 
                              className="min-h-32" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-jobonboard-purple hover:bg-jobonboard-purple-light flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </Button>
                  </form>
                </Form>
              </div>

              {/* FAQs */}
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-5">
                      <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="bg-jobonboard-blue/10 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-jobonboard-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Response Time</h3>
                      <p className="text-gray-600">
                        We typically respond to all inquiries within 24-48 business hours. For urgent matters, please call our support line.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold">Our Location</h2>
                <p className="text-gray-600">Visit our headquarters in San Francisco</p>
              </div>
              <div className="h-96 bg-gray-200 relative">
                {/* In a real application, this would be a real map component */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-jobonboard-purple mx-auto mb-4" />
                    <p className="text-lg font-medium">123 Tech Avenue, San Francisco, CA 94107</p>
                    <Button className="mt-4 bg-jobonboard-purple hover:bg-jobonboard-purple-light">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
