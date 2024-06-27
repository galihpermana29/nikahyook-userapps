'use client';

import { ProductCard } from '@/shared/container/Card/ProductCard';
import PageTitle from '@/shared/container/PageTitle/PageTitle';
import { IProduct } from '@/shared/models/curatorialInterfaces';

const CuratorialProductContainer = ({ products }: { products: IProduct[] }) => {
  return (
    <div>
      <PageTitle title="Products" />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-4 py-3 border-t border-ny-gray-400">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            location={product.location.city.label}
            price={product.price}
            quantity_label={product.quantity_label}
            rating={product.rating}
            imageUrl={product.images[0]}
            isInWishlist={product.is_wishlist}
            responsive
          />
        ))}
      </div>
    </div>
  );
};

export default CuratorialProductContainer;
