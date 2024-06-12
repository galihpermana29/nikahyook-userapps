'use client';

import { VendorCard } from '@/shared/container/Card/VendorCard';
import DetailTitle from '@/shared/container/DetailHeader/DetailTitle';
import React from 'react';

const CuratorialVendorContainer = () => {
  return (
    <div>
      <DetailTitle title="Vendors" />
      <div className="space-y-3 px-4 py-3 border-t border-ny-gray-400">
        {Array.from({ length: 6 }).map((_, index) => (
          <VendorCard
            key={index}
            id={'test'}
            navigateTo="/"
            vendor_name="Batam Weddings"
            product_type_name="Vendor Type A"
            price={15000}
            rating={5}
            location="Arjosari, 65126, Blimbing, Malang, East Java, Indonesia"
            profile_picture_uri="https://res.cloudinary.com/dcvnwpyd9/image/upload/v1717122421/nikahyook/gxsgo2wdyhnykrgfoxg6.png"
            images={[
              'https://res.cloudinary.com/dcvnwpyd9/image/upload/v1717122505/nikahyook/k1b9tfwnuqosoyxvshnb.jpg',
              'https://res.cloudinary.com/dcvnwpyd9/image/upload/v1717122505/nikahyook/k1b9tfwnuqosoyxvshnb.jpg',
              'https://res.cloudinary.com/dcvnwpyd9/image/upload/v1717122505/nikahyook/k1b9tfwnuqosoyxvshnb.jpg',
              'https://res.cloudinary.com/dcvnwpyd9/image/upload/v1717122505/nikahyook/k1b9tfwnuqosoyxvshnb.jpg',
            ]}
          />
        ))}
      </div>
    </div>
  );
};

export default CuratorialVendorContainer;
