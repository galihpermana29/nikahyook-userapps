'use client';

import useUrlQuery from '../usecase/useUrlQuery';
import HeaderDiscover from './Header/HeaderDiscover';
import SearchTabs from './Tabs/SearchTabs';

export const SearchContainer = ({ defaultTab }: { defaultTab: string }) => {
  const { setUrlQuery, urlQuery } = useUrlQuery();

  return (
    <div className="pb-10">
      <HeaderDiscover
        inputPlaceholder={
          defaultTab.charAt(0).toUpperCase() + defaultTab.slice(1)
        }
        inputDefaultValue={urlQuery.keyword as string}
        onSearchChange={setUrlQuery}
      />
      <SearchTabs defaultTab={defaultTab} />
    </div>
  );
};
