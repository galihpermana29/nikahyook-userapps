import { getAllWishlist } from '@/shared/actions/productService';
import { IAllVendorWishlistResponse } from '@/shared/models/userInterfaces';
import { useQuery } from 'react-query';
import { VendorCard } from '@/shared/container/Card/VendorCard';
import generateUUID from '@/shared/usecase/generateUUID';
import NoResult from '@/shared/container/NoResult/NoResult';
import React from 'react';
import SkeletonHorizontalCards from '@/shared/container/Skeleton/SkeletonHorizontalCard';

const TabVendor = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['vendor-wishlist'],
    queryFn: () => getAllWishlist('vendor', {
      is_pagination: false
    }),
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <SkeletonHorizontalCards />;
  }

  if (typeof data === 'string') {
    throw Error(data);
  }

  const vendorsData = data?.data.data as IAllVendorWishlistResponse;

  if (vendorsData.vendors.length === 0) {
    return <NoResult />;
  }

  return (
    <div className="flex flex-col gap-2">
      {vendorsData.vendors.map((vendor) => (
        <VendorCard
          key={generateUUID()}
          id={vendor.id}
          navigateTo={`/vendor/${vendor.id}`}
          vendor_name={vendor.name}
          product_type_name={vendor.type}
          price={vendor.lowest_price}
          rating={vendor.avg_rating}
          location={vendor.location.city.label}
          profile_picture_uri={vendor.image}
          images={JSON.parse(vendor.json_text).vendor_album}
          isInWishlist={true}
          refetchFn={refetch}
        />
      ))}
    </div>
  );
};

export default TabVendor;
