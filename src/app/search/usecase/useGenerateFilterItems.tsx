import { useSearchParams } from 'next/navigation';
import FilterInspiration from '../container/Filter/FilterInspiration';
import FilterProduct from '../container/Filter/FilterProduct';
import FilterVendor from '../container/Filter/FilterVendor';
import FilterCuratorial from '../container/Filter/FilterCuratorial';
import { FormInstance } from 'antd';
import useFormInputRule from '@/shared/usecase/useFormInputRule';

function useGenerateFilterItems(form: FormInstance) {
  const searchParams = useSearchParams();

  const currentTab = searchParams.get('tab') ?? 'inspiration';

  const { minPriceRules, maxPriceRules } = useFormInputRule(form);

  switch (currentTab) {
    case 'inspiration':
      return <FilterInspiration />;
    case 'product':
      return (
        <FilterProduct
          minPriceRules={minPriceRules}
          maxPriceRules={maxPriceRules}
        />
      );
    case 'vendor':
      return <FilterVendor />;
    case 'curatorial':
      return (
        <FilterCuratorial
          minPriceRules={minPriceRules}
          maxPriceRules={maxPriceRules}
        />
      );
  }
}

export default useGenerateFilterItems;
