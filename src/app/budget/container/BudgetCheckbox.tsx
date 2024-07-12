'use client';

import { Checkbox, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useUpdateBudgetStatus } from '../usecase/useUpdateBudgetStatus';
import type { TBudget } from '@/shared/models/budgetInterfaces';

interface IBudgetCheckboxProps {
  id: TBudget['id'];
  isChecked: boolean;
}

export const BudgetCheckbox = ({ id, isChecked }: IBudgetCheckboxProps) => {
  const [checked, setChecked] = useState(isChecked);
  const { mutate, isError, error } = useUpdateBudgetStatus(id);

  const onCheckClick = () => {
    // do an optimistic update
    setChecked((prev) => !prev);
    mutate({ status: checked ? 'need-to-pay' : 'paid' });
  };

  useEffect(() => {
    // rollback optimistic update if mutation error'd
    if (isError) {
      message.error(`Failed to update budget status! ${error}`);
      return setChecked(isChecked);
    }
  }, [isError]);

  return <Checkbox checked={checked} onClick={onCheckClick} />;
};
