import './style.scss';
import { BudgetIcon } from '@/shared/container/Icon/BudgetIcon';
import { GuestIcon } from '@/shared/container/Icon/GuestIcon';
import { HeartIcon } from '@/shared/container/Icon/HeartIcon';
import { InspirationIcon } from '@/shared/container/Icon/InspirationIcon';
import { Progress } from 'antd';
import { ToDoIcon } from '@/shared/container/Icon/ToDoIcon';
import { VendorIcon } from '@/shared/container/Icon/VendorIcon';
import DashboardCard from '../card/DashboardCard';
import React from 'react';

const MyDashboardSection = () => {
  return (
    <section className="grid grid-cols-2 gap-3">
      <div className="col-span-2">
        <DashboardCard title="Progress" icon={<HeartIcon />}>
          <Progress
            percent={10}
            strokeColor={'#ffffff'}
            trailColor={'#FC9CA9'}
          />
        </DashboardCard>
      </div>
      <DashboardCard
        title="Inspirations"
        icon={<InspirationIcon />}
        stats="300 Photos"
      />
      <DashboardCard title="Vendors" icon={<VendorIcon />} stats="20 Vendors" />
      <div className="row-span-2">
        <DashboardCard
          title="Budget"
          icon={<BudgetIcon />}
          stats="RP 300.000.000"
        >
          <div className="flex items-center justify-center">
            <Progress
              type="circle"
              percent={50}
              strokeColor={'#ffffff'}
              trailColor={'#FC9CA9'}
              format={(Percent) => (
                <span className="text-caption-1 font-semibold my-auto">
                  {Percent}%
                </span>
              )}
            />
          </div>
        </DashboardCard>
      </div>
      <DashboardCard title="Guests" icon={<GuestIcon />} stats="300 Invited" />
      <DashboardCard title="To-Do List" icon={<ToDoIcon />} stats="10/20" />
    </section>
  );
};

export default MyDashboardSection;
