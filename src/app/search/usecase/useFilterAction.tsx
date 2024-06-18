import convertObjectToQueryParams from '@/shared/usecase/convertObjectToQueryParams';
import removeUndefinedObjectValue from '@/shared/usecase/removeUndefinedObjectValue';
import { FormInstance } from 'antd';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function useFilterAction(form: FormInstance) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const onApplyFilter = (val: any) => {
    if (val['province-select']) val['province-select'] = undefined;
    if (val?.location) val.location = val.location.value;

    const filteredVal = removeUndefinedObjectValue(val);
    const existingParams = Object.fromEntries(searchParams.entries());

    Object.keys(val).forEach((key) => {
      if (val[key] === undefined) {
        delete existingParams[key];
      }
    });

    const queryParams = convertObjectToQueryParams({
      ...existingParams,
      ...filteredVal,
    });

    const newUrl = `${pathname}?${queryParams}`;

    router.push(newUrl);
  };

  const onResetFilter = () => {
    form.setFieldValue('min_price', undefined);
    form.setFieldValue('max_price', undefined);
    form.setFieldValue('product_type_id', undefined);
    form.setFieldValue('vendor_type_id', undefined);
    form.setFieldValue('location', undefined);
    form.setFieldValue('tags', undefined);
    form.setFieldValue('province-select', undefined);
  };

  return { onApplyFilter, onResetFilter };
}

export default useFilterAction;
