'use client';

import { BudgetCheckbox } from '../BudgetCheckbox';
import type { TBudget } from '@/shared/models/budgetInterfaces';
import formatToRupiah from '@/shared/usecase/formatToRupiah';
import formatToCapitalWord from '@/shared/usecase/formatToCapitalWord';
import { BudgetTrash } from '../BudgetTrash';
import { useRouter } from 'next/navigation';

interface ICardBudgetList {
  budget: TBudget;
}

function CardBudgetList({ budget }: ICardBudgetList) {
  const isChecked = budget.status === 'paid';
  const router = useRouter();
  return (
    <div
      className="border rounded-lg py-2 px-3 flex justify-between items-center gap-3 cursor-pointer"
      onClick={() => {
        router.push(`/budget/edit/${budget.id}`);
      }}>
      <div className="flex items-center gap-3">
        <BudgetCheckbox key={budget.id} id={budget.id} isChecked={isChecked} />
        <div>
          <h3 className="text-caption-1 font-medium mb-1">{budget.name}</h3>
          <p className="text-caption-2 text-ny-gray-400">
            {formatToRupiah(budget.nominal)}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-end">
          <h4
            className={`text-caption-2 font-medium mb-1 ${
              isChecked ? 'text-ny-info-500' : 'text-[#F4C13F]'
            }`}>
            {isChecked ? 'Paid' : 'Need To Buy'}
          </h4>
          <p className="text-caption-3 text-ny-gray-400">
            {formatToCapitalWord(budget.category)}
          </p>
        </div>
        <BudgetTrash id={budget.id} />
      </div>
    </div>
  );
}

export default CardBudgetList;
