
import { Json } from "@/integrations/supabase/types";

export interface PublishedPortfolio {
  id: string;
  user_id: string;
  username: string;
  portfolio_data: PortfolioData;
  published_at: string;
  updated_at: string;
}

export interface PortfolioData {
  sections: PortfolioSection[];
  template: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
  meta?: {
    title?: string;
    createdAt?: string;
  };
}

export interface PortfolioSection {
  id: string;
  type: string;
  title: string;
  icon?: React.ReactNode;
  content: any;
  isEditing?: boolean;
}
