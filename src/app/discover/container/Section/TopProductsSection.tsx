'use client';

import { ProductCard } from '@/shared/container/Card/ProductCard';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import { TitledSection } from '@/shared/container/Section/TitledSection';
import { SwiperContainer } from '@/shared/container/Swiper/SwiperContainer';
import { IAllProductsResponse } from '@/shared/models/productInterfaces';
import { ErrorBoundary } from 'react-error-boundary';
import { SwiperSlide } from 'swiper/react';
import EmptySection from '../EmptySection';

export const TopProductsSection = ({
  data,
  location = '',
}: {
  data: IAllProductsResponse[];
  location?: string;
}) => {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <TitledSection
        title={`Products Near ${location.toLowerCase()}`}
        navigateTo="/search?tab=product">
        <SwiperContainer>
          {data.length === 0 ? (
            <EmptySection message="There are currently no products..." />
          ) : (
            data.map((item, index) => (
              <SwiperSlide
                key={item.id}
                className={`w-fit ${index === 0 && 'ml-4'} ${
                  index + 1 === data.length && 'mr-4'
                }`}>
                <ProductCard
                  id={item.id}
                  title={item.title}
                  isInWishlist={item.is_wishlist}
                  location={item.location.city.label}
                  price={item.price}
                  rating={item.rating}
                  imageUrl={item.images[0]}
                />
              </SwiperSlide>
            ))
          )}
        </SwiperContainer>
      </TitledSection>
    </ErrorBoundary>
  );
};
