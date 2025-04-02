
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from '@/hooks/use-toast';
import { Loader2, CheckCircle2, Copy, ExternalLink } from 'lucide-react';

interface PublishPortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  portfolioData: any;
}

const PublishPortfolioModal = ({ isOpen, onClose, portfolioData }: PublishPortfolioModalProps) => {
  const [isPublishing, setIsPublishing] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [username, setUsername] = useState('');
  const [isCheckingUsername, setIsCheckingUsername] = useState(false);
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(false);
  const { toast } = useToast();

  const checkUsernameAvailability = async (username: string) => {
    if (!username.trim()) {
      setIsUsernameAvailable(false);
      return;
    }

    setIsCheckingUsername(true);

    try {
      // Check if username is already taken
      const { data, error } = await supabase
        .from('published_portfolios')
        .select('id')
        .eq('username', username.trim())
        .maybeSingle();

      if (error) throw error;
      
      setIsUsernameAvailable(!data);
    } catch (error) {
      console.error('Error checking username:', error);
      setIsUsernameAvailable(false);
    } finally {
      setIsCheckingUsername(false);
    }
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUsername = e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '');
    setUsername(newUsername);
    checkUsernameAvailability(newUsername);
  };

  const handlePublish = async () => {
    if (!isUsernameAvailable || !username.trim()) {
      toast({
        title: "Invalid username",
        description: "Please choose a valid and available username.",
        variant: "destructive",
      });
      return;
    }

    setIsPublishing(true);

    try {
      const { data: userData, error: userError } = await supabase.auth.getUser();
      
      if (userError) throw userError;
      
      if (!userData.user) {
        toast({
          title: "Authentication required",
          description: "Please sign in to publish your portfolio.",
          variant: "destructive",
        });
        return;
      }

      // Save portfolio data
      const { data, error } = await supabase
        .from('published_portfolios')
        .upsert({
          user_id: userData.user.id,
          username: username.trim(),
          portfolio_data: portfolioData,
          published_at: new Date().toISOString(),
        })
        .select()
        .single();

      if (error) throw error;
      
      setIsPublished(true);
      setPortfolioUrl(`https://jobonboard.com/portfolio/${username}`);
      
      toast({
        title: "Portfolio published!",
        description: `Your portfolio is now live at jobonboard.com/portfolio/${username}`,
      });
    } catch (error) {
      console.error('Error publishing portfolio:', error);
      toast({
        title: "Publishing failed",
        description: "There was an error publishing your portfolio. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsPublishing(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(portfolioUrl);
    toast({
      title: "URL copied",
      description: "Portfolio URL copied to clipboard!",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Publish Your Portfolio</DialogTitle>
          <DialogDescription>
            {isPublished 
              ? "Your portfolio is now live! Share this link with potential employers."
              : "Choose a custom URL for your portfolio."}
          </DialogDescription>
        </DialogHeader>
        
        {!isPublished ? (
          <>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">jobonboard.com/portfolio/</span>
                  <Input
                    value={username}
                    onChange={handleUsernameChange}
                    className="flex-1"
                    placeholder="your-username"
                    disabled={isPublishing}
                  />
                </div>
                
                {username && (
                  <div className="text-xs flex items-center gap-1.5">
                    {isCheckingUsername ? (
                      <Loader2 className="h-3 w-3 animate-spin text-muted-foreground" />
                    ) : isUsernameAvailable ? (
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                    ) : (
                      <span className="text-red-500">This username is not available</span>
                    )}
                    {isUsernameAvailable && <span className="text-green-500">Username available</span>}
                  </div>
                )}
              </div>
            </div>
            
            <DialogFooter className="sm:justify-between">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button 
                onClick={handlePublish} 
                disabled={!isUsernameAvailable || isPublishing}
                className="gap-2"
              >
                {isPublishing && <Loader2 className="h-4 w-4 animate-spin" />}
                Publish Portfolio
              </Button>
            </DialogFooter>
          </>
        ) : (
          <div className="space-y-4 py-4">
            <div className="bg-muted p-3 rounded-md flex items-center justify-between gap-2">
              <span className="text-sm font-medium truncate">{portfolioUrl}</span>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="ghost" onClick={copyToClipboard}>
                  <Copy className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" asChild>
                  <a href={portfolioUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            
            <DialogFooter>
              <Button onClick={onClose}>
                Close
              </Button>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PublishPortfolioModal;
