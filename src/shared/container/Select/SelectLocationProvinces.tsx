import { getAllProvinces } from '@/shared/actions/locationService';
import { Select } from '../ClientAntd/Select/Select';
import type { TAllLocationProvinceResponse } from '@/shared/models/locationInterfaces';
import convertToSelectOptions from '@/shared/usecase/convertToSelectOptions';
import type { SelectProps } from 'antd';
import generalFilterOption from '@/shared/usecase/generalFilterOption';

export default async function SelectLocationProvinces(props: SelectProps) {
  const { data: provinces, success } = await getAllProvinces();

  if (!success)
    return <Select {...props} disabled value="Can't retrieve locations data" />;

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
