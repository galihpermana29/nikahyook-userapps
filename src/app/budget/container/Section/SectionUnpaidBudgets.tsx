import { getUserBudgets } from '@/shared/actions/budgetService';
import React from 'react';
import { BudgetGroup } from '../Group/BudgetGroup';

export const SectionUnpaidBudgets = async () => {
  const { data } = await getUserBudgets({ status: 'need-to-pay' });
  return (
    <div className="h-full pb-4 grid grid-flow-col overflow-x-auto no-scrollbar w-full gap-3 text-black">
      {data.budgets.map((budget) => (
        <BudgetGroup
          key={budget.id}
          name={budget.name}
          nominal={budget.nominal}
        />
      ))}
    </div>
  );
};
