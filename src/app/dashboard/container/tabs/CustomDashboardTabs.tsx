'use client';

import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';

type ITab = {
  key: string;
  label: string;
  content: React.ReactNode;
};

type IDashboardTabHeader = {
  activeTab: string;
  tabs: ITab[];
};

type IDashboardTabContent = {
  activeTab: string;
  tabs: ITab[];
};

const DashboardTabHeader = ({ activeTab, tabs }: IDashboardTabHeader) => {
  const router = useRouter();

  const handleTabChange = (tab: string) => {
    router.push(`?tab=${tab}`);
  };

  return (
    <div className="flex items-center justify-between mb-4">
      {tabs.map((tab) => (
        <Button
          key={tab.key}
          className={`bg-[#2B2B2BCC] opacity-[80%] border ${
            activeTab === tab.key
              ? 'text-ny-primary-500 border-ny-primary-500'
              : 'text-ny-gray-50 border-ny-gray-50'
          } text-caption-1 font-medium flex-1 mx-1 backdrop-blur-xl`}
          type="default"
          shape="round"
          size="large"
          onClick={() => handleTabChange(tab.key)}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
};

const DashboardTabContent = ({ activeTab, tabs }: IDashboardTabContent) => {
  const activeTabContent = tabs.find((tab) => tab.key === activeTab)?.content;

  return <div className="px-4 mb-[80px]">{activeTabContent}</div>;
};

export { DashboardTabHeader, DashboardTabContent };
