import { TitledSection } from '@/shared/container/Section/TitledSection';
import React from 'react';

export const SectionBudgetAllocationLoading = () => {
  return (
    <TitledSection title="Budget Allocation" navigateTo="/budget/list">
      <div className="mx-4 flex items-center p-5 gap-4 animate-pulse bg-gray-100 rounded-lg shadow min-h-72 sm:min-h-96" />
    </TitledSection>
  );
};
