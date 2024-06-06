import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';
import CuratorialProductLoading from './loading';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import React from 'react';

export default function CuratorialProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <Suspense fallback={<CuratorialProductLoading />}>{children}</Suspense>
    </ErrorBoundary>
  );
}
