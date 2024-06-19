import DetailTitle from '@/shared/container/DetailHeader/DetailTitle';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ChangePasswordFormLoading from './container/ChangePasswordFormLoading';

export default function ChangePasswordRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <Suspense fallback={<ChangePasswordFormLoading />}>
        <main className="flex flex-col size-full min-h-screen gap-5">
          <DetailTitle title="Change Password" />
          <div className="pb-5 px-4 flex-grow flex">{children}</div>
        </main>
      </Suspense>
    </ErrorBoundary>
  );
}
