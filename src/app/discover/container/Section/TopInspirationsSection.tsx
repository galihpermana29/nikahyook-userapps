'use client';

import { ErrorBoundary } from 'react-error-boundary';
import { IAllInspirationsResponse } from '@/shared/models/productInterfaces';
import { InspirationGrid } from '@/shared/container/Grid/InspirationGrid';
import { TitledSection } from '@/shared/container/Section/TitledSection';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';

export const TopInspirationsSection = ({
  data,
}: {
  data: IAllInspirationsResponse[];
}) => {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
      <TitledSection
        title="Top Inspirations"
        navigateTo="/search?tab=inspiration">
        <InspirationGrid data={data} onWishlistClick={() => {}} />
      </TitledSection>
    </ErrorBoundary>
  );
};
