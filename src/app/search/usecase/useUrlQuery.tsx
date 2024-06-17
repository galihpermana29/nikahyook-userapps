'use client';

import { IGeneralFilter } from '@/shared/models/generalInterfaces';
import convertObjectToQueryParams from '@/shared/usecase/convertObjectToQueryParams';
import { useDebounce } from '@uidotdev/usehooks';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function useUrlQuery() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const keyword = searchParams.get('keyword') ?? undefined;
  const min_price = searchParams.get('min_price') ?? undefined;
  const max_price = searchParams.get('max_price') ?? undefined;
  const product_type = searchParams.get('product_type_id') ?? undefined;
  const vendor_type = searchParams.get('vendor_type') ?? undefined;

  const [urlQuery, setUrlQuery] = useState<IGeneralFilter>({
    keyword,
    min_price: min_price ? parseInt(min_price) : undefined,
    max_price: max_price ? parseInt(max_price) : undefined,
    product_type: product_type ? parseInt(product_type) : undefined,
    vendor_type: vendor_type ? parseInt(vendor_type) : undefined,
  });

  const debouncedQuery = useDebounce(urlQuery, 1000);

  useEffect(() => {
    const existingParams = Object.fromEntries(searchParams.entries());

    const queryParams = convertObjectToQueryParams({
      ...existingParams,
      ...debouncedQuery,
    });

    const newUrl = `${pathname}?${queryParams}`;

    router.push(newUrl);
  }, [debouncedQuery]);

  return { urlQuery, setUrlQuery, debouncedQuery };
}

export default useUrlQuery;
