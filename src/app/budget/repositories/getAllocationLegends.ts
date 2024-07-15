import type { TBudgetCategory } from '@/shared/models/budgetInterfaces';

export const getAllocationLegendColors = (): Record<
  TBudgetCategory,
  string
> => {
  return {
    venue: '#6E025C',
    food: '#E60B6A',
    fashion: '#F76A8B',
    service: '#A5056A',
    others: '#FDCDCF',
  };
};
