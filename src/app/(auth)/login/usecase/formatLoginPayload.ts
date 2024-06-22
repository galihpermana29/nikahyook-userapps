import type { ILoginPayloadRoot } from '@/shared/models/authInterfaces';

export function formatLoginPayload<T extends ILoginPayloadRoot>(
  input: T
): ILoginPayloadRoot {
  return {
    email: input.email,
    password: input.password,
  };
}
