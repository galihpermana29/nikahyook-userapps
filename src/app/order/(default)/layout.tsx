import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import TabLoading from './container/Tab/TabLoading/TabLoading';
import OrderTabs from './container/Tab/OrderTabs';
import PageTitle from '@/shared/container/PageTitle/PageTitle';

export default function OrderRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <div className="sticky top-0 md:top-8 z-[1] bg-white">
        <PageTitle title="My Order" />
        <Suspense fallback={null}>
          <OrderTabs />
        </Suspense>
      </div>

      <Suspense fallback={<TabLoading withAlert />}>
        <main className="px-4 pb-4">{children}</main>
      </Suspense>
    </ErrorBoundary>
  );
}
