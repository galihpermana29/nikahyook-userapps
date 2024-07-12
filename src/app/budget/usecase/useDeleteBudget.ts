'use client';

import { deleteBudget } from '@/shared/actions/budgetService';
import type { TBudget } from '@/shared/models/budgetInterfaces';
import { IFetchGeneralResponse } from '@/shared/models/generalInterfaces';
import { useMutation, useQueryClient } from 'react-query';

export const useDeleteBudget = (id: TBudget['id']) => {
  const queryClient = useQueryClient();
  return useMutation<IFetchGeneralResponse<number>, Error>({
    mutationKey: ['delete-budget'],
    mutationFn: async () => deleteBudget(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['budget-allocations']);
    },
  });
};
