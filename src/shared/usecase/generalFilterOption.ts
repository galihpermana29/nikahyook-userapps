import type { DefaultOptionType } from 'antd/es/select';
import type { TOptionsRecordKeys } from '../models/generalInterfaces';

interface IOptionFilterParams extends DefaultOptionType {}

export default function generalFilterOption(
  input: TOptionsRecordKeys,
  option?: IOptionFilterParams
) {
  if (!option) return false;

  if (typeof option.label === 'string' && typeof input === 'string') {
    return (option.label ?? '').toLowerCase().includes(input.toLowerCase());
  } else {
    return option.label === input;
  }
}
