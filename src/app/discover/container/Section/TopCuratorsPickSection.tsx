'use client';

import { CuratorCard } from '@/shared/container/Card/CuratorCard';
import { ErrorBoundary } from 'react-error-boundary';
import { IAllCuratorialsResponse } from '@/shared/models/productInterfaces';
import { SwiperContainer } from '@/shared/container/Swiper/SwiperContainer';
import { SwiperSlide } from 'swiper/react';
import { TitledSection } from '@/shared/container/Section/TitledSection';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';

export const TopCuratorsPickSection = ({
  data,
}: {
  data: IAllCuratorialsResponse[];
}) => {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <TitledSection
        title="Top Curators Pick"
        navigateTo="/search?tab=curatorial">
        <SwiperContainer>
          {data.map((item, index) => (
            <SwiperSlide
              key={item.id}
              className={`w-fit ${index === 0 && 'ml-4'} ${
                index + 1 === data.length && 'mr-4'
              }`}>
              <CuratorCard
                id={item.id}
                title={item.name}
                isInWishlist={item.is_wishlist}
                imageUrl={item.images[0]}
              />
            </SwiperSlide>
          ))}
        </SwiperContainer>
      </TitledSection>
    </ErrorBoundary>
  );
};
