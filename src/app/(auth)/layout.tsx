import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import AuthGroupLoading from './loading';
import Image from 'next/image';

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <Suspense fallback={<AuthGroupLoading />}>
        <div className="p-6 md:p-0 flex min-h-screen items-center justify-center">
          <div className="relative basis-1/2 h-screen md:block">
            <Image src={'/assets/auth-side-image.png'} alt="side image" fill />
          </div>
          {children}
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}
