import useGetOrderTabs from './usecase/useGetOrderTabs';
import useGetTabToDisplay from './usecase/useGetTabToDisplay';
import { Suspense } from 'react';
import TabLoading from './container/Tab/TabLoading/TabLoading';
import { ErrorBoundary } from 'react-error-boundary';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';

export const dynamic = 'force-dynamic';

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
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <Suspense fallback={<TabLoading withAlert />}>
        {tabToDisplay.component}
      </Suspense>
    </ErrorBoundary>
  );
}
