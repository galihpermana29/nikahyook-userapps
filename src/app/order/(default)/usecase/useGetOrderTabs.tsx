import dynamic from 'next/dynamic';
import TabLoading from '../container/Tab/TabLoading/TabLoading';

const OrderedTab = dynamic(
  () => import('../container/Tab/OrderedTabSection/OrderedTab'),
  {
    loading: () => <TabLoading />,
  }
);

const NeedToPayTab = dynamic(
  () => import('../container/Tab/NeedToPayTabSection/NeedToPayTab'),
  {
    loading: () => <TabLoading />,
  }
);

const PaidTab = dynamic(
  () => import('../container/Tab/PaidTabSection/PaidTab'),
  {
    loading: () => <TabLoading />,
  }
);

const FinishedTab = dynamic(
  () => import('../container/Tab/FinishedTabSection/FinishedTab'),
  {
    loading: () => <TabLoading />,
  }
);

export interface Tab extends Record<string, string | React.ReactNode> {
  key: string;
  label: string;
  component: React.ReactNode;
}

export default function useGetOrderTabs(): Tab[] {
  return [
    {
      key: 'ordered',
      label: 'Ordered',
      component: <OrderedTab />,
    },
    {
      key: 'need-to-pay',
      label: 'Need To Pay',
      component: <NeedToPayTab />,
    },
    {
      key: 'paid',
      label: 'Paid',
      component: <PaidTab />,
    },
    {
      key: 'finished',
      label: 'Finished',
      component: <FinishedTab />,
    },
  ];
}
