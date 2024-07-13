'use client';

import { Button, Popover } from 'antd';
import CardBudgetList from '../../container/Card/CardBudgetList';
import FormButtonGroup from '../../container/Group/FormButtonGroup';
import SubrouteHeader from '../../container/Header/SubrouteHeader';
import FilterIcon from '@/shared/container/Icon/FilterIcon';

function BudgetListContainer() {
  return (
    <main className="max-w-screen-md mx-auto md:mt-5">
      <SubrouteHeader
        title="Budget List"
        extraComponent={
          <Popover content={undefined} trigger="click" placement="bottomRight">
            <Button
              size="small"
              className="bg-ny-primary-100 !p-5 border-ny-primary-100 rounded-lg shrink-0 text-ny-primary-500"
              icon={<FilterIcon />}
            />
          </Popover>
        }
      />

      <section className="p-4 pb-24 flex flex-col gap-2">
        {[...Array(10)].map((_, index) => (
          <CardBudgetList
            key={index}
            onCheckClick={() => {}}
            isChecked={index > 3}
          />
        ))}
      </section>

      <FormButtonGroup onCancel={() => {}} onSubmit={() => {}} />
    </main>
  );
}

export default BudgetListContainer;
