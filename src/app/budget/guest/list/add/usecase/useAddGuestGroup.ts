'use client';

import { createGuestGroup } from '@/shared/actions/guestService';
import { IFetchGeneralResponse } from '@/shared/models/generalInterfaces';
import type {
  TCreateGuestGroupsPayload,
  TGuestGroupRoot,
} from '@/shared/models/guestInterfaces';
import { message } from 'antd';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';

export const useAddGuestGroup = () => {
  const router = useRouter();
  return useMutation<IFetchGeneralResponse<string>, Error, TGuestGroupRoot>({
    mutationKey: ['add-guest-group'],
    mutationFn: async (value: TGuestGroupRoot) => {
      const payload = { guests: [value] } as TCreateGuestGroupsPayload;
      return createGuestGroup(payload);
    },
    onSuccess: () => {
      router.push('/budget/guest/list');
    },
    onError: (err) => {
      message.error(err.message);
    },
  });
};
