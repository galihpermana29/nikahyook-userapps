import React from 'react';
import type { TBudgetCategory } from '@/shared/models/budgetInterfaces';
import { getAllocationLegendColors } from '../repositories/getAllocationLegends';

export const AllocationLegendNode = ({ type }: { type: TBudgetCategory }) => {
  const legends = getAllocationLegendColors();
  const backgroundColor = legends[type] || 'var(--ny-primary-600)';

  return <div className="w-2 h-2 rounded-full" style={{ backgroundColor }} />;
};
