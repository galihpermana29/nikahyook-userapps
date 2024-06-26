'use client';

import { forgotPassword } from '@/shared/actions/userService';
import { clientSideReactQueryErrorDetection } from '@/shared/usecase/errorHandling';
import { message } from 'antd';
import { useMutation } from 'react-query';
import handleForgotPasswordError from '../repositories/handleForgotPasswordError';

export default function useMutateForgot() {
  return useMutation({
    mutationFn: forgotPassword,
    onMutate: () => {
      message.loading('We are processing your request...', 0.8);
    },
    onSuccess: (data) => {
      // throws when data.success is false, or when mutation errored
      clientSideReactQueryErrorDetection(data);
      message.success(
        `We've sent you a link to reset your password on this email: ${data.data}`
      );
    },
    onError: handleForgotPasswordError,
  });
}
