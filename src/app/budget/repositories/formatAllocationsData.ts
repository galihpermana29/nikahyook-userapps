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
      label: 'venue' as const,
      nominal: data.venue_nominal,
      percentage: data.venue_percentage,
    },
    {
      label: 'food' as const,
      nominal: data.food_nomnal,
      percentage: data.food_percentage,
    },
    {
      label: 'fashion' as const,
      nominal: data.fashion_nominal,
      percentage: data.fashion_percentage,
    },
    {
      label: 'service' as const,
      nominal: data.service_nominal,
      percentage: data.service_percentage,
    },
    {
      label: 'others' as const,
      nominal: data.other_nominal,
      percentage: data.other_percentage,
    },
  ];

  if (datasets[0].data.some((value) => isNaN(value))) {
    return {
      allocations,
      chartData: {
        labels: ['No Data'],
        datasets: [{ data: [100], backgroundColor: '#F1F1F1' }],
      },
    };
  }

  return { allocations, chartData: { labels, datasets } };
};
