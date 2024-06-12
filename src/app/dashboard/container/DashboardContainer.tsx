'use client';

import {
  DashboardTabContent,
  DashboardTabHeader,
} from './tabs/CustomDashboardTabs';
import HeaderSection from './Section/HeaderSection';
import MyDashboardSection from './Section/MyDashboardSection';
import MyWishlistSection from './Section/MyWishlistSection';
import React, { useState } from 'react';

const tabs = [
  {
    key: 'dashboard',
    label: 'My Dashboard',
    content: <MyDashboardSection />,
  },
  {
    key: 'wishlist',
    label: 'My Wishlist',
    content: <MyWishlistSection />,
  },
];

type IDashboardContainer = {
  profile_url: string;
};

const DashboardContainer = ({ profile_url }: IDashboardContainer) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <HeaderSection profile_image_url={profile_url}>
        <DashboardTabHeader
          activeTab={activeTab}
          onTabChange={handleTabChange}
          tabs={tabs}
        />
      </HeaderSection>
      <DashboardTabContent activeTab={activeTab} tabs={tabs} />
    </div>
  );
};

export default DashboardContainer;
