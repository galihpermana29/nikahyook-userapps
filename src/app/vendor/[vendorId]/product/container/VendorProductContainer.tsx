'use client';

import { ProductCard } from '@/shared/container/Card/ProductCard';
import DetailTitle from '@/shared/container/DetailHeader/DetailTitle';
import { IProductCardSize } from '@/shared/models/productInterfaces';
import React from 'react';

const VendorProductContainer = () => {
  return (
    <div>
      <DetailTitle title="Products From This Vendor" />
      <div className="grid grid-cols-2 gap-4 px-4 py-3 border-t border-ny-gray-400">
        {Array.from({ length: 12 }).map((_, index) => (
          <ProductCard
            key={index}
            navigateTo="/"
            onWishlistClick={() => {}}
            title="Kempinski Wedding Hall 2"
            location="Arjosari, 65126, Blimbing, Malang, East Java, Indonesia"
            price={15000}
            rating={5}
            imageUrl="https://res.cloudinary.com/dcvnwpyd9/image/upload/v1716742049/nikahyook/tffegtyvok7py9j49tbj.jpg"
            size={IProductCardSize.Large}
          />
        ))}
      </div>
    </div>
  );
};

export default VendorProductContainer;
