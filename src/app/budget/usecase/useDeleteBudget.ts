'use client';

import { deleteBudget } from '@/shared/actions/budgetService';
import type { TBudget } from '@/shared/models/budgetInterfaces';
import { IFetchGeneralResponse } from '@/shared/models/generalInterfaces';
import { message } from 'antd';
import { useMutation, useQueryClient } from 'react-query';

export const useDeleteBudget = (id: TBudget['id']) => {
  const queryClient = useQueryClient();
  return useMutation<IFetchGeneralResponse<number>, Error>({
    mutationKey: ['delete-budget'],
    mutationFn: async () => deleteBudget(id),
    onSuccess: () => {
      message.success('Successfully deleted budget!');
      queryClient.invalidateQueries(['budget-allocations']);
    },
    onError: (err) => {
      message.error(err.message);
    },
  });
};
