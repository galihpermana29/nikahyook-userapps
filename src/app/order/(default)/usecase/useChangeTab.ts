import convertObjectToQueryParams from '@/shared/usecase/convertObjectToQueryParams';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function useChangeTab() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentParams = Object.fromEntries(searchParams.entries());

  function changeTab(activeTab: string) {
    const tabParam = convertObjectToQueryParams({
      ...currentParams,
      type: activeTab,
    });

    return router.push(`${pathname}?${tabParam}`);
  }

  return changeTab;
}
