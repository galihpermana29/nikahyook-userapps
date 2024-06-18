import DashboardTabs from '../tabs/DashboardTabs';
import React from 'react';

const MyWishlistSection = () => {
  return (
    <section>
      <DashboardTabs defaultTab={'inspiration'} />
    </section>
  );
};

export default MyWishlistSection;
