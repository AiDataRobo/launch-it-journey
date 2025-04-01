
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Search, BookOpen, Diamond } from 'lucide-react';

interface ProductsDropdownProps {
  onClose: () => void;
}

export const ProductsDropdown: React.FC<ProductsDropdownProps> = ({ onClose }) => {
  return (
    <div className="absolute top-full left-0 mt-2 w-64 bg-background rounded-md shadow-lg border border-border z-50">
      <div className="py-2">
        <Link 
          to="/products"
          className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
          onClick={onClose}
        >
          All Products
        </Link>
        
        <div className="px-4 py-2 text-xs font-semibold text-muted-foreground">Categories</div>
        
        <Link 
          to="/products#resume-tools"
          className="flex items-center px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
          onClick={onClose}
        >
          <FileText className="w-4 h-4 mr-2 text-jobonboard-blue" />
          Resume Tools
        </Link>
        
        <Link 
          to="/products#job-search"
          className="flex items-center px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
          onClick={onClose}
        >
          <Search className="w-4 h-4 mr-2 text-jobonboard-green" />
          Job Search Tools
        </Link>
        
        <Link 
          to="/products#interview-tools"
          className="flex items-center px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
          onClick={onClose}
        >
          <BookOpen className="w-4 h-4 mr-2 text-jobonboard-purple" />
          Interview Prep
        </Link>
        
        <Link 
          to="/products#premium-services"
          className="flex items-center px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
          onClick={onClose}
        >
          <Diamond className="w-4 h-4 mr-2 text-amber-500" />
          Premium Services
        </Link>
      </div>
    </div>
  );
};
