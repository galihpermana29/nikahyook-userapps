'use client';

import { CuratorCard } from '@/shared/container/Card/CuratorCard';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import { TitledSection } from '@/shared/container/Section/TitledSection';
import { SwiperContainer } from '@/shared/container/Swiper/SwiperContainer';
import { IAllCuratorialsResponse } from '@/shared/models/productInterfaces';
import { ErrorBoundary } from 'react-error-boundary';
import { SwiperSlide } from 'swiper/react';
import EmptySection from '../EmptySection';

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
          {data.length === 0 ? (
            <EmptySection message="There are currently no top curators picks..." />
          ) : (
            data.map((item, index) => (
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
            ))
          )}
        </SwiperContainer>
      </TitledSection>
    </ErrorBoundary>
  );
};
