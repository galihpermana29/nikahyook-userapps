import TabLoading from '@/app/order/(default)/container/Tab/TabLoading/TabLoading';
import DetailTitle from '@/shared/container/DetailHeader/DetailTitle';
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
      <DetailTitle title="Billing" />

      <Suspense fallback={<TabLoading withAlert />}>
        <main className="p-4 flex flex-grow">{children}</main>
      </Suspense>

      <OrderPriceDetail orderId={params.orderId} />
    </ErrorBoundary>
  );
}
