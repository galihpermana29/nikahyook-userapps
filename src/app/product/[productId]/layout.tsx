import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import DetailLoadingSkeleton from '@/shared/container/DetailLoadingSkeleton/DetailLoadingSkeleton';
import React from 'react';

export default function DiscoverLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <Suspense fallback={<DetailLoadingSkeleton />}>{children}</Suspense>
    </ErrorBoundary>
  );
}
