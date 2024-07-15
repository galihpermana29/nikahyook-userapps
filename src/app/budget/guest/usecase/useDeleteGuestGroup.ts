'use client';

import { deleteGuestGroup } from '@/shared/actions/guestService';
import type { IFetchGeneralResponse } from '@/shared/models/generalInterfaces';
import type { TGuestGroup } from '@/shared/models/guestInterfaces';
import { message } from 'antd';
import { useMutation, useQueryClient } from 'react-query';

export const useDeleteGuestGroup = (
  id: TGuestGroup['id'],
  name: TGuestGroup['name']
) => {
  const queryClient = useQueryClient();
  return useMutation<IFetchGeneralResponse<TGuestGroup['id']>, Error>({
    mutationKey: ['delete-guest-group', { id }],
    mutationFn: async () => {
      return deleteGuestGroup(id);
    },
    onSuccess: () => {
      message.success(`Successfully deleted guest ${name}!`);
      queryClient.refetchQueries('get-lists-of-guests');
    },
    onError: (err) => {
      message.error(err.message);
    },
  });
};
