import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';
import CuratorialVendorLoading from './loading';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import React from 'react';

export default function CuratorialVendorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <Suspense fallback={<CuratorialVendorLoading />}>{children}</Suspense>
    </ErrorBoundary>
  );
}
