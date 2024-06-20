import DetailTitle from '@/shared/container/DetailHeader/DetailTitle';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import OrderTabs from './container/OrderTabs';
import TabLoading from './container/Tab/TabLoading/TabLoading';

export default function OrderRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <DetailTitle title="My Order" />
      <Suspense fallback={null}>
        <OrderTabs />
      </Suspense>

      <Suspense fallback={<TabLoading withAlert />}>
        <main className="px-4 pb-4">{children}</main>
      </Suspense>
    </ErrorBoundary>
  );
}
