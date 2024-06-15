import React, { useMemo } from 'react';
import { ICoverageArea } from '@/shared/models/generalInterfaces';

export interface ICoverageAreaSection {
  coverage_area: ICoverageArea[];
}

const CoverageAreaSection = ({ coverage_area }: ICoverageAreaSection) => {
  const formatCoverageArea = (areas?: ICoverageArea[]) => {
    if (!areas || areas.length === 0) return '';
    const cities = areas.map((area) => area.city.label).slice(0, 3);
    const remainingCitiesCount = areas.length - cities.length;
    return remainingCitiesCount > 0
      ? `${cities.join(', ')} ++ ${remainingCitiesCount} more`
      : cities.join(', ');
  };

  const formattedCoverageArea = useMemo(
    () => formatCoverageArea(coverage_area),
    [coverage_area]
  );

  return (
    <section className="space-y-3 px-4">
      <h3 className="text-body-2 font-medium">Coverage Area</h3>
      <p className="text-caption-2 line-clamp-1 text-ny-gray-400">
        {formattedCoverageArea}
      </p>
    </section>
  );
};

export default CoverageAreaSection;
