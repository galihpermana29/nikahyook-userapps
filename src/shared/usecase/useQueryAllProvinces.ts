'use client';

import { useQuery } from 'react-query';
import { getAllProvinces } from '../actions/locationService';

export default function useQueryAllProvinces() {
  return useQuery({
    queryFn: async () => getAllProvinces(),
    queryKey: ['all-provinces'],
  });
}
