import { getAllWishlist } from '@/shared/actions/productService';
import { InspirationGrid } from '@/shared/container/Grid/InspirationGrid';
import NoResult from '@/shared/container/NoResult/NoResult';
import { IAllInspirationsWishlistResponse } from '@/shared/models/productInterfaces';
import { useQuery } from 'react-query';

const TabInspiration = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['inspiration-wishlist'],
    queryFn: () =>
      getAllWishlist('inspiration', {
        is_pagination: false,
      }),
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <InspirationGrid data={[...Array(8)]} animated />;
  }

  if (typeof data === 'string') {
    throw Error(data);
  }

  const inspirationData = data?.data.data as IAllInspirationsWishlistResponse;

  if (inspirationData.inspirations.length === 0) {
    return <NoResult />;
  }

  return (
    <InspirationGrid
      data={inspirationData.inspirations}
      refetchFn={refetch}
      wishlisted={true}
      padding={false}
    />
  );
};

export default TabInspiration;
