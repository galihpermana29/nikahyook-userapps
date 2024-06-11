'use client';

import generateUUID from '@/shared/usecase/generateUUID';
import { SkeletonInput } from '../ClientAntd/Skeleton/Skeleton';

type TLocationFormItemLoadingProps = {
  showCity?: boolean;
  showDistrict?: boolean;
  showVillage?: boolean;
};

export default function LocationFormItemLoading({
  showCity,
  showDistrict,
  showVillage,
}: TLocationFormItemLoadingProps) {
  // will how atleast 1 skeleton loading, the rest depends on the props
  return [true, showCity, showDistrict, showVillage]
    .filter((item) => item)
    .map(() => (
      <SkeletonInput
        key={'location-form-loading' + generateUUID()}
        active
        block
      />
    ));
}
