import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import OrderLoading from './loading';
import { BottomNav } from '@/shared/container/Navigation/BottomNav';

export default function OrderRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <Suspense fallback={<OrderLoading />}>{children}</Suspense>
      <BottomNav />
    </ErrorBoundary>
  );
}
