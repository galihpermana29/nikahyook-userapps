import { getAllWishlist } from '@/shared/actions/productService';
import { IAllInspirationsWishlistResponse } from '@/shared/models/productInterfaces';
import { InspirationGrid } from '@/shared/container/Grid/InspirationGrid';
import { useQuery } from 'react-query';
import NoResult from '@/shared/container/NoResult/NoResult';
import React from 'react';

const TabInspiration = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['inspiration-wishlist'],
    queryFn: () => getAllWishlist('inspiration'),
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <InspirationGrid data={[...Array(4)]} animated />;
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
    />
  );
};

export default TabInspiration;
