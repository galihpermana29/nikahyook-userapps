'use client';

import { updateAttendingGuests } from '@/shared/actions/guestService';
import type { IFetchGeneralResponse } from '@/shared/models/generalInterfaces';
import type { TUpdateGuestAttendingPayload } from '@/shared/models/guestInterfaces';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';

export const useSetTargetAttending = () => {
  const router = useRouter();
  return useMutation<
    IFetchGeneralResponse<number>,
    Error,
    TUpdateGuestAttendingPayload
  >({
    mutationKey: ['update-set-attending'],
    mutationFn: async (payload: TUpdateGuestAttendingPayload) =>
      updateAttendingGuests(payload),
    onSuccess: () => {
      router.push('/budget');
    },
  });
};
