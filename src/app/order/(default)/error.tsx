'use client';

import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return <CustomErrorBoundary error={error} />;
}
