import type { TGuestGroup } from '@/shared/models/guestInterfaces';
import type { IFetchGeneralResponse } from '@/shared/models/generalInterfaces';

export const formatInitialValues = (
  data: IFetchGeneralResponse<TGuestGroup> | undefined
) => {
  if (!data) return;
  return {
    name: data.data.name,
    total: data.data.total,
  };
};
