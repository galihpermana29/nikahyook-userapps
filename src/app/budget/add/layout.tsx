import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import BudgetAddLoading from './loading';

export default function BudgetAddLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <Suspense fallback={<BudgetAddLoading />}>{children}</Suspense>
    </ErrorBoundary>
  );
}
