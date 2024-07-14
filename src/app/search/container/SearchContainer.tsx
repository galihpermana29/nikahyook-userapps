'use client';

import { useForm } from 'antd/es/form/Form';
import useUrlQuery from '../usecase/useUrlQuery';
import HeaderDiscover from './Header/HeaderDiscover';
import SearchTabs from './Tabs/SearchTabs';

export const SearchContainer = ({ defaultTab }: { defaultTab: string }) => {
  const { setUrlQuery, urlQuery } = useUrlQuery();

  const [searchForm] = useForm();
  const [filterForm] = useForm();

  return (
    <div className="pb-4 max-w-screen-md mx-auto">
      <HeaderDiscover
        inputPlaceholder={
          defaultTab.charAt(0).toUpperCase() + defaultTab.slice(1)
        }
        inputDefaultValue={urlQuery.keyword as string}
        onSearchChange={setUrlQuery}
        searchForm={searchForm}
        filterForm={filterForm}
      />
      <SearchTabs
        defaultTab={defaultTab}
        searchForm={searchForm}
        filterForm={filterForm}
      />
    </div>
  );
};
