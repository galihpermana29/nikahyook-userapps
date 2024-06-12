import { ProductCard } from '@/shared/container/Card/ProductCard';
import generateUUID from '@/shared/usecase/generateUUID';
import React from 'react';

const TabProduct = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {Array.from({ length: 6 }, () => (
        <ProductCard
          key={generateUUID()}
          id={12345678}
          responsive
          onWishlistClick={() => {}}
          title={'Gedung'}
          location={'Bandung'}
          price={10000}
          rating={3.888724544441899}
          imageUrl={
            'https://res.cloudinary.com/dcvnwpyd9/image/upload/v1718120146/nikahyook/b0aheem25hybbwzadgs7.png'
          }
        />
      ))}
    </div>
  );
};

export default TabProduct;
