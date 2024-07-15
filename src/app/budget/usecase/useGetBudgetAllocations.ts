'use client';

import { getBudgetAllocations } from '@/shared/actions/budgetService';
import { TBudgetAllocation } from '@/shared/models/budgetInterfaces';
import { IFetchGeneralResponse } from '@/shared/models/generalInterfaces';
import { useQuery } from 'react-query';

export const useGetBudgetAllocations = () => {
  return useQuery<IFetchGeneralResponse<TBudgetAllocation>, Error>({
    queryKey: ['budget-allocations'],
    queryFn: () => getBudgetAllocations(),
  });
};
