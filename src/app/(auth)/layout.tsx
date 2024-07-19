import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import AuthGroupLoading from './loading';

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <Suspense fallback={<AuthGroupLoading />}>
        <div className="p-6 md:p-0 -mt-5 flex min-h-screen items-center justify-center">
          {children}
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}
