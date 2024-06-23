import useGetOrderTabs from './usecase/useGetOrderTabs';
import useGetTabToDisplay from './usecase/useGetTabToDisplay';
import { Suspense } from 'react';
import TabLoading from './container/Tab/TabLoading/TabLoading';

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
      {tabToDisplay.component}
    </Suspense>
  );
}
