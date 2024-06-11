type TRecordKeys = string | number | symbol;
type TRecordType = Record<TRecordKeys, unknown>;

interface IOptionsParams<T1 extends TRecordKeys, T2 extends TRecordKeys> {
  valueField: T1;
  labelField: T2;
}

export default function convertToSelectOptions<
  T1 extends TRecordKeys,
  T2 extends TRecordKeys,
  T3 extends TRecordType
>(items: T3[], { valueField, labelField }: IOptionsParams<T1, T2>) {
  if (items.length === 0 || !items) return [];

  return items?.map((item) => ({
    value: item[valueField],
    label: item[labelField],
  }));
}
