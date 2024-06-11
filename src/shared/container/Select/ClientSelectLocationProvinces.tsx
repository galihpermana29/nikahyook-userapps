'use client';

import { getAllProvinces } from '@/shared/actions/locationService';
import { useQuery } from 'react-query';
import { Select, type SelectProps } from 'antd';
import convertToSelectOptions from '@/shared/usecase/convertToSelectOptions';
import type { TAllLocationProvinceResponse } from '@/shared/models/locationInterfaces';
import SkeletonInput from 'antd/es/skeleton/Input';

export default function ClientSelectLocationProvinces(props: SelectProps) {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => getAllProvinces(),
    queryKey: ['all-provinces'],
  });

  if (isError)
    return <Select {...props} disabled value="Can't retrieve locations data" />;

  if (isLoading) return <SkeletonInput active block />;

  const provinces = data?.data ?? [];

  const options = convertToSelectOptions(
    provinces as TAllLocationProvinceResponse,
    {
      labelField: 'name',
      valueField: 'id',
    }
  );

  return <Select {...props} options={options} />;
}
