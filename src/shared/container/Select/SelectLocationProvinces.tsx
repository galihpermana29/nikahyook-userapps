import { getAllProvinces } from '@/shared/actions/locationService';
import { Select } from '../ClientAntd/Select/Select';
import type { TAllLocationProvinceResponse } from '@/shared/models/locationInterfaces';
import convertToSelectOptions from '@/shared/usecase/convertToSelectOptions';
import type { SelectProps } from 'antd';

export default async function SelectLocationProvinces(props: SelectProps) {
  const { data: provinces, success } = await getAllProvinces();

  if (!success)
    return <Select {...props} disabled value="Can't retrieve locations data" />;

  const options = convertToSelectOptions(
    provinces as TAllLocationProvinceResponse,
    {
      labelField: 'name',
      valueField: 'id',
    }
  );

  return <Select {...props} options={options} />;
}
