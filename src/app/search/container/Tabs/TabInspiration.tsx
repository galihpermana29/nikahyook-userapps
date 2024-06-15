'use client';

import { getAllInspirations } from '@/shared/actions/productService';
import { InspirationGrid } from '@/shared/container/Grid/InspirationGrid';
import { useSearchParams } from 'next/navigation';
import { useQuery } from 'react-query';
import NoResult from '../NoResult/NoResult';

function TabInspiration() {
  const searchParams = useSearchParams();
  const urlQuery = Object.fromEntries(searchParams.entries());

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['search-inspiration', { ...urlQuery }],
    queryFn: () =>
      getAllInspirations({
        status: 'active',
        is_pagination: false,
        ...urlQuery,
      }),
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <InspirationGrid data={[...Array(4)]} animated />;
  }

  if (typeof data?.data === 'string') {
    throw Error(data.data);
  }

  return (
    <section>
      {data?.data && data.data.data?.length > 0 ? (
        <InspirationGrid data={data.data.data} refetchFn={refetch} />
      ) : (
        <NoResult />
      )}
    </section>
  );
}

export default TabInspiration;
