import { getAllProducts } from '@/shared/actions/productService';
import { ProductCard } from '@/shared/container/Card/ProductCard';
import { useQuery } from 'react-query';
import { useSearchParams } from 'next/navigation';
import NoResult from '@/shared/container/NoResult/NoResult';
import SkeletonVerticalCards from '@/shared/container/Skeleton/SkeletonVerticalCards';
import useInfiniteScroll from '@/shared/usecase/useInfiniteScroll';
import { Spin } from 'antd';

function TabProduct() {
  const searchParams = useSearchParams();
  const urlQuery = Object.fromEntries(searchParams.entries());

  const { ref, inView, limit, setLimit, hasReachedLimit, setHasReachedLimit } =
    useInfiniteScroll(6);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['search-product', { ...urlQuery }],
    queryFn: () =>
      getAllProducts({
        status: 'active',
        is_pagination: true,
        limit: 6,
        ...urlQuery,
      }),
    onSuccess: (successData) => {
      if (
        typeof successData.data !== 'string' &&
        successData?.data?.meta_data?.total_items > limit
      ) {
        setLimit((prev) => prev + 4);
      } else {
        setHasReachedLimit(true);
      }
    },
  });

  if (inView && !hasReachedLimit) refetch();

  if (isLoading) {
    return <SkeletonVerticalCards />;
  }

  if (typeof data?.data === 'string') {
    throw Error(data.data);
  }

  return (
    <section className="px-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
      {data?.data && data?.data?.data?.length > 0 ? (
        data.data.data.map((item) => {
          return (
            <ProductCard
              responsive
              key={item.id}
              id={item.id}
              isInWishlist={item.is_wishlist}
              title={item.title}
              location={item.location.city.label}
              price={item.price}
              rating={item.rating}
              imageUrl={item.images[0]}
              refetchFn={refetch}
            />
          );
        })
      ) : (
        <NoResult />
      )}
      <div ref={ref} className="w-full mt-4 flex justify-center">
        {inView && !hasReachedLimit && <Spin />}
      </div>
    </section>
  );
}

export default TabProduct;
