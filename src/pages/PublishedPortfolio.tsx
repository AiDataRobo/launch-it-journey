
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Loader2 } from 'lucide-react';

const PublishedPortfolio = () => {
  const { username } = useParams();
  const [portfolio, setPortfolio] = useState<any>(null);
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
          setPortfolio(data);
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

  // Here we would render the portfolio based on the stored data
  // For now, let's render a basic version
  const { portfolio_data } = portfolio;
  const { sections, colors, template } = portfolio_data;

  return (
    <div style={{ 
      backgroundColor: colors.background,
      color: colors.text,
    }}>
      <div className="max-w-4xl mx-auto p-8">
        {/* Portfolio Header */}
        <div 
          className="p-8 text-white rounded-t-lg"
          style={{ 
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` 
          }}
        >
          <h1 className="text-3xl font-bold">John Doe</h1>
          <p className="text-xl opacity-90">Senior Developer</p>
        </div>

        {/* Portfolio Sections */}
        <div className="bg-white p-8 rounded-b-lg shadow-lg">
          {sections.map((section: any) => (
            <div key={section.id} className="mb-8">
              <h2 className="text-xl font-bold mb-4" style={{ color: colors.primary }}>
                {section.title}
              </h2>
              
              {section.type === 'about' && (
                <p>{section.content.description}</p>
              )}

              {/* Render other section types as needed */}
              {/* This would be expanded to handle all section types */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublishedPortfolio;
