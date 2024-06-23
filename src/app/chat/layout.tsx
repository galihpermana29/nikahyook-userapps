import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ChatsLoading from './loading';

export default function ChatRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <Suspense fallback={<ChatsLoading />}>{children}</Suspense>
    </ErrorBoundary>
  );
}
