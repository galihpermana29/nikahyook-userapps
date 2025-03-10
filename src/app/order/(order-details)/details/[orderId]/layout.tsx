import TabLoading from '@/app/order/(default)/container/Tab/TabLoading/TabLoading';
import PageTitle from '@/shared/container/PageTitle/PageTitle';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import OrderPriceDetail from './container/OrderPriceDetail';

export default function OrderDetailRootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: { orderId: string } }>) {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <div className="sticky top-0 z-10 bg-white">
        <PageTitle title="Billing" />
      </div>

      <Suspense fallback={<TabLoading withAlert />}>
        <main className="p-4 flex flex-grow min-h-[calc(100vh-112px)]">
          {children}
        </main>
      </Suspense>

      <OrderPriceDetail orderId={params.orderId} />
    </ErrorBoundary>
  );
}
