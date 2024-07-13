import { CuratorCard } from '@/shared/container/Card/CuratorCard';
import { getAllWishlist } from '@/shared/actions/productService';
import { IAllCuratorialWishlistResponse } from '@/shared/models/curatorialInterfaces';
import { useQuery } from 'react-query';
import generateUUID from '@/shared/usecase/generateUUID';
import NoResult from '@/shared/container/NoResult/NoResult';
import React from 'react';
import SkeletonVerticalCards from '@/shared/container/Skeleton/SkeletonVerticalCards';

const TabCuratorial = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['curatorial-wishlist'],
    queryFn: () =>
      getAllWishlist('curatorial', {
        is_pagination: false,
      }),
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <SkeletonVerticalCards />;
  }

  if (typeof data === 'string') {
    throw Error(data);
  }

  const curatorialData = data?.data.data as IAllCuratorialWishlistResponse;

  if (curatorialData.curatorials.length === 0) {
    return <NoResult />;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
      {curatorialData.curatorials.map((curatorial) => (
        <CuratorCard
          key={generateUUID()}
          id={curatorial.id}
          responsive
          title={curatorial.name}
          imageUrl={curatorial.images[0]}
          isInWishlist={true}
          refetchFn={refetch}
        />
      ))}
    </div>
  );
};

export default TabCuratorial;
