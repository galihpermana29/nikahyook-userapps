import { ErrorBoundary } from 'react-error-boundary';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import React, { Suspense } from 'react';
import TodoLoading from './loading';

export default function TodoLyout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <Suspense fallback={<TodoLoading />}>
        <div className="max-w-screen-md mx-auto md:mt-5">{children}</div>
      </Suspense>
    </ErrorBoundary>
  );
}
