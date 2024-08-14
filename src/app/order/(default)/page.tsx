import useGetOrderTabs from './usecase/useGetOrderTabs';
import useGetTabToDisplay from './usecase/useGetTabToDisplay';
import { Suspense } from 'react';
import TabLoading from './container/Tab/TabLoading/TabLoading';
import { ErrorBoundary } from 'react-error-boundary';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import PageTitle from '@/shared/container/PageTitle/PageTitle';
import OrderTabs from './container/Tab/OrderTabs';

export const dynamic = 'force-dynamic';

export default function OrderPage({
  searchParams,
}: Readonly<{
  searchParams: { [key: string]: string | string[] | undefined };
}>) {
  const activeTab = searchParams['type'] as string;
  const callbackUrl = searchParams['callbackUrl'] as string | undefined;
  const tabs = useGetOrderTabs();
  const tabToDisplay = useGetTabToDisplay({
    activeTab,
    tabs,
  });

  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <div className="min-h-[calc(100dvh-68px)] md:min-h-0">
        <div className="sticky top-0 md:top-8 z-[1] bg-white">
          <PageTitle backUrl={callbackUrl ?? '/profile'} title="My Order" />
          <Suspense fallback={null}>
            <OrderTabs />
          </Suspense>
        </div>

        <Suspense fallback={<TabLoading withAlert />}>
          <main className="px-4 pb-4">{tabToDisplay.component}</main>
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}
