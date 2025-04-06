
import React, { useState } from 'react';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Eye, 
  MessageCircle,
  RefreshCcw 
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ReferralRequest } from '@/hooks/use-job-referrals';
import { useAuth } from '@/context/AuthContext';
import { Link } from 'react-router-dom';

interface MyReferralsProps {
  referralRequests: ReferralRequest[];
}

const MyReferrals: React.FC<MyReferralsProps> = ({ referralRequests }) => {
  const [selectedReferral, setSelectedReferral] = useState<string | null>(null);
  const { user } = useAuth();
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Pending':
        return <Clock className="mr-1 h-4 w-4 text-yellow-500" />;
      case 'Accepted':
        return <CheckCircle className="mr-1 h-4 w-4 text-green-500" />;
      case 'Rejected':
        return <XCircle className="mr-1 h-4 w-4 text-red-500" />;
      case 'Expired':
        return <AlertCircle className="mr-1 h-4 w-4 text-gray-500" />;
      default:
        return null;
    }
  };
  
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Accepted':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      case 'Expired':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const viewReferralDetails = (id: string) => {
    setSelectedReferral(id);
  };
  
  const selectedReferralData = referralRequests.find(r => r.id === selectedReferral);
  
  if (!user) {
    return (
      <div className="flex h-60 flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
        <h3 className="text-lg font-medium">Authentication Required</h3>
        <p className="text-sm text-gray-500">Please sign in to view your referral requests</p>
        <Link to="/login">
          <Button className="mt-4 bg-jobonboard-purple hover:bg-jobonboard-purple-light">
            Sign In
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">My Referral Requests</h2>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-1"
        >
          <RefreshCcw className="h-3.5 w-3.5" />
          <span>Refresh</span>
        </Button>
      </div>
      
      {referralRequests.length === 0 ? (
        <div className="flex h-60 flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
            <Clock className="h-6 w-6 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium">No referral requests yet</h3>
          <p className="text-sm text-gray-500">Your referral requests will appear here</p>
          <Button className="mt-4 bg-jobonboard-purple hover:bg-jobonboard-purple-light">
            Browse Available Jobs
          </Button>
        </div>
      ) : (
        <div className="overflow-hidden rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead>Job Position</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Requested</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {referralRequests.map((referral) => (
                <TableRow 
                  key={referral.id}
                  className="hover:bg-gray-50"
                >
                  <TableCell className="font-medium">{referral.job.title}</TableCell>
                  <TableCell>{referral.job.company}</TableCell>
                  <TableCell>{referral.requested_at}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Badge variant="outline" className={getStatusClass(referral.status)}>
                        {getStatusIcon(referral.status)} {referral.status}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 px-2"
                        onClick={() => viewReferralDetails(referral.id)}
                      >
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">View details</span>
                      </Button>
                      
                      {referral.status === 'Accepted' && (
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <MessageCircle className="h-4 w-4" />
                          <span className="sr-only">Message referrer</span>
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
      
      <Dialog open={selectedReferral !== null} onOpenChange={() => setSelectedReferral(null)}>
        <DialogContent className="sm:max-w-[500px]">
          {selectedReferralData && (
            <>
              <DialogHeader>
                <DialogTitle>Referral Request Details</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-4 py-4">
                <div className="rounded-lg bg-gray-50 p-4">
                  <div className="mb-4 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500">Job Position</p>
                      <p className="font-medium">{selectedReferralData.job.title}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Company</p>
                      <p className="font-medium">{selectedReferralData.job.company}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Requested On</p>
                      <p>{selectedReferralData.requested_at}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Status</p>
                      <div className="flex items-center">
                        <Badge 
                          variant="outline" 
                          className={getStatusClass(selectedReferralData.status)}
                        >
                          {getStatusIcon(selectedReferralData.status)} {selectedReferralData.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  {selectedReferralData.provider_name && (
                    <div className="mb-4 rounded border border-gray-200 p-3">
                      <p className="text-xs text-gray-500">Referrer</p>
                      <div className="mt-1 flex items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                          {selectedReferralData.provider_name.charAt(0)}
                        </div>
                        <p className="ml-2 font-medium">{selectedReferralData.provider_name}</p>
                      </div>
                    </div>
                  )}
                  
                  {selectedReferralData.feedback && (
                    <div>
                      <p className="text-xs text-gray-500">Feedback</p>
                      <p className="mt-1 rounded bg-white p-3 text-sm">
                        {selectedReferralData.feedback}
                      </p>
                    </div>
                  )}
                </div>
                
                <div>
                  <p className="mb-2 text-sm font-medium">Your Request Reason</p>
                  <div className="rounded-lg border border-gray-200 p-3 text-sm">
                    {selectedReferralData.reason}
                  </div>
                </div>
                
                {selectedReferralData.resume_url && (
                  <div className="flex justify-between">
                    <p className="text-sm">
                      <span className="font-medium">Resume:</span> {selectedReferralData.resume_url.split('/').pop()}
                    </p>
                    <Button variant="link" className="h-auto p-0 text-jobonboard-purple">
                      Download
                    </Button>
                  </div>
                )}
              </div>
              
              <div className="flex justify-end space-x-2">
                {selectedReferralData.status === 'Rejected' && (
                  <Button 
                    className="bg-jobonboard-purple hover:bg-jobonboard-purple-light"
                    onClick={() => setSelectedReferral(null)}
                  >
                    Find Similar Jobs
                  </Button>
                )}
                
                {selectedReferralData.status === 'Pending' && (
                  <Button 
                    variant="destructive"
                    onClick={() => setSelectedReferral(null)}
                  >
                    Cancel Request
                  </Button>
                )}
                
                <Button variant="outline" onClick={() => setSelectedReferral(null)}>
                  Close
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MyReferrals;
