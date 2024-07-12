'use client';

import type { TBudget } from '@/shared/models/budgetInterfaces';
import React from 'react';
import { useDeleteBudget } from '../usecase/useDeleteBudget';
import { TrashIcon } from '@/shared/container/Icon/TrashIcon';

export const BudgetTrash = ({ id }: { id: TBudget['id'] }) => {
  const { mutate } = useDeleteBudget(id);

  return (
    <TrashIcon
      className="hover:cursor-pointer"
      onClick={(e) => {
        e.preventDefault();
        mutate();
      }}
    />
  );
};
