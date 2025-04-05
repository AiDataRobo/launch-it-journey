
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Plus, Filter, ArrowDownUp, ListFilter } from 'lucide-react';
import ApplicationList from '@/components/applications/ApplicationList';
import ApplicationKanban from '@/components/applications/ApplicationKanban';
import ApplicationFilters from '@/components/applications/ApplicationFilters';
import AddApplicationDialog from '@/components/applications/AddApplicationDialog';
import { initialApplications } from '@/components/applications/data/applicationData';
import { ApplicationData } from '@/components/applications/types';

const ApplicationTracker = () => {
  const [applications, setApplications] = useState<ApplicationData[]>(initialApplications);
  const [filterOpen, setFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'kanban'>('list');
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: 'all',
    company: 'all',
    dateRange: { from: undefined, to: undefined },
    search: ''
  });

  const handleAddApplication = (newApplication: ApplicationData) => {
    setApplications([...applications, { ...newApplication, id: applications.length + 1 }]);
    setAddDialogOpen(false);
  };

  const handleStatusUpdate = (id: number, newStatus: string) => {
    setApplications(applications.map(app => 
      app.id === id ? { ...app, status: newStatus } : app
    ));
  };

  const handleUpdateNotes = (id: number, notes: string) => {
    setApplications(applications.map(app => 
      app.id === id ? { ...app, notes } : app
    ));
  };

  const filteredApplications = applications.filter(app => {
    // Filter by status
    if (filters.status !== 'all' && app.status !== filters.status) return false;
    
    // Filter by company
    if (filters.company !== 'all' && app.company !== filters.company) return false;
    
    // Filter by search term
    if (filters.search && !app.jobTitle.toLowerCase().includes(filters.search.toLowerCase()) && 
        !app.company.toLowerCase().includes(filters.search.toLowerCase())) return false;
    
    // Filter by date range
    if (filters.dateRange.from && new Date(app.appliedDate) < filters.dateRange.from) return false;
    if (filters.dateRange.to && new Date(app.appliedDate) > filters.dateRange.to) return false;
    
    return true;
  });

  return (
    <DashboardLayout>
      <div className="container mx-auto p-4 space-y-6">
        <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
          <div>
            <h1 className="text-2xl font-bold">Application Tracker</h1>
            <p className="text-muted-foreground">Track and manage your job applications</p>
          </div>
          
          <div className="flex gap-2 w-full md:w-auto">
            <Button
              className="bg-jobonboard-purple hover:bg-jobonboard-purple/90 md:ml-auto"
              onClick={() => setAddDialogOpen(true)}
            >
              <Plus className="mr-1 h-4 w-4" /> Add Application
            </Button>
            <Button
              variant="outline"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <Filter className="mr-1 h-4 w-4" /> Filters
            </Button>
          </div>
        </div>
        
        {filterOpen && (
          <ApplicationFilters 
            filters={filters} 
            setFilters={setFilters} 
            applications={applications} 
          />
        )}
        
        <Tabs defaultValue="list" className="w-full" onValueChange={(value) => setViewMode(value as 'list' | 'kanban')}>
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="kanban">Kanban View</TabsTrigger>
            </TabsList>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{filteredApplications.length} applications</span>
              <Separator orientation="vertical" className="h-4" />
              <Button variant="ghost" size="sm" className="gap-1 h-8">
                <ArrowDownUp className="h-3 w-3" /> Sort
              </Button>
            </div>
          </div>
          
          <TabsContent value="list" className="mt-0">
            <ApplicationList 
              applications={filteredApplications}
              onStatusUpdate={handleStatusUpdate}
              onUpdateNotes={handleUpdateNotes}
            />
          </TabsContent>
          
          <TabsContent value="kanban" className="mt-0">
            <ApplicationKanban 
              applications={filteredApplications}
              onStatusUpdate={handleStatusUpdate}
              onUpdateNotes={handleUpdateNotes}
            />
          </TabsContent>
        </Tabs>
      </div>
      
      <AddApplicationDialog 
        open={addDialogOpen} 
        onOpenChange={setAddDialogOpen}
        onAdd={handleAddApplication}
      />
    </DashboardLayout>
  );
};

export default ApplicationTracker;
