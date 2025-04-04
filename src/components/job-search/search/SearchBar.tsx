
import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface SearchBarProps {
  searchTerm: string;
  location: string;
  isRemoteOnly: boolean;
  category: string;
  setSearchTerm: (value: string) => void;
  setLocation: (value: string) => void;
  setIsRemoteOnly: (value: boolean) => void;
  setCategory: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  location,
  isRemoteOnly,
  category,
  setSearchTerm,
  setLocation,
  setIsRemoteOnly,
  setCategory
}) => {
  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20">
      <CardContent className="pt-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Job title, keywords, or company" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/80 text-gray-800"
            />
          </div>
          <div className="flex-1 relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Location" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="pl-10 bg-white/80 text-gray-800"
            />
          </div>
          <div className="w-full lg:w-auto flex gap-2">
            <div className="flex items-center mr-2 whitespace-nowrap">
              <input 
                type="checkbox" 
                id="remote-only" 
                className="mr-2"
                checked={isRemoteOnly}
                onChange={() => setIsRemoteOnly(!isRemoteOnly)}
              />
              <label htmlFor="remote-only" className="text-sm md:text-base">Remote only</label>
            </div>
            <Select value={category} onValueChange={setCategory} defaultValue="all">
              <SelectTrigger className="w-full md:w-[180px] bg-white/80 text-gray-800">
                <SelectValue placeholder="Job Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Web Development">Web Development</SelectItem>
                <SelectItem value="Data Science">Data Science</SelectItem>
                <SelectItem value="DevOps">DevOps</SelectItem>
                <SelectItem value="Design">Design</SelectItem>
                <SelectItem value="Product Management">Product Management</SelectItem>
                <SelectItem value="Consulting">Consulting</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-jobonboard-purple hover:bg-jobonboard-purple/90 text-white">
              Search
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchBar;
