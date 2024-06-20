import SectionBudgetAllocation from './Section/SectionBudgetAllocation';
import SectionBudgetList from './Section/SectionBudgetList';
import SectionGuest from './Section/SectionGuest';
import SectionHero from './Section/SectionHero';

function BudgetContainer() {
  return (
    <main className="flex flex-col gap-5 pb-24">
      <SectionHero />
      <SectionGuest />
      <SectionBudgetAllocation />
      <SectionBudgetList />
    </main>
  );
}

export default BudgetContainer;
