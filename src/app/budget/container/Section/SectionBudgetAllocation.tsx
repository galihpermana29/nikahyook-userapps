'use client';

import { TitledSection } from '@/shared/container/Section/TitledSection';
import { ArcElement, Chart as ChartJS, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useGetBudgetAllocations } from '../../usecase/useGetBudgetAllocations';
import { formatAllocationsData } from '../../repositories/formatAllocationsData';
import formatToRupiah from '@/shared/usecase/formatToRupiah';
import { SectionBudgetAllocationLoading } from '../Loading/SectionBudgetAllocationLoading';
import { AllocationLegendNode } from '../AllocationLegendNode';
import formatToCapitalWord from '@/shared/usecase/formatToCapitalWord';

function SectionBudgetAllocation() {
  ChartJS.register(ArcElement, Tooltip);
  const { data, isLoading } = useGetBudgetAllocations();
  if (isLoading || !data) return <SectionBudgetAllocationLoading />;
  const { allocations, chartData } = formatAllocationsData(data.data);

  return (
    <TitledSection title="Budget Allocation" navigateTo="/budget/list">
      <div className="mx-4 flex items-center p-5 gap-4 sm:gap-8 rounded-lg shadow">
        <div className="basis-1/2 sm:basis-1/3 w-full shrink-0 flex justify-center">
          <Doughnut className="w-full shrink-0" data={chartData} />
        </div>
        <div className="flex flex-col gap-4 w-full">
          {allocations.map((allocation) => (
            <div
              className="flex flex-col gap-1 w-full"
              key={
                allocation.label + allocation.nominal + allocation.percentage
              }>
              <div className="flex text-caption-3 justify-between gap-3 items-center w-full">
                <div className="flex items-center gap-2">
                  <AllocationLegendNode type={allocation.label} />
                  <h3 className="text-ny-gray-400 text-caption-1">
                    {formatToCapitalWord(allocation.label)}
                  </h3>
                </div>
                <p className="text-ny-info-500 font-medium text-caption-1">
                  {allocation.percentage}
                </p>
              </div>
              <p className="font-semibold text-caption-1 line-clamp-1">
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
