'use client';

import { Select, type SelectProps } from 'antd';
import convertToSelectOptions from '@/shared/usecase/convertToSelectOptions';
import SkeletonInput from 'antd/es/skeleton/Input';
import type { TAllLocationDistrictResponse } from '@/shared/models/locationInterfaces';
import useQueryAllDistricts from '@/shared/usecase/useQueryAllDistricts';

type Props = SelectProps & { provinceAndCityId: string };

export default async function ClientSelectLocationDistricts({
  provinceAndCityId,
  ...props
}: Props) {
  const { data, isLoading, isError } = useQueryAllDistricts(provinceAndCityId);

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
