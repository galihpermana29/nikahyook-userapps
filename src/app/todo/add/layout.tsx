import { ErrorBoundary } from 'react-error-boundary';
import AddTodoLoading from './loading';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import React, { Suspense } from 'react';

export default function AddTodoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <Suspense fallback={<AddTodoLoading />}>{children}</Suspense>
    </ErrorBoundary>
  );
}
