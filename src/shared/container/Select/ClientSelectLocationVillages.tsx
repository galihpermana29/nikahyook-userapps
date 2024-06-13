'use client';

import { Select, type SelectProps } from 'antd';
import convertToSelectOptions from '@/shared/usecase/convertToSelectOptions';
import SkeletonInput from 'antd/es/skeleton/Input';
import type { TAllLocationVillageResponse } from '@/shared/models/locationInterfaces';
import useQueryAllVillages from '@/shared/usecase/useQueryAllVillages';
import generalFilterOption from '@/shared/usecase/generalFilterOption';

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
