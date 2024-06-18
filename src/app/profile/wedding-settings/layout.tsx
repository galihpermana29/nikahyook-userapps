import DetailTitle from '@/shared/container/DetailHeader/DetailTitle';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import WeddingSettingsFormLoading from './container/WeddingSettingsFormLoading';

export default function WeddingSettingsRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <Suspense fallback={<WeddingSettingsFormLoading />}>
        <main className="flex flex-col size-full min-h-screen gap-5">
          <DetailTitle title="Wedding Settings" />
          <div className="pb-5 px-4 flex-grow flex">{children}</div>
        </main>
      </Suspense>
    </ErrorBoundary>
  );
}
