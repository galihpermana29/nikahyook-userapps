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
      <div className="p-6 h-screen flex items-center">
        <Suspense fallback={<AuthGroupLoading />}>{children}</Suspense>
      </div>
    </ErrorBoundary>
  );
}
