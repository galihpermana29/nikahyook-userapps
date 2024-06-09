import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import React from 'react';
import VendorProductLoading from './loading';

export default function VendorProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <Suspense fallback={<VendorProductLoading />}>{children}</Suspense>
    </ErrorBoundary>
  );
}
