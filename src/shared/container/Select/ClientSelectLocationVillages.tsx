'use client';

import { getAllVillages } from '@/shared/actions/locationService';
import { useQuery } from 'react-query';
import { Select, type SelectProps } from 'antd';
import convertToSelectOptions from '@/shared/usecase/convertToSelectOptions';
import SkeletonInput from 'antd/es/skeleton/Input';
import type { TAllLocationVillageResponse } from '@/shared/models/locationInterfaces';

type Props = SelectProps & { districtId: string };

export default async function SelectLocationVillages({
  districtId,
  ...props
}: Props) {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => getAllVillages(districtId),
    queryKey: ['all-villages'],
  });

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
