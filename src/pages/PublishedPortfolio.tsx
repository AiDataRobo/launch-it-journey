
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, ExternalLink, Mail, Phone } from 'lucide-react';
import { PublishedPortfolio as PublishedPortfolioType } from '@/types/portfolio';
import { MapPin } from '@/components/portfolio/MapPin';

const PublishedPortfolio = () => {
  const { username } = useParams();
  const [portfolio, setPortfolio] = useState<PublishedPortfolioType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      if (!username) {
        setError('Portfolio not found');
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('published_portfolios')
          .select('*')
          .eq('username', username)
          .maybeSingle();

        if (error) throw error;
        
        if (!data) {
          setError('Portfolio not found');
        } else {
          setPortfolio(data as PublishedPortfolioType);
        }
      } catch (err) {
        console.error('Error fetching portfolio:', err);
        setError('Failed to load portfolio');
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, [username]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-jobonboard-purple" />
      </div>
    );
  }

  if (error || !portfolio) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Portfolio Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The portfolio you're looking for doesn't exist or may have been removed.
        </p>
        <a 
          href="/"
          className="bg-jobonboard-purple text-white px-4 py-2 rounded-md hover:bg-jobonboard-purple-light transition-colors"
        >
          Go Home
        </a>
      </div>
    );
  }

  const { portfolio_data } = portfolio;
  const { sections, colors, template } = portfolio_data;

  return (
    <div style={{ 
      backgroundColor: colors.background,
      color: colors.text,
      minHeight: '100vh',
    }}>
      <div className="max-w-4xl mx-auto p-6 md:p-8">
        {/* Portfolio Header */}
        <div 
          className="p-6 md:p-8 text-white rounded-t-lg shadow-lg"
          style={{ 
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` 
          }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-center md:text-left">John Doe</h1>
              <p className="text-xl opacity-90 text-center md:text-left">Senior Developer</p>
            </div>
          </div>
        </div>

        {/* Portfolio Sections */}
        <div className="bg-white p-6 md:p-8 rounded-b-lg shadow-lg">
          {sections.map((section) => (
            <div key={section.id} className="mb-10">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: colors.primary }}>
                {section.title}
              </h2>
              
              {section.type === 'about' && (
                <p className="text-gray-700">{section.content.description}</p>
              )}
              
              {section.type === 'experience' && (
                <div className="space-y-6">
                  {section.content.map((exp: any, i: number) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between flex-wrap">
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
                      <div className="flex justify-between flex-wrap">
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
              
              {section.type === 'projects' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.content.map((project: any, i: number) => (
                    <div key={i} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-semibold">{project.title}</h3>
                      <p className="text-gray-700 my-2">{project.description}</p>
                      {project.link && (
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
                      )}
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
                  {section.content.email && (
                    <p className="flex items-center gap-2">
                      <Mail size={18} className="text-gray-500" />
                      {section.content.email}
                    </p>
                  )}
                  {section.content.phone && (
                    <p className="flex items-center gap-2">
                      <Phone size={18} className="text-gray-500" />
                      {section.content.phone}
                    </p>
                  )}
                  {section.content.location && (
                    <p className="flex items-center gap-2">
                      <MapPin size={18} className="text-gray-500" />
                      {section.content.location}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Footer with attribution */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Portfolio created with <a href="/" className="hover:underline font-medium">JobOnboard</a></p>
        </div>
      </div>
    </div>
  );
};

export default PublishedPortfolio;
