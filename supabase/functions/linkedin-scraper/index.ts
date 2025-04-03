
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";

// CORS headers for browser requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { linkedinUrl } = await req.json();
    
    if (!linkedinUrl || !linkedinUrl.includes('linkedin.com/in/')) {
      return new Response(
        JSON.stringify({ error: 'Invalid LinkedIn URL' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }

    console.log(`Starting to scrape: ${linkedinUrl}`);
    
    // Launch browser
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    try {
      const page = await browser.newPage();
      await page.goto(linkedinUrl, { timeout: 30000, waitUntil: 'networkidle2' });
      
      console.log("Page loaded, extracting data...");
      
      // Extract profile data
      const profileData = await page.evaluate(() => {
        // Basic profile info
        const name = document.querySelector('.text-heading-xlarge')?.textContent?.trim() || '';
        const headline = document.querySelector('.text-body-medium')?.textContent?.trim() || '';
        const about = Array.from(document.querySelectorAll('section'))
          .find(section => section.textContent?.includes('About'))
          ?.querySelector('.display-flex + .pv-shared-text-with-see-more')
          ?.textContent?.trim() || '';
        
        // Experience
        const experienceItems = Array.from(document.querySelectorAll('#experience ~ .pvs-list__outer-container > ul > li'));
        const experience = experienceItems.map(item => {
          const titleElement = item.querySelector('.display-flex .mr1 .visually-hidden');
          const companyElement = item.querySelector('.t-14.t-normal');
          const dateRangeElement = item.querySelector('.t-14.t-normal .pvs-entity__caption-wrapper');
          const descriptionElement = item.querySelector('.pvs-list__outer-container .visually-hidden');
          
          return {
            title: titleElement?.textContent?.trim() || '',
            company: companyElement?.textContent?.trim() || '',
            period: dateRangeElement?.textContent?.trim() || '',
            description: descriptionElement?.textContent?.trim() || ''
          };
        });
        
        // Education
        const educationItems = Array.from(document.querySelectorAll('#education ~ .pvs-list__outer-container > ul > li'));
        const education = educationItems.map(item => {
          const schoolElement = item.querySelector('.display-flex .mr1 .visually-hidden');
          const degreeElement = item.querySelector('.t-14.t-normal .visually-hidden');
          const dateElement = item.querySelector('.t-14.t-normal:nth-of-type(2)');
          
          return {
            institution: schoolElement?.textContent?.trim() || '',
            degree: degreeElement?.textContent?.trim() || '',
            year: dateElement?.textContent?.trim() || ''
          };
        });
        
        // Skills
        const skillItems = Array.from(document.querySelectorAll('#skills ~ .pvs-list__outer-container > ul > li'));
        const skills = skillItems.map(item => 
          item.querySelector('.display-flex .mr1 .visually-hidden')?.textContent?.trim() || ''
        ).filter(Boolean);
        
        return {
          name,
          headline,
          about,
          experience,
          education,
          skills
        };
      });
      
      console.log("Data extraction complete");
      await browser.close();
      
      // Format data for portfolio
      const formattedPortfolioData = {
        sections: [
          {
            id: 'about-1',
            type: 'about',
            title: 'About Me',
            content: {
              description: profileData.about || profileData.headline
            }
          },
          {
            id: 'experience-1',
            type: 'experience',
            title: 'Work Experience',
            content: profileData.experience.map(exp => ({
              title: exp.title,
              company: exp.company,
              period: exp.period,
              description: exp.description
            }))
          },
          {
            id: 'education-1',
            type: 'education',
            title: 'Education',
            content: profileData.education.map(edu => ({
              degree: edu.degree,
              institution: edu.institution,
              year: edu.year
            }))
          },
          {
            id: 'skills-1',
            type: 'skills',
            title: 'Skills',
            content: profileData.skills
          },
          {
            id: 'contact-1',
            type: 'contact',
            title: 'Contact',
            content: {
              email: 'Contact me on LinkedIn',
              location: 'Location information not available',
              linkedin: linkedinUrl
            }
          }
        ],
        template: 'modern',
        colors: {
          primary: '#0A66C2', // LinkedIn blue
          secondary: '#10B981',
          background: '#ffffff',
          text: '#333333'
        },
        meta: {
          title: `${profileData.name}'s Portfolio`,
          createdAt: new Date().toISOString()
        }
      };
      
      return new Response(
        JSON.stringify({ success: true, data: formattedPortfolioData }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
      
    } catch (error) {
      console.error('Scraping error:', error);
      await browser.close();
      throw error;
    }
    
  } catch (error) {
    console.error('Function error:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to scrape LinkedIn profile',
        details: error.message 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});
