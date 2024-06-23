import {
  DashboardTabHeader,
  DashboardTabContent,
} from './tabs/CustomDashboardTabs';
import HeaderSection from './Section/HeaderSection';
import MyDashboardSection from './Section/MyDashboardSection';
import MyWishlistSection from './Section/MyWishlistSection';
import React from 'react';

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
  activeTab: string;
};

const DashboardContainer = ({ activeTab }: IDashboardContainer) => {
  return (
    <div>
      <HeaderSection>
        <DashboardTabHeader activeTab={activeTab} tabs={tabs} />
      </HeaderSection>
      <DashboardTabContent activeTab={activeTab} tabs={tabs} />
    </div>
  );
};

export default DashboardContainer;
