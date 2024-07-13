import { getAllUsers } from '@/shared/actions/userService';
import { useQuery } from 'react-query';
import { useSearchParams } from 'next/navigation';
import { VendorCard } from '@/shared/container/Card/VendorCard';
import NoResult from '@/shared/container/NoResult/NoResult';
import SkeletonHorizontalCards from '@/shared/container/Skeleton/SkeletonHorizontalCard';
import useInfiniteScroll from '@/shared/usecase/useInfiniteScroll';
import { Spin } from 'antd';

function TabVendor() {
  const searchParams = useSearchParams();
  const urlQuery = Object.fromEntries(searchParams.entries());

  const { ref, inView, limit, setLimit, hasReachedLimit, setHasReachedLimit } =
    useInfiniteScroll(4);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['search-vendor', { ...urlQuery }],
    queryFn: () =>
      getAllUsers({
        status: 'active',
        type: 'vendor',
        limit,
        ...urlQuery,
      }),
    onSuccess: (successData) => {
      if (
        typeof successData.data !== 'string' &&
        successData?.data?.meta_data?.total_items >= limit
      ) {
        setLimit((prev) => prev + 4);
      } else {
        setHasReachedLimit(true);
      }
    },
  });

  if (inView && !hasReachedLimit) refetch();

  if (isLoading) {
    return <SkeletonHorizontalCards />;
  }

  if (typeof data?.data === 'string') {
    throw Error(data.data);
  }

  return (
    <>
      <section className="px-4 grid grid-cols-1 md:grid-cols-2 gap-2">
        {data?.data && data?.data?.data?.length > 0 ? (
          data.data.data.map((item) => {
            return (
              <VendorCard
                key={item.id}
                id={item.id}
                navigateTo={`/vendor/${item.id}`}
                isInWishlist={item.detail?.is_wishlist}
                vendor_name={item.name}
                product_type_name={item.detail?.vendor_type_name}
                price={item.detail?.lowest_price}
                rating={item.detail?.avg_rating}
                location={item.detail?.location.city.label}
                profile_picture_uri={item.profile_image_uri}
                images={
                  JSON.parse(item.detail?.json_text as string).vendor_album
                }
                refetchFn={refetch}
              />
            );
          })
        ) : (
          <NoResult />
        )}{' '}
      </section>
      <div ref={ref} className="w-full py-4 flex justify-center">
        {inView && !hasReachedLimit && <Spin />}
      </div>
    </>
  );
}

export default TabVendor;
