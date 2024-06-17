import { Button } from 'antd';
import React from 'react';

type ITab = {
  key: string;
  label: string;
  content: React.ReactNode;
};

type IDashboardTab = {
  activeTab: string;
  onTabChange?: (tab: string) => void;
  tabs: ITab[];
};

const DashboardTabHeader = ({
  activeTab,
  onTabChange,
  tabs,
}: IDashboardTab) => {
  return (
    <div className="flex items-center justify-between mb-4">
      {tabs.map((tab) => (
        <Button
          key={tab.key}
          className={`bg-[#2B2B2BCC] opacity-[80%] border ${activeTab === tab.key ? 'text-ny-primary-500 border-ny-primary-500' : 'text-ny-gray-50 border-ny-gray-50'} text-caption-1 font-medium flex-1 mx-1 backdrop-blur-xl`}
          type="default"
          shape="round"
          size="large"
          onClick={() => onTabChange && onTabChange(tab.key)}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
};

const DashboardTabContent = ({ activeTab, tabs }: IDashboardTab) => {
  const activeTabContent = tabs.find((tab) => tab.key === activeTab)?.content;

  return <div className="px-4 mb-[80px]">{activeTabContent}</div>;
};

export { DashboardTabHeader, DashboardTabContent };
