'use client';

import { updateGuestGroup } from '@/shared/actions/guestService';
import type { IFetchGeneralResponse } from '@/shared/models/generalInterfaces';
import type {
  TGuestGroup,
  TUpdateGuestGroup,
} from '@/shared/models/guestInterfaces';
import type { TModalReducerReturn } from '@/shared/usecase/useModalReducer';
import { message } from 'antd';
import { useMutation, useQueryClient } from 'react-query';

export const useEditGuestGroup = (
  id: TGuestGroup['id'],
  closeModal: TModalReducerReturn['closeModal']
) => {
  const queryClient = useQueryClient();
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
      message.success('Succesfully edited guest!');
      queryClient.invalidateQueries(['get-lists-of-guests']);
      queryClient.invalidateQueries(['get-guest-group', { id }]);
      closeModal();
    },
    onError: (err) => {
      message.error(err.message);
    },
  });
};
