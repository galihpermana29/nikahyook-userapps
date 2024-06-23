import { BottomNav } from '@/shared/container/Navigation/BottomNav';
import DashboardContainer from './container/DashboardContainer';
import React from 'react';

type IDashboard = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

const Dashboard = async ({ searchParams }: IDashboard) => {
  const activeTab = (searchParams?.tab as string) || 'dashboard';

  return (
    <div className="bg-ny-gray-50">
      <DashboardContainer activeTab={activeTab} />
      <BottomNav />
    </div>
  );
};

export default Dashboard;
