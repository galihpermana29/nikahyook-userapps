'use client';

import { CuratorCard } from '@/shared/container/Card/CuratorCard';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import { DiscoverSection } from '@/shared/container/Section/DiscoverSection';
import { SwiperContainer } from '@/shared/container/Swiper/SwiperContainer';
import { IAllCuratorialsResponse } from '@/shared/models/productInterfaces';
import { ErrorBoundary } from 'react-error-boundary';
import { SwiperSlide } from 'swiper/react';

export const TopCuratorsPickSection = ({
  data,
}: {
  data: IAllCuratorialsResponse[];
}) => {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <DiscoverSection
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
                onWishlistClick={() => {}}
                location={item.location}
                title={item.name}
                imageUrl={item.images[0]}
              />
            </SwiperSlide>
          ))}
        </SwiperContainer>
      </DiscoverSection>
    </ErrorBoundary>
  );
};
