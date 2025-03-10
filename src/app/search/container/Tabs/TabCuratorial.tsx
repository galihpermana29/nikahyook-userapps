import { CuratorCard } from '@/shared/container/Card/CuratorCard';
import { getAllCuratorials } from '@/shared/actions/productService';
import { useQuery } from 'react-query';
import { useSearchParams } from 'next/navigation';
import NoResult from '@/shared/container/NoResult/NoResult';
import SkeletonVerticalCards from '@/shared/container/Skeleton/SkeletonVerticalCards';
import useInfiniteScroll from '@/shared/usecase/useInfiniteScroll';
import { Spin } from 'antd';

function TabCuratorial() {
  const searchParams = useSearchParams();
  const urlQuery = Object.fromEntries(searchParams.entries());

  const { ref, inView, limit, setLimit, hasReachedLimit, setHasReachedLimit } =
    useInfiniteScroll(6);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['search-curatorial', { ...urlQuery }],
    queryFn: () =>
      getAllCuratorials({
        status: 'active',
        is_pagination: false,
        limit,
        ...urlQuery,
      }),
    refetchOnWindowFocus: false,
    onSuccess: (successData) => {
      if (
        typeof successData.data !== 'string' &&
        successData?.data?.meta_data?.total_items >= limit
      ) {
        setLimit((prev) => prev + 6);
      } else {
        setHasReachedLimit(true);
      }
    },
  });

  if (inView && !hasReachedLimit) refetch();

  if (isLoading) {
    return <SkeletonVerticalCards amount={8} />;
  }

  if (typeof data?.data === 'string') {
    throw Error(data.data);
  }

  return (
    <>
      <section className="px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
        {data?.data && data?.data?.data?.length > 0 ? (
          data.data.data.map((item) => {
            return (
              <CuratorCard
                responsive
                key={item.id}
                id={item.id}
                isInWishlist={item.is_wishlist}
                title={item.name}
                imageUrl={item.images[0]}
                refetchFn={refetch}
              />
            );
          })
        ) : (
          <NoResult />
        )}
      </section>
      <div
        ref={ref}
        className="w-full mt-4 col-span-2 sm:col-span-3 flex justify-center">
        {inView && !hasReachedLimit && <Spin />}
      </div>
    </>
  );
}

export default TabCuratorial;
