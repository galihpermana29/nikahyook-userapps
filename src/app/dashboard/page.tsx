import React from 'react';
import DashboardContainer from './container/DashboardContainer';
import { BottomNav } from '@/shared/container/Navigation/BottomNav';
import { getServerSession } from '@/shared/usecase/getServerSession';
import { getUserDetail } from '@/shared/actions/userService';

const Dashboard = async () => {
  const session = await getServerSession();

  const { data } = await getUserDetail(session.user_id);

  if (typeof data === 'string') {
    throw Error(data);
  }

  return (
    <div className="bg-ny-gray-50">
      <DashboardContainer profile_url={data.data.profile_image_uri} />
      <BottomNav />
    </div>
  );
};

export default Dashboard;
