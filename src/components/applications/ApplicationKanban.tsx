
import React from 'react';
import { ApplicationData } from './types';
import { applicationStatusOptions } from './data/applicationData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ApplicationKanbanProps {
  applications: ApplicationData[];
  onStatusUpdate: (id: number, status: string) => void;
  onUpdateNotes: (id: number, notes: string) => void;
}

const ApplicationKanban: React.FC<ApplicationKanbanProps> = ({ 
  applications,
  onStatusUpdate,
  onUpdateNotes
}) => {
  // Group applications by status
  const columns = applicationStatusOptions.map(status => {
    const appsInStatus = applications.filter(app => app.status === status.value);
    
    return {
      status: status.value,
      applications: appsInStatus
    };
  });

  return (
    <div className="overflow-x-auto pb-6">
      <div className="flex gap-4" style={{ minWidth: 'max-content' }}>
        {columns.map(column => (
          <Card key={column.status} className="w-80 shrink-0">
            <CardHeader className="py-3 px-4">
              <div className="flex justify-between items-center">
                <CardTitle className="text-sm font-medium">{column.status}</CardTitle>
                <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium">
                  {column.applications.length}
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-2">
              {column.applications.length === 0 ? (
                <div className="h-20 flex items-center justify-center border border-dashed rounded-md">
                  <p className="text-sm text-muted-foreground">No applications</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {column.applications.map(app => (
                    <div 
                      key={app.id} 
                      className="bg-white shadow-sm rounded-md p-3 border cursor-pointer hover:shadow-md transition-all"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-sm">{app.jobTitle}</h4>
                          <p className="text-xs text-muted-foreground">{app.company}</p>
                        </div>
                        {app.logo && (
                          <img 
                            src={app.logo} 
                            alt={app.company} 
                            className="h-8 w-8 rounded object-cover border"
                          />
                        )}
                      </div>
                      <div className="mt-2 text-xs">
                        <p className="text-muted-foreground">Applied: {new Date(app.appliedDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ApplicationKanban;
