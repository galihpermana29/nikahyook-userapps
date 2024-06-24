'use client';

import { TitledSection } from '@/shared/container/Section/TitledSection';
import CardBudgetList from '../Card/CardBudgetList';
import { Button } from 'antd';
import AddIcon from '@/shared/container/Icon/AddIcon';
import Link from 'next/link';

function SectionBudgetList() {
  return (
    <TitledSection title="Budget List" navigateTo="/budget/list">
      <div className="px-4">
        <Link href={'/budget/add'}>
          <Button
            type="primary"
            className="flex w-full mb-3 items-center justify-center gap-1 bg-gradient-to-r from-ny-primary-500 to-ny-primary-300 border-none py-5">
            <AddIcon />
            <span> Add New Budget</span>
          </Button>
        </Link>
        <div className="space-y-2">
          {[...Array(10)].map((_, index) => (
            <CardBudgetList
              key={index}
              onCheckClick={() => {}}
              isChecked={index > 3}
            />
          ))}
        </div>
      </div>
    </TitledSection>
  );
}

export default SectionBudgetList;
