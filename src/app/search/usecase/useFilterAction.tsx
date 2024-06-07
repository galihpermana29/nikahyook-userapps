import convertObjectToQueryParams from '@/shared/usecase/convertObjectToQueryParams';
import removeUndefinedObjectValue from '@/shared/usecase/removeUndefinedObjectValue';
import { FormInstance } from 'antd';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function useFilterAction(form: FormInstance) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const onApplyFilter = (val: any) => {
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
    form.setFieldValue('product_type', undefined);
    form.setFieldValue('vendor_type', undefined);
    form.setFieldValue('location', undefined);
  };

  return { onApplyFilter, onResetFilter };
}

export default useFilterAction;
