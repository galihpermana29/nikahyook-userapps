'use client';

import { Select, type SelectProps } from 'antd';
import convertToSelectOptions from '@/shared/usecase/convertToSelectOptions';
import SkeletonInput from 'antd/es/skeleton/Input';
import type { TAllLocationVillageResponse } from '@/shared/models/locationInterfaces';
import useQueryAllVillages from '@/shared/usecase/useQueryAllVillages';

type Props = SelectProps & { districtId: string };

export default function ClientSelectLocationVillages({
  districtId,
  ...props
}: Props) {
  const { data, isLoading, isError } = useQueryAllVillages(districtId);

  if (isError)
    return <Select {...props} disabled value="Can't retrieve locations data" />;

  if (isLoading) return <SkeletonInput active block />;

  const villages = data?.data ?? [];

  const options = convertToSelectOptions(
    villages as TAllLocationVillageResponse,
    {
      labelField: 'name',
      valueField: 'id',
    }
  );

  return <Select {...props} options={options} />;
}
