
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Users, 
  Calendar, 
  Clock
} from 'lucide-react';

interface QuickAccessTilesProps {
  stats?: {
    applications: number;
    referrals: number;
    interviews: number;
    pendingReferrals: number;
  }
}

const QuickAccessTiles: React.FC<QuickAccessTilesProps> = ({ 
  stats = {
    applications: 0,
    referrals: 0,
    interviews: 0,
    pendingReferrals: 0
  }
}) => {
  const tiles = [
    {
      title: 'Applications',
      icon: <Briefcase className="h-6 w-6 text-jobonboard-purple" />,
      value: stats.applications,
      link: '/application-tracker'
    },
    {
      title: 'Referrals',
      icon: <Users className="h-6 w-6 text-jobonboard-purple" />,
      value: stats.referrals,
      link: '/job-referral'
    },
    {
      title: 'Interviews',
      icon: <Calendar className="h-6 w-6 text-jobonboard-purple" />,
      value: stats.interviews,
      link: '/interviews'
    },
    {
      title: 'Pending',
      icon: <Clock className="h-6 w-6 text-jobonboard-purple" />,
      value: stats.pendingReferrals,
      badge: stats.pendingReferrals > 0 ? 'new' : undefined,
      link: '/job-referral?tab=my-requests'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {tiles.map((tile, index) => (
        <Link 
          key={index}
          to={tile.link}
          className="flex flex-col items-center justify-center p-4 bg-white border rounded-lg hover:shadow-md transition-shadow relative"
        >
          {tile.badge && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 min-w-5 flex items-center justify-center px-1">
              {tile.badge}
            </span>
          )}
          {tile.icon}
          <span className="mt-2 text-2xl font-semibold">{tile.value}</span>
          <span className="text-sm text-gray-500">{tile.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default QuickAccessTiles;
