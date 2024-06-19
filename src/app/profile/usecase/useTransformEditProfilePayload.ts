import type { IEditProfileInputRoot } from '@/shared/models/userInterfaces';
import dayjs from 'dayjs';

export default function useTransformEditProfilePayload(
  payload: IEditProfileInputRoot
) {
  return {
    ...payload,
    name: payload.name,
    email: payload.email,
    phone_number: payload.phone_number,
    profile_image_uri: payload.profile_image_uri,
    date_of_birth: dayjs(payload.date_of_birth).format('YYYY-MM-DD'),
    detail: {
      gender: payload.gender,
    },
  };
}
