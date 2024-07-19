import { TitledSection } from '@/shared/container/Section/TitledSection';
import CardBudgetList from '../Card/CardBudgetList';
import { Button } from 'antd';
import AddIcon from '@/shared/container/Icon/AddIcon';
import Link from 'next/link';
import { getUserBudgets } from '@/shared/actions/budgetService';

async function SectionBudgetList() {
  const { data } = await getUserBudgets();
  const budgets = data.budgets;

  return (
    <TitledSection title="Budget List" navigateTo="/budget/list">
      <div className="px-4">
        <Link href={'/budget/add'}>
          <Button
            type="primary"
            className="flex w-full mb-3 items-center justify-center gap-1 bg-gradient-to-r from-ny-primary-500 to-ny-primary-300 border-none py-5">
            <AddIcon />
            <span>Add New Budget</span>
          </Button>
        </Link>
        <div className="space-y-2">
          {budgets.map((budget) => (
            <CardBudgetList key={budget.id} budget={budget} />
          ))}
        </div>
      </div>
    </TitledSection>
  );
}

export default SectionBudgetList;
