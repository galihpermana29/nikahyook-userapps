'use client';

import { VendorCard } from '@/shared/container/Card/VendorCard';
import PageTitle from '@/shared/container/PageTitle/PageTitle';
import { IVendor } from '@/shared/models/curatorialInterfaces';
import React from 'react';

const CuratorialVendorContainer = ({ vendors }: { vendors: IVendor[] }) => {
  return (
    <div>
      <PageTitle title="Vendors" />
      <div className="space-y-3 px-4 py-3 border-t border-ny-gray-400">
        {vendors.map((vendor) => (
          <VendorCard
            key={vendor.id}
            id={vendor.id}
            navigateTo={`/vendor/${vendor.id}`}
            vendor_name={vendor.name}
            product_type_name={vendor.type}
            price={vendor.lowest_price}
            rating={vendor.avg_rating}
            location={vendor.location.city.label}
            profile_picture_uri={vendor.image}
            images={vendor.vendor_detail.vendor_album}
            isInWishlist={vendor.is_wishlist}
          />
        ))}
      </div>
    </div>
  );
};

export default CuratorialVendorContainer;
