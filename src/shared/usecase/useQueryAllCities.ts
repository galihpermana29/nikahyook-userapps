'use client';

import { useQuery } from 'react-query';
import { getAllCities } from '../actions/locationService';

export default function useQueryAllCities(provinceId: string) {
  return useQuery({
    queryFn: async () => getAllCities(provinceId),
    queryKey: ['all-cities', { provinceId }],
  });
}
