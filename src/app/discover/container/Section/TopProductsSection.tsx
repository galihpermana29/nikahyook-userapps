'use client';

import { ErrorBoundary } from 'react-error-boundary';
import { IAllProductsResponse } from '@/shared/models/productInterfaces';
import { ProductCard } from '@/shared/container/Card/ProductCard';
import { SwiperContainer } from '@/shared/container/Swiper/SwiperContainer';
import { SwiperSlide } from 'swiper/react';
import { TitledSection } from '@/shared/container/Section/TitledSection';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import React from 'react';

export const TopProductsSection = ({
  data,
}: {
  data: IAllProductsResponse[];
}) => {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <TitledSection title="Top Products" navigateTo="/search?tab=product">
        <SwiperContainer>
          {data.map((item, index) => (
            <SwiperSlide
              key={item.id}
              className={`w-fit ${index === 0 && 'ml-4'} ${
                index + 1 === data.length && 'mr-4'
              }`}>
              <ProductCard
                id={item.id}
                onWishlistClick={() => {}}
                title={item.title}
                location={item.location.city.label}
                price={item.price}
                rating={item.rating}
                imageUrl={item.images[0]}
              />
            </SwiperSlide>
          ))}
        </SwiperContainer>
      </TitledSection>
    </ErrorBoundary>
  );
};
