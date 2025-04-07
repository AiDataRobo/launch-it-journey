
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

interface SuccessViewProps {
  onClose: () => void;
}

const SuccessView: React.FC<SuccessViewProps> = ({ onClose }) => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <CheckCircle2 className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="mb-2 text-lg font-medium">Request Submitted</h3>
      <p className="mb-6 text-center text-gray-600">
        Your referral request has been submitted successfully. You'll be notified when there's an update.
      </p>
      <Button onClick={onClose}>Close</Button>
    </div>
  );
};

export default SuccessView;
