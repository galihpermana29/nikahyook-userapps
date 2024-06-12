import { VendorCard } from '@/shared/container/Card/VendorCard';
import generateUUID from '@/shared/usecase/generateUUID';
import React from 'react';

const TabVendor = () => {
  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: 6 }, () => (
        <VendorCard
          key={generateUUID()}
          navigateTo="/"
          onWishlistClick={() => {}}
          vendor_name={'Gunners Wedding Organizer'}
          product_type_name={'Bronze'}
          price={0}
          rating={0}
          location={'KOTA B A T A M'}
          profile_picture_uri={
            'https://res.cloudinary.com/dcvnwpyd9/image/upload/v1718120118/nikahyook/ub55ejx6qckfafujlt9g.png'
          }
          images={[
            'https://res.cloudinary.com/dcvnwpyd9/image/upload/v1718120146/nikahyook/b0aheem25hybbwzadgs7.png',
            'https://res.cloudinary.com/dcvnwpyd9/image/upload/v1718120151/nikahyook/o5smsfcy5niuvrentwzk.png',
            'https://res.cloudinary.com/dcvnwpyd9/image/upload/v1718120156/nikahyook/m0zcgelaaq0w689negwq.png',
            'https://res.cloudinary.com/dcvnwpyd9/image/upload/v1718120156/nikahyook/m0zcgelaaq0w689negwq.png',
          ]}
        />
      ))}
    </div>
  );
};

export default TabVendor;
