import { getAllDistricts } from '@/shared/actions/locationService';
import { Select } from '../ClientAntd/Select/Select';
import type { TAllLocationDistrictResponse } from '@/shared/models/locationInterfaces';
import convertToSelectOptions from '@/shared/usecase/convertToSelectOptions';
import type { SelectProps } from 'antd';

type Props = SelectProps & { cityId: string };

export default async function SelectLocationDistricts({
  cityId,
  ...props
}: Props) {
  const { data: districts, success } = await getAllDistricts(cityId);

  if (!success)
    return <Select {...props} disabled value="Can't retrieve locations data" />;

  const options = convertToSelectOptions(
    districts as TAllLocationDistrictResponse,
    {
      labelField: 'name',
      valueField: 'id',
    }
  );

  return <Select {...props} options={options} />;
}
