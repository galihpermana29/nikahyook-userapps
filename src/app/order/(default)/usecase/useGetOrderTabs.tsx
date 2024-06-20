interface Tab extends Record<string, string> {
  key: string;
  label: string;
}

export default function useGetOrderTabs(): Tab[] {
  return [
    {
      key: 'ordered',
      label: 'Ordered',
    },
    {
      key: 'need-to-pay',
      label: 'Need To Pay',
    },
    {
      key: 'paid',
      label: 'Paid',
    },
    {
      key: 'finished',
      label: 'Finished',
    },
  ];
}
