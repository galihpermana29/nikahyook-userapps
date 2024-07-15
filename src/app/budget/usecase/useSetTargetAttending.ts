'use client';

import { updateAttendingGuests } from '@/shared/actions/guestService';
import type { IFetchGeneralResponse } from '@/shared/models/generalInterfaces';
import type { TUpdateGuestAttendingPayload } from '@/shared/models/guestInterfaces';
import { message } from 'antd';
import { useMutation } from 'react-query';

export const useSetTargetAttending = (closeModal: () => void) => {
  return useMutation<
    IFetchGeneralResponse<number>,
    Error,
    TUpdateGuestAttendingPayload
  >({
    mutationKey: ['update-set-attending'],
    mutationFn: async (payload: TUpdateGuestAttendingPayload) =>
      updateAttendingGuests(payload),
    onSuccess: () => {
      message.success('Successfully set guest attending!');
      closeModal();
    },
    onError: (err) => {
      message.error(err.message);
    },
  });
};
