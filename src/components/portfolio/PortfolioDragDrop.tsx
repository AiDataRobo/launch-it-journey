
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';
import { 
  User, Briefcase, GraduationCap, Code, Star, 
  MessageSquare, Phone, Move, Trash2, Edit, Eye, 
  Plus, Image, ExternalLink, PanelLeft, Download, X
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type SectionType = {
  id: string;
  type: string;
  title: string;
  icon: React.ReactNode;
  content: any;
  isEditing?: boolean;
};

const initialSections: SectionType[] = [
  {
    id: 'about',
    type: 'about',
    title: 'About Me',
    icon: <User size={20} />,
    content: {
      description: 'I am a passionate professional with expertise in my field. My goal is to make a positive impact through my work.'
    }
  },
];

const PortfolioDragDrop = () => {
  const [sections, setSections] = useState<SectionType[]>(initialSections);
  const [activeView, setActiveView] = useState('edit');
  const [currentTemplate, setCurrentTemplate] = useState('modern');
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [colors, setColors] = useState({
    primary: '#8B5CF6',
    secondary: '#10B981',
    background: '#ffffff',
    text: '#333333'
  });
  const draggedItemRef = useRef<number | null>(null);
  const { toast } = useToast();

  const availableSections = [
    { type: 'about', title: 'About Me', icon: <User size={20} /> },
    { type: 'experience', title: 'Work Experience', icon: <Briefcase size={20} /> },
    { type: 'education', title: 'Education', icon: <GraduationCap size={20} /> },
    { type: 'skills', title: 'Skills', icon: <Code size={20} /> },
    { type: 'projects', title: 'Projects', icon: <Star size={20} /> },
    { type: 'testimonials', title: 'Testimonials', icon: <MessageSquare size={20} /> },
    { type: 'contact', title: 'Contact', icon: <Phone size={20} /> },
  ];

  const handleAddSection = (type: string) => {
    const sectionToAdd = availableSections.find(section => section.type === type);
    if (!sectionToAdd) return;

    const newSection = {
      id: `${type}-${Date.now()}`,
      type,
      title: sectionToAdd.title,
      icon: sectionToAdd.icon,
      content: getDefaultContentForType(type),
      isEditing: true,
    };

    setSections([...sections, newSection]);
    
    toast({
      title: "Section added",
      description: `${sectionToAdd.title} section has been added to your portfolio.`,
    });
  };

  const getDefaultContentForType = (type: string) => {
    switch (type) {
      case 'about':
        return { description: 'Write about yourself here...' };
      case 'experience':
        return [{ title: 'Job Title', company: 'Company Name', period: '2020 - Present', description: 'Job description here...' }];
      case 'education':
        return [{ degree: 'Degree Name', institution: 'Institution Name', year: '2016 - 2020' }];
      case 'skills':
        return ['Skill 1', 'Skill 2', 'Skill 3'];
      case 'projects':
        return [{ title: 'Project Name', description: 'Project description here...', link: 'https://example.com' }];
      case 'testimonials':
        return [{ quote: 'Testimonial text here...', author: 'Author Name', position: 'Position, Company' }];
      case 'contact':
        return { email: 'your.email@example.com', phone: '(123) 456-7890', location: 'City, Country' };
      default:
        return {};
    }
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggingId(sections[index].id);
    draggedItemRef.current = index;
    e.dataTransfer.effectAllowed = 'move';
    // This makes the dragged element transparent in many browsers
    setTimeout(() => {
      if (e.target instanceof HTMLElement) {
        e.target.style.opacity = '0.4';
      }
    }, 0);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedItemRef.current === null) return;
    
    const draggedOverItem = sections[index];
    const draggedItem = sections[draggedItemRef.current];
    
    // If the item is dragged over itself, ignore
    if (draggedOverItem.id === draggedItem.id) return;
    
    // Filter out the currently dragged item
    const newSections = sections.filter((_, idx) => idx !== draggedItemRef.current);
    
    // Add the dragged item after the dragged over item
    newSections.splice(index, 0, draggedItem);
    
    // Update state
    setSections(newSections);
    draggedItemRef.current = index;
  };

  const handleDragEnd = (e: React.DragEvent) => {
    setDraggingId(null);
    draggedItemRef.current = null;
    if (e.target instanceof HTMLElement) {
      e.target.style.opacity = '1';
    }
    
    toast({
      title: "Section reordered",
      description: "Your portfolio sections have been reordered.",
    });
  };

  const handleRemoveSection = (id: string) => {
    setSections(sections.filter(section => section.id !== id));
    
    toast({
      title: "Section removed",
      description: "The section has been removed from your portfolio.",
    });
  };

  const handleEditSection = (id: string) => {
    setSections(sections.map(section => 
      section.id === id 
        ? { ...section, isEditing: !section.isEditing } 
        : section
    ));
  };

  const handleExportAsPDF = () => {
    toast({
      title: "Exporting as PDF",
      description: "Your portfolio is being prepared for download as PDF.",
    });
    
    // Simulate PDF generation
    setTimeout(() => {
      toast({
        title: "PDF Ready",
        description: "Your portfolio has been exported as PDF and is ready to download.",
        variant: "success",
      });
    }, 2000);
  };

  const handlePublish = () => {
    toast({
      title: "Portfolio Published!",
      description: "Your portfolio is now live at username.jobonboard.com",
      variant: "success",
    });
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left sidebar - Sections to add */}
        <div className="md:col-span-3 space-y-4">
          <Card className="border border-input">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <PanelLeft size={18} />
                Add Sections
              </h3>
              <div className="space-y-2">
                {availableSections.map((section) => (
                  <Button 
                    key={section.type}
                    variant="outline"
                    className="w-full justify-start text-sm"
                    onClick={() => handleAddSection(section.type)}
                  >
                    <div className="mr-2">{section.icon}</div>
                    {section.title}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border border-input">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-3">Portfolio Settings</h3>
              
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium">Template Style</label>
                  <select 
                    className="w-full mt-1 rounded-md border border-input px-3 py-2 text-sm"
                    value={currentTemplate}
                    onChange={(e) => setCurrentTemplate(e.target.value)}
                  >
                    <option value="modern">Modern</option>
                    <option value="classic">Classic</option>
                    <option value="minimalist">Minimalist</option>
                    <option value="creative">Creative</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium">Primary Color</label>
                  <div className="flex mt-1">
                    <input
                      type="color"
                      value={colors.primary}
                      onChange={(e) => setColors({...colors, primary: e.target.value})}
                      className="w-full h-8 rounded-md border border-input cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Secondary Color</label>
                  <div className="flex mt-1">
                    <input
                      type="color"
                      value={colors.secondary}
                      onChange={(e) => setColors({...colors, secondary: e.target.value})}
                      className="w-full h-8 rounded-md border border-input cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <Button 
                  variant="outline" 
                  className="w-full flex items-center gap-2"
                  onClick={handleExportAsPDF}
                >
                  <Download size={16} />
                  Export as PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Center - Portfolio editor */}
        <div className="md:col-span-9">
          <Tabs defaultValue="edit" onValueChange={setActiveView} className="w-full">
            <div className="flex justify-between items-center mb-4">
              <TabsList>
                <TabsTrigger value="edit" className="flex gap-2">
                  <Edit size={16} />
                  Edit
                </TabsTrigger>
                <TabsTrigger value="preview" className="flex gap-2">
                  <Eye size={16} />
                  Preview
                </TabsTrigger>
              </TabsList>
              
              <Button onClick={handlePublish} className="bg-jobonboard-purple hover:bg-jobonboard-purple-light">
                Publish Portfolio
              </Button>
            </div>

            <div className="bg-white border rounded-lg min-h-[600px]">
              <TabsContent value="edit" className="m-0">
                <div className="p-6">
                  <div
                    className="min-h-[500px] rounded-md"
                    style={{ 
                      backgroundColor: colors.background 
                    }}
                  >
                    {sections.length === 0 ? (
                      <div className="flex flex-col items-center justify-center h-[500px] border border-dashed border-gray-300 rounded-md text-muted-foreground">
                        <Plus size={48} className="mb-2 opacity-40" />
                        <p>Drag sections here to build your portfolio</p>
                        <Button
                          variant="outline"
                          className="mt-4"
                          onClick={() => handleAddSection('about')}
                        >
                          Add About Me Section
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4 p-4">
                        {sections.map((section, index) => (
                          <motion.div 
                            key={section.id}
                            className={`bg-white border rounded-lg p-4 transition-all ${
                              draggingId === section.id 
                                ? 'opacity-40 border-dashed' 
                                : 'opacity-100'
                            } ${section.isEditing ? 'ring-2 ring-jobonboard-purple ring-opacity-50' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            draggable
                            onDragStart={(e) => handleDragStart(e, index)}
                            onDragOver={(e) => handleDragOver(e, index)}
                            onDragEnd={handleDragEnd}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <div className="cursor-move p-1 rounded-md hover:bg-gray-100">
                                  <Move size={18} className="text-gray-500" />
                                </div>
                                <span className="font-medium flex items-center gap-2">
                                  {section.icon}
                                  {section.title}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => handleEditSection(section.id)}
                                >
                                  <Edit size={18} />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="text-red-500 hover:bg-red-50 hover:text-red-600"
                                  onClick={() => handleRemoveSection(section.id)}
                                >
                                  <Trash2 size={18} />
                                </Button>
                              </div>
                            </div>

                            {/* Content editor UI would go here */}
                            <div className="bg-gray-50 p-3 rounded-md">
                              {section.type === 'about' && (
                                <textarea
                                  className="w-full p-2 min-h-24 border rounded"
                                  placeholder="Write about yourself..."
                                  defaultValue={section.content.description}
                                ></textarea>
                              )}
                              
                              {section.type === 'experience' && (
                                <div className="space-y-3">
                                  {section.content.map((exp: any, i: number) => (
                                    <div key={i} className="bg-white p-3 rounded border">
                                      <input 
                                        className="w-full p-2 border rounded mb-2" 
                                        placeholder="Job Title"
                                        defaultValue={exp.title}
                                      />
                                      <input 
                                        className="w-full p-2 border rounded mb-2" 
                                        placeholder="Company"
                                        defaultValue={exp.company}
                                      />
                                      <input 
                                        className="w-full p-2 border rounded mb-2" 
                                        placeholder="Time Period"
                                        defaultValue={exp.period}
                                      />
                                      <textarea 
                                        className="w-full p-2 min-h-24 border rounded" 
                                        placeholder="Description"
                                        defaultValue={exp.description}
                                      ></textarea>
                                    </div>
                                  ))}
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    className="w-full"
                                  >
                                    <Plus size={16} className="mr-1" />
                                    Add Experience
                                  </Button>
                                </div>
                              )}
                              
                              {/* Similar markup for other section types */}
                              {section.type !== 'about' && section.type !== 'experience' && (
                                <div className="flex items-center justify-center h-16 text-muted-foreground">
                                  Content editor for {section.title}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="preview" className="m-0">
                <div className="bg-gray-100 p-6">
                  <div 
                    className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto"
                    style={{ 
                      color: colors.text,
                      backgroundColor: colors.background 
                    }}
                  >
                    {/* Header with profile */}
                    <div 
                      className="p-8 text-white"
                      style={{ 
                        background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` 
                      }}
                    >
                      <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-white">
                          <User size={48} />
                        </div>
                        <div>
                          <h1 className="text-3xl font-bold">John Doe</h1>
                          <p className="text-xl opacity-90">Senior Developer</p>
                          <div className="flex items-center gap-3 mt-2">
                            <Button variant="secondary" size="sm" className="bg-white/10 hover:bg-white/20 border-0">
                              <Phone size={14} className="mr-1" />
                              Contact
                            </Button>
                            <Button variant="secondary" size="sm" className="bg-white/10 hover:bg-white/20 border-0">
                              <Download size={14} className="mr-1" />
                              Resume
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Portfolio content */}
                    <div className="p-8">
                      {sections.map((section) => (
                        <div key={section.id} className="mb-8">
                          <h2 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: colors.primary }}>
                            {section.icon}
                            {section.title}
                          </h2>
                          
                          {section.type === 'about' && (
                            <p className="text-gray-700">
                              {section.content.description}
                            </p>
                          )}
                          
                          {section.type === 'experience' && (
                            <div className="space-y-6">
                              {section.content.map((exp: any, i: number) => (
                                <div key={i} className="space-y-1">
                                  <div className="flex justify-between">
                                    <h3 className="font-semibold">{exp.title}</h3>
                                    <span className="text-gray-500">{exp.period}</span>
                                  </div>
                                  <p className="text-gray-600">{exp.company}</p>
                                  <p className="text-gray-700 mt-2">{exp.description}</p>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {section.type === 'education' && (
                            <div className="space-y-6">
                              {section.content.map((edu: any, i: number) => (
                                <div key={i} className="space-y-1">
                                  <div className="flex justify-between">
                                    <h3 className="font-semibold">{edu.degree}</h3>
                                    <span className="text-gray-500">{edu.year}</span>
                                  </div>
                                  <p className="text-gray-600">{edu.institution}</p>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {section.type === 'skills' && (
                            <div className="flex flex-wrap gap-2">
                              {section.content.map((skill: string, i: number) => (
                                <span 
                                  key={i} 
                                  className="px-3 py-1 rounded-full text-sm" 
                                  style={{ 
                                    backgroundColor: `${colors.primary}20`,
                                    color: colors.primary
                                  }}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          )}
                          
                          {/* Sample placeholders for other section types */}
                          {section.type === 'projects' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {section.content.map((project: any, i: number) => (
                                <div key={i} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                                  <h3 className="font-semibold">{project.title}</h3>
                                  <p className="text-gray-700 my-2">{project.description}</p>
                                  <a 
                                    href={project.link} 
                                    className="flex items-center text-sm gap-1 hover:underline" 
                                    style={{ color: colors.primary }}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                  >
                                    <ExternalLink size={14} />
                                    View Project
                                  </a>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {section.type === 'testimonials' && (
                            <div className="space-y-4">
                              {section.content.map((testimonial: any, i: number) => (
                                <div key={i} className="bg-gray-50 p-4 rounded-lg border-l-4" style={{ borderLeftColor: colors.primary }}>
                                  <p className="italic text-gray-700 mb-2">"{testimonial.quote}"</p>
                                  <div>
                                    <p className="font-medium">{testimonial.author}</p>
                                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {section.type === 'contact' && (
                            <div className="space-y-2">
                              <p className="flex items-center gap-2">
                                <Mail size={18} className="text-gray-500" />
                                {section.content.email}
                              </p>
                              <p className="flex items-center gap-2">
                                <Phone size={18} className="text-gray-500" />
                                {section.content.phone}
                              </p>
                              <p className="flex items-center gap-2">
                                <MapPin size={18} className="text-gray-500" />
                                {section.content.location}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDragDrop;
