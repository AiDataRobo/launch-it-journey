
import React from 'react';

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex mb-8 border-b border-gray-200">
      <button 
        className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
          activeTab === 'mentors' 
            ? 'border-jobonboard-purple text-jobonboard-purple' 
            : 'border-transparent text-gray-500 hover:text-gray-700'
        }`}
        onClick={() => onTabChange('mentors')}
      >
        1:1 Mentorship
      </button>
      <button 
        className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
          activeTab === 'community' 
            ? 'border-jobonboard-purple text-jobonboard-purple' 
            : 'border-transparent text-gray-500 hover:text-gray-700'
        }`}
        onClick={() => onTabChange('community')}
      >
        Community Forum
      </button>
    </div>
  );
};

export default TabNavigation;
