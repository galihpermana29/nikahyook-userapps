import { CuratorCard } from '@/shared/container/Card/CuratorCard';
import { getAllCuratorials } from '@/shared/actions/productService';
import { useQuery } from 'react-query';
import { useSearchParams } from 'next/navigation';
import NoResult from '@/shared/container/NoResult/NoResult';
import SkeletonVerticalCards from '@/shared/container/Skeleton/SkeletonVerticalCards';

function TabCuratorial() {
  const searchParams = useSearchParams();
  const urlQuery = Object.fromEntries(searchParams.entries());

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['search-curatorial', { ...urlQuery }],
    queryFn: () =>
      getAllCuratorials({
        status: 'active',
        is_pagination: false,
        ...urlQuery,
      }),
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <SkeletonVerticalCards />;
  }

  if (typeof data?.data === 'string') {
    throw Error(data.data);
  }

  return (
    <section className="px-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
      {data?.data && data.data.data.length > 0 ? (
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
  );
}

export default TabCuratorial;
