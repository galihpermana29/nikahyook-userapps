import { Suspense } from 'react';
import DiscoverLoading from './loading';
import { ErrorBoundary } from 'react-error-boundary';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';

export default function DiscoverLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <Suspense fallback={<DiscoverLoading />}>{children}</Suspense>
    </ErrorBoundary>
  );
}
