'use client';

import { updateBudget } from '@/shared/actions/budgetService';
import type {
  TBudget,
  TUpdateBudgetPayload,
} from '@/shared/models/budgetInterfaces';
import { IFetchGeneralResponse } from '@/shared/models/generalInterfaces';
import { message } from 'antd';
import { useMutation } from 'react-query';

export const useUpdateBudgetStatus = (id: TBudget['id']) => {
  return useMutation<
    IFetchGeneralResponse<number>,
    Error,
    TUpdateBudgetPayload
  >({
    mutationKey: ['update-budget-status'],
    mutationFn: async (payload: TUpdateBudgetPayload) =>
      updateBudget(payload, id),
    onError: (err) => {
      message.error(err.message);
    },
    onSuccess: () => {
      message.success('Successfully updated budget status!');
    },
  });
};
