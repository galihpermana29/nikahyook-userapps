'use client';

import { Select, type SelectProps } from 'antd';
import convertToSelectOptions from '@/shared/usecase/convertToSelectOptions';
import type { TAllLocationCityResponse } from '@/shared/models/locationInterfaces';
import SkeletonInput from 'antd/es/skeleton/Input';
import useQueryAllCities from '@/shared/usecase/useQueryAllCities';
import generalFilterOption from '@/shared/usecase/generalFilterOption';

type Props = SelectProps & { provinceId: string };

export default function ClientSelectLocationCities({
  provinceId,
  ...props
}: Props) {
  const { data, isLoading, isError } = useQueryAllCities(provinceId);

  if (isError)
    return <Select {...props} disabled value="Can't retrieve locations data" />;

  if (isLoading) return <SkeletonInput active block />;

  const cities = data?.data ?? [];

  const options = convertToSelectOptions(cities as TAllLocationCityResponse, {
    label: 'name',
    value: 'id',
  });

  return (
    <Select
      showSearch
      filterOption={generalFilterOption}
      {...props}
      options={options}
    />
  );
}
