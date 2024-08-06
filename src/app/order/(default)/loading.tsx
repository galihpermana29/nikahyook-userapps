import React, { Suspense } from 'react';
import TabLoading from './container/Tab/TabLoading/TabLoading';
import PageTitle from '@/shared/container/PageTitle/PageTitle';
import OrderTabs from './container/Tab/OrderTabs';

export default function OrderLoading() {
  return (
    <>
      <div className="sticky top-0 md:top-8 z-[1] bg-white">
        <PageTitle backUrl="/profile" title="My Order" />
        <Suspense fallback={null}>
          <OrderTabs />
        </Suspense>
      </div>

      <main className="px-4 pb-4">
        <TabLoading withAlert />
      </main>
    </>
  );
}
