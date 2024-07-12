'use client';

import { updateGuestGroup } from '@/shared/actions/guestService';
import type { IFetchGeneralResponse } from '@/shared/models/generalInterfaces';
import type {
  TGuestGroup,
  TUpdateGuestGroup,
} from '@/shared/models/guestInterfaces';
import { message } from 'antd';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';

export const useEditGuestGroup = (id: TGuestGroup['id']) => {
  const router = useRouter();
  return useMutation<
    IFetchGeneralResponse<TGuestGroup['id']>,
    Error,
    TUpdateGuestGroup
  >({
    mutationKey: ['edit-guest-group', { id }],
    mutationFn: async (payload: TUpdateGuestGroup) => {
      return updateGuestGroup(payload, id);
    },
    onSuccess: () => {
      router.push('/budget/guest/list');
    },
    onError: (err) => {
      message.error(err.message);
    },
  });
};
