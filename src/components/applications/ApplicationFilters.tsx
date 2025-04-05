
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, X, Search } from 'lucide-react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { applicationStatusOptions } from './data/applicationData';
import { ApplicationData, FilterState } from './types';

interface ApplicationFiltersProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  applications: ApplicationData[];
}

const ApplicationFilters: React.FC<ApplicationFiltersProps> = ({ 
  filters, 
  setFilters,
  applications 
}) => {
  // Get unique companies from applications
  const companies = [...new Set(applications.map(app => app.company))];
  
  const resetFilters = () => {
    setFilters({
      status: 'all',
      company: 'all',
      dateRange: { from: undefined, to: undefined },
      search: ''
    });
  };
  
  return (
    <Card className="mb-6">
      <CardContent className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Search</label>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Job title or company..."
              value={filters.search}
              onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
              className="pl-8"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Status</label>
          <Select
            value={filters.status}
            onValueChange={(value) => setFilters(prev => ({ ...prev, status: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              {applicationStatusOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Company</label>
          <Select
            value={filters.company}
            onValueChange={(value) => setFilters(prev => ({ ...prev, company: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Filter by company" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Companies</SelectItem>
              {companies.map((company) => (
                <SelectItem key={company} value={company}>
                  {company}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Applied Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "justify-start text-left font-normal w-full",
                  !filters.dateRange.from && !filters.dateRange.to && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {filters.dateRange.from ? (
                  filters.dateRange.to ? (
                    <>
                      {format(filters.dateRange.from, "LLL dd, y")} -{" "}
                      {format(filters.dateRange.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(filters.dateRange.from, "LLL dd, y")
                  )
                ) : (
                  "Select date range"
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={filters.dateRange.from}
                selected={{
                  from: filters.dateRange.from,
                  to: filters.dateRange.to,
                }}
                onSelect={(range) => 
                  setFilters(prev => ({ ...prev, dateRange: { from: range?.from, to: range?.to } }))
                }
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="md:col-span-4 flex justify-end gap-2">
          <Button 
            variant="outline" 
            onClick={resetFilters} 
            className="flex items-center gap-1"
          >
            <X className="h-4 w-4" /> Clear Filters
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplicationFilters;
