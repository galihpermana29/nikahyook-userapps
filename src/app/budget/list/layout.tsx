import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import BudgetListLoading from './loading';

export default function BudgetListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <Suspense fallback={<BudgetListLoading />}>{children}</Suspense>
    </ErrorBoundary>
  );
}
