import { Button, Popover } from 'antd';
import FilterIcon from '@/shared/container/Icon/FilterIcon';
import { getUserBudgets } from '@/shared/actions/budgetService';
import Link from 'next/link';
import AddIcon from '@/shared/container/Icon/AddIcon';
import SubrouteHeader from '../container/Header/SubrouteHeader';
import { FilterContent } from './container/Filter/FilterContent';
import CardBudgetList from '../container/Card/CardBudgetList';
import type { TGetUserBudgetFilters } from '@/shared/models/budgetInterfaces';
import EmptySection from '@/shared/container/Section/EmptySection';

async function BudgetList({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const filter = {
    category: searchParams['category'] ?? undefined,
    status: searchParams['status'] ?? undefined,
  } as TGetUserBudgetFilters;

  const { data } = await getUserBudgets(filter);
  const budgets = data.budgets;

  return (
    <main className="min-h-screen flex flex-col">
      <SubrouteHeader
        title="Budget List"
        extraComponent={
          <Popover
            content={<FilterContent />}
            trigger="click"
            placement="bottomRight">
            <Button
              size="small"
              className="bg-ny-primary-100 !p-5 border-ny-primary-100 rounded-lg shrink-0 text-ny-primary-500"
              icon={<FilterIcon />}
            />
          </Popover>
        }
      />

      <section className="p-4 pb-24 flex flex-col flex-grow gap-2">
        {budgets.length > 0 ? (
          budgets.map((budget) => (
            <CardBudgetList key={budget.id} budget={budget} />
          ))
        ) : (
          <EmptySection
            message="We can't find what you're looking for."
            title="No budget found"
          />
        )}
      </section>

      <Link
        className="p-4 bg-white border-t sticky bottom-0"
        href={`/budget/add?callback-url=/budget/list`}>
        <Button
          type="primary"
          className="flex w-full items-center justify-center gap-1 bg-gradient-to-r from-ny-primary-500 to-ny-primary-300 border-none py-5">
          <AddIcon />
          <span>Add New Budget</span>
        </Button>
      </Link>
    </main>
  );
}

export default BudgetList;
