'use client';

import { useSearchParams } from 'next/navigation';
import { Tabs } from 'antd';
import useGetOrderTabs from '../../usecase/useGetOrderTabs';
import { useEffect } from 'react';
import useChangeTab from '../../usecase/useChangeTab';

export default function OrderTabs() {
  const tabs = useGetOrderTabs();
  const searchParams = useSearchParams();
  const activeKey = searchParams.get('type') ?? null;
  const handleChangeTab = useChangeTab();

  const activeKeyIsValid = activeKey
    ? tabs?.map((tab) => tab.key).includes(activeKey)
    : false;

  useEffect(() => {
    if (!activeKeyIsValid) return handleChangeTab('ordered');
  }, []);

  return (
    <Tabs
      className="px-4"
      onChange={handleChangeTab}
      activeKey={activeKey ?? undefined}
      items={tabs}
      centered
    />
  );
}
