import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import PageTitle from '@/shared/container/PageTitle/PageTitle';
import ReviewPageLoading from './loading';

export default function OrderRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <div className="sticky top-0">
        <PageTitle title="Review" />
      </div>

      <Suspense
        fallback={
          <main className="p-4">
            <ReviewPageLoading />
          </main>
        }>
        <main className="p-4">{children}</main>
      </Suspense>
    </ErrorBoundary>
  );
}
