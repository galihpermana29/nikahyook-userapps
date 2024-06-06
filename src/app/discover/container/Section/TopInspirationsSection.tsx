'use client';

import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';
import { InspirationGrid } from '@/shared/container/Grid/InspirationGrid';
import { DiscoverSection } from '@/shared/container/Section/DiscoverSection';
import { IAllInspirationsResponse } from '@/shared/models/productInterfaces';
import { ErrorBoundary } from 'react-error-boundary';

export const TopInspirationsSection = ({
  data,
}: {
  data: IAllInspirationsResponse[];
}) => {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <DiscoverSection
        title="Top Inspirations"
        navigateTo="/search?tab=inspiration">
        <InspirationGrid data={data} onWishlistClick={() => {}} />
      </DiscoverSection>
    </ErrorBoundary>
  );
};
