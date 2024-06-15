import { getAllCuratorials } from '@/shared/actions/productService';
import { CuratorCard } from '@/shared/container/Card/CuratorCard';
import { useQuery } from 'react-query';
import SkeletonVerticalCards from '../Skeleton/SkeletonVerticalCards';
import { useSearchParams } from 'next/navigation';
import NoResult from '../NoResult/NoResult';

function TabCuratorial() {
  const searchParams = useSearchParams();
  const urlQuery = Object.fromEntries(searchParams.entries());

  const { data, isLoading } = useQuery({
    queryKey: ['search-curatorial', { ...urlQuery }],
    queryFn: () =>
      getAllCuratorials({
        status: 'active',
        is_pagination: false,
        ...urlQuery,
      }),
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
              key={item.id}
              id={item.id}
              responsive
              onWishlistClick={() => {}}
              title={item.name}
              imageUrl={item.images[0]}
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
