'use client';

import './style.scss';
import { ErrorBoundary } from 'react-error-boundary';
import { ITodoo } from '@/shared/models/todoInterfaces';
import { Tabs } from 'antd';
import { theme } from 'antd';
import { useState } from 'react';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import useGenerateTab from '../../usecase/useGenerateTab';

function TodoTabs({
  defaultTab,
  todo,
}: {
  defaultTab: string;
  todo: ITodoo[];
}) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const { tabs } = useGenerateTab(todo, activeTab);

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
        items={tabs}
        tabBarStyle={{ backgroundColor: colorBgContainer, padding: 0 }}
        onChange={handleTabChange}
        className="p-4 mt-8"
      />
    </ErrorBoundary>
  );
}

export default TodoTabs;
