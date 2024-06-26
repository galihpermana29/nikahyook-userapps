'use client';

import { resetPassword } from '@/shared/actions/userService';
import type { IResetPasswordPayload } from '@/shared/models/authInterfaces';
import { clientSideReactQueryErrorDetection } from '@/shared/usecase/errorHandling';
import { message } from 'antd';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';

export default function useMutateReset(token: string) {
  const router = useRouter();

  return useMutation({
    mutationFn: (form: IResetPasswordPayload) => resetPassword(form, token),
    onMutate: () => {
      message.loading('We are processing your request...', 1);
    },
    onSuccess: (data) => {
      // throws when data.success is false, or when mutation errored
      clientSideReactQueryErrorDetection(data);
      message.success("You've successfully reset your password!");
      return router.push('/login');
    },
    onError: (error: string | Error) => {
      if (error instanceof Error) {
        message.error(error.message);
      } else {
        message.error(error as string);
      }
    },
  });
}
