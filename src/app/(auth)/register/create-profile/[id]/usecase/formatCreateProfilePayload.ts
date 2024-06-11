import type {
  ICreateProfileInputRoot,
  ICreateProfilePayloadRoot,
} from '@/shared/models/authInterfaces';
import dayjs from 'dayjs';

export function formatCreateProfilePayload(
  input: ICreateProfileInputRoot
): ICreateProfilePayloadRoot {
  return {
    detail: {
      json_text: JSON.stringify({
        wedding_date: dayjs(input.wedding_date).format('YYYY-MM-DD'),
        wedding_role: input.wedding_role,
        groom_name: input.groom_name,
        bride_name: input.bride_name,
        plan_for: input.plan_for,
        wedding_theme: input.wedding_theme,
      }),
      location: {
        value: input.location,
      },
    },
  };
}
