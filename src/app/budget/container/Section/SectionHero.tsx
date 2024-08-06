import { getUserBudgets } from '@/shared/actions/budgetService';
import HeaderDefault from '@/shared/container/Header/HeaderDefault';
import formatToRupiah from '@/shared/usecase/formatToRupiah';
import { Progress } from 'antd';
import { Suspense } from 'react';
import { SectionUnpaidBudgets } from './SectionUnpaidBudgets';
import { SectionUnpaidBudgetsLoading } from '../Loading/SectionUnpaidBudgetsLoading';

async function SectionHero() {
  const { data } = await getUserBudgets();

  return (
    <section className="text-white relative h-full -mb-[4.25rem] bg-gradient-to-r from-ny-primary-500 via-ny-primary-400 to-ny-primary-300 py-5 px-4 flex flex-col gap-6 md:rounded-lg">
      <Suspense
        fallback={
          <div className="w-full h-10 rounded-md animate-pulse bg-ny-gray-200" />
        }>
        <HeaderDefault callbackUrl="/budget" />
      </Suspense>

      <div className="grid grid-cols-2 gap-2 text-caption-2">
        <div>
          <h2>Total Budget</h2>
          <p className="text-heading-6 font-bold line-clamp-1">
            {formatToRupiah(parseInt(data.total_budget))}
          </p>
        </div>
        <div>
          <h2>Total Spend</h2>
          <p className="text-heading-6 font-bold line-clamp-1">
            {formatToRupiah(parseInt(data.total_spend))}
          </p>
        </div>
      </div>

      <div>
        <div className="flex justify-between gap-5 text-caption-1 font-medium">
          <h2>Progress</h2>
          <p>{data.progress}%</p>
        </div>
        <Progress
          percent={parseFloat(data.progress)}
          showInfo={false}
          strokeColor="#ffffff"
          trailColor="#FC9CA9"
        />
      </div>

      <Suspense fallback={<SectionUnpaidBudgetsLoading />}>
        <SectionUnpaidBudgets />
      </Suspense>

      {data.budgets.length > 0 && data.total_budget !== data.total_spend ? (
        <div className="bg-white h-[21%] z-0 left-0 absolute bottom-0 w-full" />
      ) : null}
    </section>
  );
}

export default SectionHero;
