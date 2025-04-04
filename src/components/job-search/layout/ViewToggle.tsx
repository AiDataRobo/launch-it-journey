
import React from 'react';
import { Briefcase, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ViewToggleProps {
  jobCount: number;
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  resetFilters: () => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ 
  jobCount, 
  viewMode, 
  setViewMode, 
  resetFilters 
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <span className="text-muted-foreground">{jobCount} jobs found</span>
        <div className="flex border rounded">
          <button 
            className={`p-2 ${viewMode === 'list' ? 'bg-jobonboard-purple/10 text-jobonboard-purple' : ''}`}
            onClick={() => setViewMode('list')}
          >
            <Briefcase className="h-5 w-5" />
          </button>
          <button 
            className={`p-2 ${viewMode === 'grid' ? 'bg-jobonboard-purple/10 text-jobonboard-purple' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <div className="flex flex-wrap w-5 h-5">
              <div className="w-2 h-2 m-0.5 bg-current"></div>
              <div className="w-2 h-2 m-0.5 bg-current"></div>
              <div className="w-2 h-2 m-0.5 bg-current"></div>
              <div className="w-2 h-2 m-0.5 bg-current"></div>
            </div>
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="outline" onClick={resetFilters} className="text-sm">
          <Filter className="h-4 w-4 mr-1" /> Reset Filters
        </Button>
        <Select defaultValue="latest">
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Sort by: Latest" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="latest">Latest</SelectItem>
            <SelectItem value="relevant">Relevance</SelectItem>
            <SelectItem value="salary-high">Salary: High to Low</SelectItem>
            <SelectItem value="salary-low">Salary: Low to High</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ViewToggle;
