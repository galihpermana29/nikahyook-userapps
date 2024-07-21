'use client';

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
import { useGetStatistics } from '../../usecase/useGetStatistics';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import formatToRupiah from '@/shared/usecase/formatToRupiah';

const MyDashboardSection = () => {
  const { data: result, isLoading, isError, error } = useGetStatistics();

  if (isLoading)
    return (
      <div className="flex w-full h-[28rem] animate-pulse bg-ny-gray-300 rounded-lg mt-4" />
    );
  if (isError) return <CustomErrorBoundary error={error} />;
  if (!result) return;

  const { budget, guests, inspirations, todo, vendors } = result.data;

  return (
    <section className="grid grid-cols-2 gap-3 pt-3">
      <div className="col-span-2">
        <DashboardCard title="To-Do Progress" icon={<HeartIcon />}>
          <Progress
            percent={todo.progress}
            strokeColor={'#ffffff'}
            trailColor={'#FC9CA9'}
          />
        </DashboardCard>
      </div>
      <DashboardCard
        title="Inspirations"
        icon={<InspirationIcon />}
        stats={`${inspirations} photos`}
      />
      <DashboardCard
        title="Vendors"
        icon={<VendorIcon />}
        stats={`${vendors} vendors`}
      />
      <div className="row-span-2">
        <DashboardCard
          title="Budget"
          icon={<BudgetIcon />}
          stats={formatToRupiah(budget.total)}>
          <div className="flex items-center justify-center">
            <Progress
              type="circle"
              percent={parseFloat(budget.progress.replace('%', ''))}
              strokeColor={'#ffffff'}
              trailColor={'#FC9CA9'}
              format={(percent) => (
                <span className="text-caption-1 font-semibold my-auto">
                  {percent}%
                </span>
              )}
            />
          </div>
        </DashboardCard>
      </div>
      <DashboardCard
        title="Guests"
        icon={<GuestIcon />}
        stats={`${guests} invited`}
      />
      <DashboardCard
        title="To-Do List"
        icon={<ToDoIcon />}
        stats={`${todo.done}/${todo.total}`}
      />
    </section>
  );
};

export default MyDashboardSection;
