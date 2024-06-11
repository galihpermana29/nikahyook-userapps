import { getAllVillages } from '@/shared/actions/locationService';
import { Select } from '../ClientAntd/Select/Select';
import convertToSelectOptions from '@/shared/usecase/convertToSelectOptions';
import type { SelectProps } from 'antd';
import type { TAllLocationVillageResponse } from '@/shared/models/locationInterfaces';

type Props = SelectProps & { districtId: string };

export default async function SelectLocationVillages({
  districtId,
  ...props
}: Props) {
  const { data: villages, success } = await getAllVillages(districtId);

  if (!success)
    return <Select {...props} disabled value="Can't retrieve locations data" />;

  const options = convertToSelectOptions(
    villages as TAllLocationVillageResponse,
    {
      labelField: 'name',
      valueField: 'id',
    }
  );

  return <Select {...props} options={options} />;
}
