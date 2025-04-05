
import React from 'react';
import { ApplicationData } from './types';
import ApplicationCard from './ApplicationCard';

interface ApplicationListProps {
  applications: ApplicationData[];
  onStatusUpdate: (id: number, status: string) => void;
  onUpdateNotes: (id: number, notes: string) => void;
}

const ApplicationList: React.FC<ApplicationListProps> = ({ 
  applications,
  onStatusUpdate,
  onUpdateNotes
}) => {
  if (applications.length === 0) {
    return (
      <div className="py-12 text-center bg-muted/20 rounded-lg">
        <p className="text-muted-foreground">No applications found matching your filters.</p>
      </div>
    );
  }

  return (
    <div>
      {applications.map(application => (
        <ApplicationCard 
          key={application.id} 
          application={application}
          onStatusUpdate={onStatusUpdate}
          onUpdateNotes={onUpdateNotes}
        />
      ))}
    </div>
  );
};

export default ApplicationList;
