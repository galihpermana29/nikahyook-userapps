'use client';

import { TitledSection } from '@/shared/container/Section/TitledSection';
import { ArcElement, Chart as ChartJS, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useGetBudgetAllocations } from '../../usecase/useGetBudgetAllocations';
import { formatAllocationsData } from '../../repositories/formatAllocationsData';
import formatToRupiah from '@/shared/usecase/formatToRupiah';
import { SectionBudgetAllocationLoading } from '../Loading/SectionBudgetAllocationLoading';

function SectionBudgetAllocation() {
  ChartJS.register(ArcElement, Tooltip);
  const { data, isLoading } = useGetBudgetAllocations();
  if (isLoading || !data) return <SectionBudgetAllocationLoading />;
  const { allocations, chartData } = formatAllocationsData(data.data);

  return (
    <TitledSection title="Budget Allocation" navigateTo="/budget/list">
      <div className="mx-4 flex items-center p-5 gap-4 rounded-lg shadow">
        <div className="basis-1/2 md:basis-3/5">
          <Doughnut
            className="w-full"
            options={{
              plugins: { legend: undefined },
            }}
            data={chartData}
          />
        </div>
        <div className="grow shrink-0 flex flex-col gap-4">
          {allocations.map((allocation) => (
            <div
              key={
                allocation.label + allocation.nominal + allocation.percentage
              }>
              <div className="flex text-caption-3 justify-between gap-3 items-center">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-ny-primary-900"></div>
                  <h3 className="text-ny-gray-400">{allocation.label}</h3>
                </div>
                <p className="text-ny-info-500 font-medium">
                  {allocation.percentage}
                </p>
              </div>
              <p className="text-caption-2 font-semibold">
                {formatToRupiah(allocation.nominal)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </TitledSection>
  );
}

export default SectionBudgetAllocation;
