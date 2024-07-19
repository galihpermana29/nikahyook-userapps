import AddIcon from '@/shared/container/Icon/AddIcon';
import { TitledSection } from '@/shared/container/Section/TitledSection';
import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

export const SectionBudgetListLoading = () => {
  return (
    <TitledSection title="Budget List" navigateTo="/budget/list">
      <div className="px-4">
        <Link href={'/budget/add'}>
          <Button
            type="primary"
            className="flex w-full mb-3 items-center justify-center gap-1 bg-gradient-to-r from-ny-primary-500 to-ny-primary-300 border-none py-5">
            <AddIcon />
            <span>Add New Budget</span>
          </Button>
        </Link>
        <div className="space-y-2">
          {Array.from(Array(10).keys()).map((index) => (
            <div
              key={index}
              className="h-12 w-full rounded-md animate-pulse bg-ny-gray-100"
            />
          ))}
        </div>
      </div>
    </TitledSection>
  );
};
