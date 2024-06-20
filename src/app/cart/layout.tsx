import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import DetailLoadingSkeleton from '@/shared/container/DetailLoadingSkeleton/DetailLoadingSkeleton';

export default function CartLayout({
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
