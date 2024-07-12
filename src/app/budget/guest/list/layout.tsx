import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import GuestListLoading from './loading';

export default function GuestListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <Suspense fallback={<GuestListLoading />}>{children}</Suspense>
    </ErrorBoundary>
  );
}
