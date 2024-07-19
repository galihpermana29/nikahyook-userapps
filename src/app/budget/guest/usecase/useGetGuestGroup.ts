'use client';

import { getGuestGroup } from '@/shared/actions/guestService';
import { IFetchGeneralResponse } from '@/shared/models/generalInterfaces';
import type { TGuestGroup } from '@/shared/models/guestInterfaces';
import { message } from 'antd';
import { useQuery } from 'react-query';

export const useGetGuestGroup = (id: TGuestGroup['id']) => {
  return useQuery<IFetchGeneralResponse<TGuestGroup>, Error>({
    queryKey: ['get-guest-group', { id }],
    queryFn: async () => getGuestGroup(id),
    onError: (err) => {
      message.error(err.message);
    },
  });
};
