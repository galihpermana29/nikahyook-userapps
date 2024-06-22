import type { Tab } from './useGetOrderTabs';

export default function useGetTabToDisplay({
  tabs,
  activeTab,
}: {
  tabs: Tab[];
  activeTab: string | null;
}) {
  // assert that tabs cant be undefined and has to have atleast one element
  if (!tabs || tabs.length === 0) throw new Error('Please provide one tab!');

  // defaults to 'ordered' tab if activeTab is not found
  const tabToDisplay = tabs.find((tab) => tab.key === activeTab) ?? tabs[0];

  return tabToDisplay;
}
