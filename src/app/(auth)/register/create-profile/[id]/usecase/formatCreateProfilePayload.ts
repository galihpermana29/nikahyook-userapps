import type {
  ICreateProfileInputRoot,
  ICreateProfilePayloadRoot,
} from '@/shared/models/authInterfaces';

export function formatCreateProfilePayload(
  input: ICreateProfileInputRoot
): ICreateProfilePayloadRoot {
  return {
    detail: {
      json_text: JSON.stringify({
        wedding_date: input.wedding_date,
        wedding_role: input.wedding_role,
        groom_name: input.groom_name,
        bride_name: input.bride_name,
        plan_for: input.plan_for,
        wedding_theme: input.wedding_theme,
      }),
      location: {
        value: '2782',
        label: 'Malang',
      },
    },
  };
}
