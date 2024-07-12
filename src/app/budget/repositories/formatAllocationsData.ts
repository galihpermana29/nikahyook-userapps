import type {
  TAllocation,
  TBudgetAllocation,
} from '@/shared/models/budgetInterfaces';
import type { ChartDataset } from 'chart.js';

type TAllocationsChartData = {
  labels: string[];
  datasets: ChartDataset<'doughnut', number[]>[];
};

export const formatAllocationsData = (
  data: TBudgetAllocation
): { allocations: TAllocation[]; chartData: TAllocationsChartData } => {
  const labels = ['Venue', 'Food', 'Fashion', 'Service', 'Others'];
  const datasets = [
    {
      data: [
        parseFloat(data.venue_percentage.replace('%', '')),
        parseFloat(data.food_percentage.replace('%', '')),
        parseFloat(data.fashion_percentage.replace('%', '')),
        parseFloat(data.service_percentage.replace('%', '')),
        parseFloat(data.other_percentage.replace('%', '')),
      ],
      backgroundColor: ['#6E025C', '#E60B6A', '#F76A8B', '#A5056A', '#FDCDCF'],
    },
  ];

  const allocations: TAllocation[] = [
    {
      label: 'Venue',
      nominal: data.venue_nominal,
      percentage: data.venue_percentage,
    },
    {
      label: 'Food',
      nominal: data.food_nomnal,
      percentage: data.food_percentage,
    },
    {
      label: 'Fashion',
      nominal: data.fashion_nominal,
      percentage: data.fashion_percentage,
    },
    {
      label: 'Service',
      nominal: data.service_nominal,
      percentage: data.service_percentage,
    },
    {
      label: 'Others',
      nominal: data.other_nominal,
      percentage: data.other_percentage,
    },
  ];

  return { allocations, chartData: { labels, datasets } };
};
