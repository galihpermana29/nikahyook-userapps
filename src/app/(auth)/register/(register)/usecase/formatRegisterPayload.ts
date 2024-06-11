import type {
  IRegisterInputRoot,
  IRegisterPayloadRoot,
} from '@/shared/models/authInterfaces';
import dayjs from 'dayjs';

export function formatRegisterPayload(
  input: IRegisterInputRoot
): IRegisterPayloadRoot {
  return {
    type: 'user',
    role_id: 1,
    profile_image_uri: '',
    name: input.name,
    email: input.email,
    password: input.password,
    phone_number: input.phone_number,
    gender: input.gender,
    detail: {
      json_text: '',
      gender: input.gender,
      location: {
        value: '2782',
        label: 'Malang',
      },
      date_of_birth: dayjs(input.date_of_birth).format('YYYY-MM-DD'),
      wedding_date: dayjs(undefined).format('YYYY-MM-DD'),
    },
  };
}
