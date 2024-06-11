'use client';

import { useQuery } from 'react-query';
import { getAllVillages } from '../actions/locationService';

export default function useQueryAllVillages(districtId: string) {
  return useQuery({
    queryFn: async () => getAllVillages(districtId),
    queryKey: ['all-villages'],
  });
}
