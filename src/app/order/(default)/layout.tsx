import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import OrderLoading from './loading';
import TabLoading from './container/Tab/TabLoading/TabLoading';
import OrderTabs from './container/Tab/OrderTabs';
import PageTitle from '@/shared/container/PageTitle/PageTitle';
import { BottomNav } from '@/shared/container/Navigation/BottomNav';

export default function OrderRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <div>
       <Suspense fallback={<OrderLoading />}>{children}</Suspense>
        <BottomNav />
      </div>
    </ErrorBoundary>
  );
}
