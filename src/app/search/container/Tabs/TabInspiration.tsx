'use client';

import { getAllInspirations } from '@/shared/actions/productService';
import { InspirationGrid } from '@/shared/container/Grid/InspirationGrid';
import NoResult from '@/shared/container/NoResult/NoResult';
import useInfiniteScroll from '@/shared/usecase/useInfiniteScroll';
import { Spin } from 'antd';
import { useSearchParams } from 'next/navigation';
import { useQuery } from 'react-query';

function TabInspiration() {
  const searchParams = useSearchParams();
  const urlQuery = Object.fromEntries(searchParams.entries());

  const { ref, inView, limit, setLimit, hasReachedLimit, setHasReachedLimit } =
    useInfiniteScroll(8);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['search-inspiration', { ...urlQuery }],
    queryFn: () =>
      getAllInspirations({
        status: 'active',
        limit,
        ...urlQuery,
      }),
    refetchOnWindowFocus: false,
    onSuccess: (successData) => {
      if (
        typeof successData.data !== 'string' &&
        successData?.data?.meta_data?.total_items > limit
      ) {
        setLimit((prev) => prev + 8);
      } else {
        setHasReachedLimit(true);
      }
    },
  });

  if (inView && !hasReachedLimit) refetch();

  if (isLoading) {
    return <InspirationGrid data={[...Array(8)]} animated />;
  }

  if (typeof data?.data === 'string') {
    throw Error(data.data);
  }

  return (
    <section>
      {data?.data && data?.data?.data?.length > 0 ? (
        <InspirationGrid data={data.data.data} refetchFn={refetch} />
      ) : (
        <NoResult />
      )}
      <div ref={ref} className="w-full mt-4 flex justify-center">
        {inView && !hasReachedLimit && <Spin />}
      </div>
    </section>
  );
}

export default TabInspiration;
