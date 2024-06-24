'use client';

import { ProductCard } from '@/shared/container/Card/ProductCard';
import { IAllProductsResponse } from '@/shared/models/productInterfaces';
import PageTitle from '@/shared/container/PageTitle/PageTitle';
import React from 'react';

const VendorProductContainer = ({
  products,
}: {
  products: IAllProductsResponse[];
}) => {
  return (
    <div>
      <PageTitle title="Products From This Vendor" />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-4 py-3 border-t border-ny-gray-400">
        {products.map((product) => (
          <ProductCard
            id={product.id}
            key={product.id}
            title={product.title}
            location={product.location.city.label}
            price={product.price}
            quantity_label={product.quantity_label}
            rating={product.rating}
            imageUrl={product.images[0]}
            responsive
          />
        ))}
      </div>
    </div>
  );
};

export default VendorProductContainer;
