'use client';

import { editPassword } from '@/shared/actions/userService';
import type { IChangePasswordPayloadRoot } from '@/shared/models/userInterfaces';
import { clientSideReactQueryErrorDetection } from '@/shared/usecase/errorHandling';
import { message } from 'antd';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';

export default function useMutateChange() {
  const router = useRouter();

  return useMutation({
    mutationFn: (payload: IChangePasswordPayloadRoot) => {
      return editPassword(payload);
    },
    onMutate: () => {
      message.loading('We are updating your settings...');
    },
    onSuccess: (data) => {
      // throws when data.success is false, or when mutation errored
      clientSideReactQueryErrorDetection(data);
      message.success('We successfully updated your settings!');
      router.push('/profile');
    },
    // this should never fire,
    // unless something else happened.
    onError: (error: string | Error) => {
      if (error instanceof Error) {
        message.error(error.message);
      } else {
        message.error(error as string);
      }
    },
  });
}
