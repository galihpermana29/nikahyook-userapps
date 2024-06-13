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
      json_text: JSON.stringify({
        wedding_role: null,
        groom_name: null,
        bride_name: null,
        plan_for: null,
        wedding_theme: null,
      }),
      gender: input.gender,
      location: {
        value: '',
        label: '',
      },
      date_of_birth: dayjs(input.date_of_birth).format('YYYY-MM-DD'),
      wedding_date: dayjs(undefined).format('YYYY-MM-DD'),
    },
  };
}
