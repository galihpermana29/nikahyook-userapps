'use client';

import { ErrorBoundary } from 'react-error-boundary';
import { ITodo } from '@/shared/models/todoInterfaces';
import { SwiperContainer } from '@/shared/container/Swiper/SwiperContainer';
import { SwiperSlide } from 'swiper/react';
import { useState, useCallback } from 'react';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import useGenerateTab from '../../usecase/useGenerateTab';

function TodoTabs({ defaultTab, todo }: { defaultTab: string; todo: ITodo[] }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabChange = useCallback((key: string) => {
    setActiveTab(key);
  }, []);

  const { tabs } = useGenerateTab(todo, activeTab, handleTabChange);
  const activeContent = tabs.find((tab) => tab.key === activeTab)?.children;

  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <div className="px-4 pt-4 mt-8">
        <SwiperContainer>
          {tabs.map((tab) => (
            <SwiperSlide key={tab.key} className="!w-auto">
              {tab.label}
            </SwiperSlide>
          ))}
        </SwiperContainer>
      </div>
      <div className="p-4">{activeContent}</div>
    </ErrorBoundary>
  );
}

export default TodoTabs;
