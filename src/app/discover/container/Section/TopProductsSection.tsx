'use client';

import { ProductCard } from '@/shared/container/Card/ProductCard';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import { DiscoverSection } from '@/shared/container/Section/DiscoverSection';
import { SwiperContainer } from '@/shared/container/Swiper/SwiperContainer';
import { IAllProductsResponse } from '@/shared/models/productInterfaces';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { SwiperSlide } from 'swiper/react';

export const TopProductsSection = ({
  data,
}: {
  data: IAllProductsResponse[];
}) => {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <DiscoverSection title="Top Products" navigateTo="/search?tab=product">
        <SwiperContainer>
          {data.map((item, index) => (
            <SwiperSlide
              key={item.id}
              className={`w-fit ${index === 0 && 'ml-4'} ${
                index + 1 === data.length && 'mr-4'
              }`}>
              <ProductCard
                navigateTo="/product/41"
                onWishlistClick={() => {}}
                title={item.title}
                location={item.vendor?.location}
                price={item.price}
                rating={item.vendor?.avg_rating}
                imageUrl={item.images[0]}
              />
            </SwiperSlide>
          ))}
        </SwiperContainer>
      </DiscoverSection>
    </ErrorBoundary>
  );
};
