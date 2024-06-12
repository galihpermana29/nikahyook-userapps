'use client';

import { ProductCard } from '@/shared/container/Card/ProductCard';
import { IAllProductsResponse } from '@/shared/models/productInterfaces';
import DetailTitle from '@/shared/container/DetailHeader/DetailTitle';
import React from 'react';

const VendorProductContainer = ({
  products,
}: {
  products: IAllProductsResponse[];
}) => {
  return (
    <div>
      <DetailTitle title="Products From This Vendor" />
      <div className="grid grid-cols-2 gap-4 px-4 py-3 border-t border-ny-gray-400">
        {products.map((product) => (
          <ProductCard
            id={product.id}
            key={product.id}
            title={product.title}
            location={product.vendor.location}
            price={product.price}
            rating={product.rating}
            imageUrl={product.images[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default VendorProductContainer;
