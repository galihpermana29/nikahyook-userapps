'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Tabs } from 'antd';
import convertObjectToQueryParams from '@/shared/usecase/convertObjectToQueryParams';
import useGetOrderTabs from '../usecase/useGetOrderTabs';
import { useEffect } from 'react';

export default function OrderTabs() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentParams = Object.fromEntries(searchParams.entries());

  const activeKey = searchParams.get('type') ?? undefined;
  const tabs = useGetOrderTabs();

  function handleChangeTab(activeKey: string) {
    const tabParam = convertObjectToQueryParams({
      ...currentParams,
      type: activeKey,
    });

    return router.push(`${pathname}?${tabParam}`);
  }

  const activeKeyIsValid = activeKey
    ? tabs.map((tab) => tab.key).includes(activeKey)
    : false;

  useEffect(() => {
    if (!activeKeyIsValid) return handleChangeTab('ordered');
  }, []);

  return (
    <Tabs
      className="px-4"
      onChange={handleChangeTab}
      activeKey={activeKey}
      items={tabs}
      centered
    />
  );
}
