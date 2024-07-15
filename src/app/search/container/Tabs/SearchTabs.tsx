'use client';

import { FormInstance, Tabs, TabsProps } from 'antd';
import { useRouter, useSearchParams } from 'next/navigation';
import TabCuratorial from './TabCuratorial';
import TabInspiration from './TabInspiration';
import TabProduct from './TabProduct';
import TabVendor from './TabVendor';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import { ErrorBoundary } from 'react-error-boundary';
import { useEffect, useState } from 'react';
import useFilterAction from '../../usecase/useFilterAction';

const items: TabsProps['items'] = [
  {
    key: 'inspiration',
    label: 'Inspiration',
    children: <TabInspiration />,
  },
  {
    key: 'product',
    label: 'Product',
    children: <TabProduct />,
  },
  {
    key: 'vendor',
    label: 'Vendor',
    children: <TabVendor />,
  },
  {
    key: 'curatorial',
    label: 'Curatorial',
    children: <TabCuratorial />,
  },
];

function SearchTabs({
  defaultTab,
  searchForm,
  filterForm,
}: {
  defaultTab: string;
  searchForm: FormInstance;
  filterForm: FormInstance;
}) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const router = useRouter();
  const searcParams = useSearchParams();
  const tabKey = searcParams.get('tab') ?? 'inspiration';

  const { onResetFilter } = useFilterAction(filterForm);

  useEffect(() => {
    setActiveTab(tabKey);
  }, [searcParams]);

  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <Tabs
        // centered
        defaultActiveKey={defaultTab}
        activeKey={activeTab}
        items={items}
        tabBarStyle={{ padding: '0 16px' }}
        onChange={(key) => {
          searchForm.setFieldValue('keyword', undefined);
          onResetFilter();
          router.push(`search?tab=${key}`);
        }}
      />
    </ErrorBoundary>
  );
}

export default SearchTabs;
