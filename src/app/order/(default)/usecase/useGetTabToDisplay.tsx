import type { TabsProps } from 'antd';

export default function useGetTabToDisplay({
  tabs,
  activeTab,
}: {
  tabs: TabsProps['items'];
  activeTab: string | null;
}) {
  // assert that tabs cant be undefined and has to have atleast one element
  if (!tabs || tabs.length === 0) throw new Error('Please provide one tab!');

  const tabToDisplay = tabs.find((tab) => tab.key === activeTab);
  // default to 'ordered' tab
  if (!tabToDisplay) return tabs[0];

  return tabToDisplay;
}
