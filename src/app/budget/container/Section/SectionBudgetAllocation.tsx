'use client';

import { TitledSection } from '@/shared/container/Section/TitledSection';
import { ArcElement, ChartDataset, Chart as ChartJS, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

const dummyDataset: ChartDataset<'doughnut', number[]>[] = [
  {
    data: [40, 20, 20, 10, 10],
    backgroundColor: ['#6E025C', '#E60B6A', '#F76A8B', '#A5056A', '#FDCDCF'],
  },
];

function SectionBudgetAllocation() {
  ChartJS.register(ArcElement, Tooltip);

  return (
    <TitledSection title="Budget Allocation" navigateTo="/budget/list">
      <div className="mx-4 flex items-center p-5 gap-4 rounded-lg shadow">
        <div className="basis-1/2 sm:basis-1/3 md:basis-1/4">
          <Doughnut
            className="w-full"
            options={{
              plugins: { legend: undefined },
            }}
            data={{
              labels: ['Venue', 'Food', 'Fashion', 'Service', 'Others'],
              datasets: dummyDataset,
            }}
          />
        </div>
        <div className="grow shrink-0 flex flex-col gap-4">
          <div>
            <div className="flex text-caption-3 justify-between gap-3 items-center">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-ny-primary-900"></div>
                <h3 className="text-ny-gray-400">Venue</h3>
              </div>
              <p className="text-ny-info-500 font-medium">40%</p>
            </div>
            <p className="text-caption-2 font-semibold">Rp50.000.000</p>
          </div>

          <div>
            <div className="flex text-caption-3 justify-between gap-3 items-center">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-ny-primary-500"></div>
                <h3 className="text-ny-gray-400">Food</h3>
              </div>
              <p className="text-ny-info-500 font-medium">40%</p>
            </div>
            <p className="text-caption-2 font-semibold">Rp50.000.000</p>
          </div>

          <div>
            <div className="flex text-caption-3 justify-between gap-3 items-center">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-ny-primary-300"></div>
                <h3 className="text-ny-gray-400">Fashion</h3>
              </div>
              <p className="text-ny-info-500 font-medium">40%</p>
            </div>
            <p className="text-caption-2 font-semibold">Rp50.000.000</p>
          </div>

          <div>
            <div className="flex text-caption-3 justify-between gap-3 items-center">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-ny-primary-700"></div>
                <h3 className="text-ny-gray-400">Service</h3>
              </div>
              <p className="text-ny-info-500 font-medium">40%</p>
            </div>
            <p className="text-caption-2 font-semibold">Rp50.000.000</p>
          </div>

          <div>
            <div className="flex text-caption-3 justify-between gap-3 items-center">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-ny-primary-100"></div>
                <h3 className="text-ny-gray-400">Others</h3>
              </div>
              <p className="text-ny-info-500 font-medium">40%</p>
            </div>
            <p className="text-caption-2 font-semibold">Rp50.000.000</p>
          </div>
        </div>
      </div>
    </TitledSection>
  );
}

export default SectionBudgetAllocation;
