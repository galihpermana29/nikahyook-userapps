'use client';

import { useSearchParams } from 'next/navigation';

export const getInitialFilterValues = () => {
  const searchParams = useSearchParams();
  const initialStatus = searchParams.get('status');
  const initialCategory = searchParams.get('category');
  return { status: initialStatus, category: initialCategory };
};
