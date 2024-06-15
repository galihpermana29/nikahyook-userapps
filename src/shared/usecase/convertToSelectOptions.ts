import type {
  IOptionsParams,
  TOptionsRecordKeys,
  TOptionsRecordType,
} from '../models/generalInterfaces';

export default function convertToSelectOptions<
  T1 extends TOptionsRecordKeys,
  T2 extends TOptionsRecordKeys,
  T3 extends TOptionsRecordType
>(items: T3[], { value, label }: IOptionsParams<T1, T2>) {
  if (items.length === 0 || !items) return [];

  return items?.map((item) => ({
    value: item[value],
    label: item[label],
  }));
}
