'use client';

import { createGuestGroup } from '@/shared/actions/guestService';
import { IFetchGeneralResponse } from '@/shared/models/generalInterfaces';
import type {
  TCreateGuestGroupsPayload,
  TGuestGroupRoot,
} from '@/shared/models/guestInterfaces';
import type { TModalReducerReturn } from '@/shared/usecase/useModalReducer';
import { message } from 'antd';
import { useMutation, useQueryClient } from 'react-query';

export const useAddGuestGroup = (
  closeModal: TModalReducerReturn['closeModal']
) => {
  const queryClient = useQueryClient();
  return useMutation<IFetchGeneralResponse<string>, Error, TGuestGroupRoot>({
    mutationKey: ['add-guest-group'],
    mutationFn: async (value: TGuestGroupRoot) => {
      const payload = { guests: [value] } as TCreateGuestGroupsPayload;
      return createGuestGroup(payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['get-lists-of-guests']);
      message.success('Successfully added guest group!');
      closeModal();
    },
    onError: (err) => {
      message.error(err.message);
    },
  });
};
