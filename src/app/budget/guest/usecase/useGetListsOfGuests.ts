'use client';

import { getListsOfGuests } from '@/shared/actions/guestService';
import { IFetchGeneralResponse } from '@/shared/models/generalInterfaces';
import { TGuestGroup } from '@/shared/models/guestInterfaces';
import { message } from 'antd';
import { useQuery } from 'react-query';

export const useGetListsOfGuests = () => {
  return useQuery<IFetchGeneralResponse<TGuestGroup[]>, Error>({
    queryKey: ['get-lists-of-guests'],
    queryFn: async () => getListsOfGuests(),
    onError: (err) => {
      message.error(err.message);
    },
  });
};
