import { getAllProducts } from '@/shared/actions/productService';
import { ProductCard } from '@/shared/container/Card/ProductCard';
import { useQuery } from 'react-query';
import { useSearchParams } from 'next/navigation';
import NoResult from '@/shared/container/NoResult/NoResult';
import SkeletonVerticalCards from '@/shared/container/Skeleton/SkeletonVerticalCards';

function TabProduct() {
  const searchParams = useSearchParams();
  const urlQuery = Object.fromEntries(searchParams.entries());

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['search-product', { ...urlQuery }],
    queryFn: () =>
      getAllProducts({ status: 'active', is_pagination: false, ...urlQuery }),
  });

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
    </section>
  );
}

export default TabProduct;
