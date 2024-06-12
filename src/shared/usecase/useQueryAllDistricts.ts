'use client';

import { useQuery } from 'react-query';
import { getAllDistricts } from '../actions/locationService';

export default function useQueryAllDistricts(cityId: string) {
  return useQuery({
    queryFn: async () => getAllDistricts(cityId),
    queryKey: ['all-districts', { cityId }],
  });
}
