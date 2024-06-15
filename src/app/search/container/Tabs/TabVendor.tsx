import { getAllUsers } from '@/shared/actions/userService';
import { VendorCard } from '@/shared/container/Card/VendorCard';
import { useQuery } from 'react-query';
import SkeletonHorizontalCards from '../Skeleton/SkeletonHorizontalCard';
import { useSearchParams } from 'next/navigation';
import NoResult from '../NoResult/NoResult';

function TabVendor() {
  const searchParams = useSearchParams();
  const urlQuery = Object.fromEntries(searchParams.entries());

  const { data, isLoading } = useQuery({
    queryKey: ['search-vendor', { ...urlQuery }],
    queryFn: () =>
      getAllUsers({
        status: 'active',
        type: 'vendor',
        ...urlQuery,
      }),
  });

  if (isLoading) {
    return <SkeletonHorizontalCards />;
  }

  if (typeof data?.data === 'string') {
    throw Error(data.data);
  }

  return (
    <section className="px-4 flex flex-col gap-2">
      {data?.data && data.data.data.length > 0 ? (
        data.data.data.map((item) => {
          return (
            <VendorCard
              key={item.id}
              navigateTo="/"
              onWishlistClick={() => {}}
              vendor_name={item.name}
              product_type_name={item.detail?.vendor_type_name}
              price={item.detail?.lowest_price}
              rating={item.detail?.avg_rating}
              location={item.detail?.location.city.label}
              profile_picture_uri={item.profile_image_uri}
              images={JSON.parse(item.detail?.json_text as string).vendor_album}
            />
          );
        })
      ) : (
        <NoResult />
      )}
    </section>
  );
}

export default TabVendor;
