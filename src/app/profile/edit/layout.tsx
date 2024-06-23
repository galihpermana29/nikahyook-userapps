import PageTitle from '@/shared/container/PageTitle/PageTitle';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export default function EditProfileLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <Suspense fallback={null}>
        <main className="flex flex-col size-full min-h-screen gap-5">
          <PageTitle title="Edit Profile" />
          <div className="pb-5 px-4 flex-grow flex">{children}</div>
        </main>
      </Suspense>
    </ErrorBoundary>
  );
}
