import type { IUserJSONDetail } from '../models/userInterfaces';

export default function useParseUserJsonText(
  json_text: string | undefined
): IUserJSONDetail {
  if (!json_text)
    return {
      bride_name: null,
      groom_name: null,
      plan_for: null,
      wedding_role: null,
      wedding_theme: null,
    };

  return JSON.parse(json_text);
}
