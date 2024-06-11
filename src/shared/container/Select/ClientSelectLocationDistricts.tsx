'use client';

import { getAllDistricts } from '@/shared/actions/locationService';
import { useQuery } from 'react-query';
import { Select, type SelectProps } from 'antd';
import convertToSelectOptions from '@/shared/usecase/convertToSelectOptions';
import SkeletonInput from 'antd/es/skeleton/Input';
import type { TAllLocationDistrictResponse } from '@/shared/models/locationInterfaces';

type Props = SelectProps & { cityId: string };

export default async function ClientSelectLocationDistricts({
  cityId,
  ...props
}: Props) {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => getAllDistricts(cityId),
    queryKey: ['all-districts'],
  });

  if (isError)
    return <Select {...props} disabled value="Can't retrieve locations data" />;

  if (isLoading) return <SkeletonInput active block />;

  const districts = data?.data ?? [];

  const options = convertToSelectOptions(
    districts as TAllLocationDistrictResponse,
    {
      labelField: 'name',
      valueField: 'id',
    }
  );

  return <Select {...props} options={options} />;
}
