'use client';

import { ErrorBoundary } from 'react-error-boundary';
import { Tabs, TabsProps } from 'antd';
import { theme } from 'antd';
import { useState } from 'react';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import TabCuratorial from './TabCuratorial';
import TabInspiration from './TabInspiration';
import TabProduct from './TabProduct';
import TabVendor from './TabVendor';

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

function DashboardTabs({ defaultTab }: { defaultTab: string }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <Tabs
        defaultActiveKey={defaultTab}
        activeKey={activeTab}
        items={items}
        tabBarStyle={{ backgroundColor: colorBgContainer }}
        onChange={handleTabChange}
        centered
      />
    </ErrorBoundary>
  );
}

export default DashboardTabs;
