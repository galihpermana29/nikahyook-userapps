import type { TBudgetCategory } from '@/shared/models/budgetInterfaces';

export const getAllocationCategorySelectOptions = (): {
  label: string;
  value: TBudgetCategory;
}[] => {
  return [
    { label: 'Venue', value: 'venue' },
    { label: 'Food', value: 'food' },
    { label: 'Service', value: 'service' },
    { label: 'Fashion', value: 'fashion' },
    { label: 'Others', value: 'others' },
  ];
};
