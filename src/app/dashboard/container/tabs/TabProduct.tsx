import { getAllWishlist } from '@/shared/actions/productService';
import { IAllProductWhislistResponse } from '@/shared/models/productInterfaces';
import { ProductCard } from '@/shared/container/Card/ProductCard';
import { useQuery } from 'react-query';
import generateUUID from '@/shared/usecase/generateUUID';
import NoResult from '@/shared/container/NoResult/NoResult';
import React from 'react';
import SkeletonVerticalCards from '@/shared/container/Skeleton/SkeletonVerticalCards';

const TabProduct = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['product-wishlist'],
    queryFn: () =>
      getAllWishlist('product', {
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

  const productsData = data?.data.data as IAllProductWhislistResponse;

  if (productsData.products.length === 0) {
    return <NoResult />;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {productsData.products.map((product) => (
        <ProductCard
          key={generateUUID()}
          id={product.id}
          responsive
          title={product.title}
          location={product.location.city.label}
          price={product.price}
          quantity_label={product.quantity_label}
          rating={product.rating}
          imageUrl={product.images[0]}
          isInWishlist={true}
          refetchFn={refetch}
        />
      ))}
    </div>
  );
};

export default TabProduct;
