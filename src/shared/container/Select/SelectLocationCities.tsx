import { getAllCities } from '@/shared/actions/locationService';
import { Select } from '../ClientAntd/Select/Select';
import type { TAllLocationCityResponse } from '@/shared/models/locationInterfaces';
import convertToSelectOptions from '@/shared/usecase/convertToSelectOptions';
import type { SelectProps } from 'antd';

type Props = SelectProps & { provinceId: string };

export default async function SelectLocationCities({
  provinceId,
  ...props
}: Props) {
  const { data: cities, success } = await getAllCities(provinceId);

  if (!success)
    return <Select {...props} disabled value="Can't retrieve locations data" />;

  const options = convertToSelectOptions(cities as TAllLocationCityResponse, {
    labelField: 'name',
    valueField: 'id',
  });

  return <Select {...props} options={options} />;
}
