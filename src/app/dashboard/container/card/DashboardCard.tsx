import React from 'react';

type IDashboardCard = {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  stats?: string;
};

const DashboardCard = ({ title, icon, children, stats }: IDashboardCard) => {
  return (
    <div className="text-white w-full min-h-[116px] h-full px-4 py-2 flex flex-col justify-between bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-ny-primary-300 to-ny-primary-500 rounded-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-caption-1 font-medium">{title}</h3>
        {icon}
      </div>
      {children}
      {stats && <p className="text-caption-1 font-semibold">{stats}</p>}
    </div>
  );
};

export default DashboardCard;
