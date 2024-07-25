import { Suspense } from 'react';
import SectionBudgetAllocation from './Section/SectionBudgetAllocation';
import SectionBudgetList from './Section/SectionBudgetList';
import SectionGuest from './Section/SectionGuest';
import SectionHero from './Section/SectionHero';
import { SectionHeroLoading } from './Loading/SectionHeroLoading';
import { SectionGuestLoading } from './Loading/SectionGuestLoading';
import { SectionBudgetAllocationLoading } from './Loading/SectionBudgetAllocationLoading';
import { SectionBudgetListLoading } from './Loading/SectionBudgetListLoading';

function BudgetContainer() {
  return (
    <main className="flex flex-col gap-5 pb-24 md:mt-5">
      <Suspense fallback={<SectionHeroLoading />}>
        <SectionHero />
      </Suspense>
      <Suspense fallback={<SectionGuestLoading />}>
        <SectionGuest />
      </Suspense>
      <Suspense fallback={<SectionBudgetAllocationLoading />}>
        <SectionBudgetAllocation />
      </Suspense>
      <Suspense fallback={<SectionBudgetListLoading />}>
        <SectionBudgetList />
      </Suspense>
    </main>
  );
}

export default BudgetContainer;
