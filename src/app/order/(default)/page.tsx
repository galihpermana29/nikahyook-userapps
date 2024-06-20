import useGetOrderTabs from './usecase/useGetOrderTabs';
import useGetTabToDisplay from './usecase/useGetTabToDisplay';
import { Suspense } from 'react';
import TabLoading from './container/Tab/TabLoading/TabLoading';
import dynamic from 'next/dynamic';

const OrderedTab = dynamic(() => import('./container/Tab/Ordered/OrderedTab'), {
  loading: () => <TabLoading />,
});

const NeedToPayTab = dynamic(
  () => import('./container/Tab/NeedToPay/NeedToPayTab'),
  {
    loading: () => <TabLoading />,
  }
);

const PaidTab = dynamic(() => import('./container/Tab/Paid/PaidTab'), {
  loading: () => <TabLoading />,
});

const FinishedTab = dynamic(
  () => import('./container/Tab/Finished/FinishedTab'),
  {
    loading: () => <TabLoading />,
  }
);

export default function OrderPage({
  searchParams,
}: Readonly<{
  searchParams: { [key: string]: string | string[] | undefined };
}>) {
  const activeTab = searchParams['type'] as string;
  const tabs = useGetOrderTabs();
  const tabToDisplay = useGetTabToDisplay({
    activeTab,
    tabs,
  });

  return (
    <Suspense fallback={<TabLoading withAlert />}>
      {tabToDisplay.key === 'ordered' && <OrderedTab />}
      {tabToDisplay.key === 'need-to-pay' && <NeedToPayTab />}
      {tabToDisplay.key === 'paid' && <PaidTab />}
      {tabToDisplay.key === 'finished' && <FinishedTab />}
    </Suspense>
  );
}
