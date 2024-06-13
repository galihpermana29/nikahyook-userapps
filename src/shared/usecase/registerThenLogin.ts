import { formatRegisterPayload } from '@/app/(auth)/register/(register)/usecase/formatRegisterPayload';
import { login, register } from '../actions/userService';
import type { IRegisterInputRoot } from '../models/authInterfaces';
import { formatLoginPayload } from '@/app/(auth)/login/usecase/formatLoginPayload';
import type { IFetchGeneralResponse } from '../models/generalInterfaces';

export async function registerThenLogin(input: IRegisterInputRoot) {
  const registerPayload = formatRegisterPayload(input);
  const loginPayload = formatLoginPayload(input);

  const registerRes = await register(registerPayload);
  if (registerRes.success) {
    const loginRes = await login(loginPayload);

    // return login error because register already succeeds
    if (!loginRes.success) return loginRes as IFetchGeneralResponse<string>;
  }

  return registerRes;
}
