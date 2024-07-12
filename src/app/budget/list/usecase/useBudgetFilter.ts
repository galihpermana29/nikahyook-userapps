import { usePathname, useRouter } from 'next/navigation';
import { getInitialFilterValues } from '../repository/getInitialFilterValues';
import convertObjectToQueryParams from '@/shared/usecase/convertObjectToQueryParams';
import type { TBudgetFilterForm } from '../container/Form/FilterForm';
import type { FormInstance } from 'antd';

export const useBudgetFilter = (form: FormInstance<TBudgetFilterForm>) => {
  const router = useRouter();
  const pathname = usePathname();
  const initialValues = getInitialFilterValues();
  const onFinish = (values: TBudgetFilterForm) =>
    router.push(pathname + '?' + convertObjectToQueryParams(values));
  const onResetFilter = () => {
    form.setFieldsValue({ category: null, status: null });
    router.push('/budget/list');
  };

  return { initialValues, onFinish, onResetFilter };
};
