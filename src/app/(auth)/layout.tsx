import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import { ErrorBoundary } from 'react-error-boundary';

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <div className="px-6">{children}</div>
    </ErrorBoundary>
  );
}
