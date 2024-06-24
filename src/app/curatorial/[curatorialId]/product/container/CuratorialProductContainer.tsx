'use client';

import { ProductCard } from '@/shared/container/Card/ProductCard';
import PageTitle from '@/shared/container/PageTitle/PageTitle';

const CuratorialProductContainer = () => {
  return (
    <div>
      <PageTitle title="Products" />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-4 py-3 border-t border-ny-gray-400">
        {Array.from({ length: 12 }).map((_, index) => (
          <ProductCard
            id={index}
            key={index}
            isInWishlist={false}
            title="Kempinski Wedding Hall 2"
            location="Arjosari, 65126, Blimbing, Malang, East Java, Indonesia"
            price={15000}
            quantity_label="pax"
            rating={5}
            imageUrl="https://res.cloudinary.com/dcvnwpyd9/image/upload/v1716742049/nikahyook/tffegtyvok7py9j49tbj.jpg"
            responsive
          />
        ))}
      </div>
    </div>
  );
};

export default CuratorialProductContainer;
