'use client';

import { Select, type SelectProps } from 'antd';
import convertToSelectOptions from '@/shared/usecase/convertToSelectOptions';
import SkeletonInput from 'antd/es/skeleton/Input';
import type { TAllLocationDistrictResponse } from '@/shared/models/locationInterfaces';
import useQueryAllDistricts from '@/shared/usecase/useQueryAllDistricts';
import generalFilterOption from '@/shared/usecase/generalFilterOption';

type Props = SelectProps & { cityId: string };

export default function ClientSelectLocationDistricts({
  cityId,
  ...props
}: Props) {
  const { data, isLoading, isError } = useQueryAllDistricts(cityId);

  if (isError)
    return <Select {...props} disabled value="Can't retrieve locations data" />;

  if (isLoading) return <SkeletonInput active block />;

  const districts = data?.data ?? [];

  const options = convertToSelectOptions(
    districts as TAllLocationDistrictResponse,
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
