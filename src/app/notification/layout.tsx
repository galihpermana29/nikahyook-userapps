import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import PageTitle from '@/shared/container/PageTitle/PageTitle';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import NotificationLoading from './loading';
import { MarkAllAsRead } from './container/MarkAllAsRead';

const NotificationRootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <main className="grid grid-rows-[auto_1fr] min-h-dvh">
        <div className="flex items-center justify-between">
          <PageTitle title="Notification" />
          <MarkAllAsRead />
        </div>
        <Suspense fallback={<NotificationLoading />}>{children}</Suspense>
      </main>
    </ErrorBoundary>
  );
};

export default NotificationRootLayout;
