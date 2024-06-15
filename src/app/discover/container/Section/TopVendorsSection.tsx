'use client';

import { ErrorBoundary } from 'react-error-boundary';
import { IAllUserResponse } from '@/shared/models/userInterfaces';
import { TitledSection } from '@/shared/container/Section/TitledSection';
import { VendorCard } from '@/shared/container/Card/VendorCard';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import EmptySection from '../EmptySection';

export const TopVendorsSection = ({
  data,
  location = '',
}: {
  data: IAllUserResponse[];
  location?: string;
}) => {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <TitledSection
        title={`Vendors Near ${location}`}
        navigateTo="/search?tab=vendor">
        <div className="flex flex-col px-4 gap-3">
          {data.length === 0 ? (
            <EmptySection message="There are currently no vendors..." />
          ) : (
            data.map((item) => (
              <VendorCard
                key={item.id}
                id={item.id}
                navigateTo="/"
                isInWishlist={item.detail?.is_wishlist}
                vendor_name={item.name}
                product_type_name={item.detail?.vendor_type_name}
                price={item.detail?.lowest_price}
                rating={item.detail?.avg_rating}
                location={item.detail?.location.city.label}
                profile_picture_uri={item.profile_image_uri}
                images={
                  JSON.parse(item.detail?.json_text as string).vendor_album
                }
              />
            ))
          )}
        </div>
      </TitledSection>
    </ErrorBoundary>
  );
};
