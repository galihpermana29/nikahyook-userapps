'use client';

import { Select, type SelectProps } from 'antd';
import convertToSelectOptions from '@/shared/usecase/convertToSelectOptions';
import type { TAllLocationProvinceResponse } from '@/shared/models/locationInterfaces';
import SkeletonInput from 'antd/es/skeleton/Input';
import useQueryAllProvinces from '@/shared/usecase/useQueryAllProvinces';
import generalFilterOption from '@/shared/usecase/generalFilterOption';

export default function ClientSelectLocationProvinces(props: SelectProps) {
  const { data, isLoading, isError } = useQueryAllProvinces();

  if (isError)
    return <Select {...props} disabled value="Can't retrieve locations data" />;

  if (isLoading) return <SkeletonInput active block />;

  const provinces = data?.data ?? [];

  const options = convertToSelectOptions(
    provinces as TAllLocationProvinceResponse,
    {
      label: 'name',
      value: 'id',
    }
  );

  return (
    <Select
      showSearch
      filterOption={generalFilterOption}
      {...props}
      options={options}
    />
  );
}
