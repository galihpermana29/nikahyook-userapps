import { getUserStatistics } from '@/shared/actions/userService';
import { useQuery } from 'react-query';

export const useGetStatistics = () => {
  return useQuery({
    queryKey: ['get-user-statistics'],
    queryFn: () => getUserStatistics(),
  });
};
