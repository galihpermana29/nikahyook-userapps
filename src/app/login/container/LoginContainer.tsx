'use client';

import { useMutation } from 'react-query';
import LoginForm from './LoginForm/LoginForm';
import { login } from '@/shared/actions/userService';
import { ILoginPayloadRoot } from '@/shared/models/userInterfaces';
import { clientSideReactQueryErrorDetection } from '@/shared/usecase/errorHandling';
import { message } from 'antd';

const LoginContainer = () => {
  /**
   * For client side interaction, after consideration
   * we use react query again. Most of the time we will use only the mutate which is for PUT/PATCH/POST
   *
   */

  /**
   * Use this template
   * You can try first and change the password to admin123 once you understand
   */
  const { mutate, isLoading } = useMutation({
    mutationFn: (payload: ILoginPayloadRoot) => login(payload),
    onSuccess: (data) => {
      clientSideReactQueryErrorDetection(data);
    },
    onError: (error: any) => {
      message.error(error);
    },
  });

  return (
    <div>
      <LoginForm
        onLogin={() =>
          mutate({ email: 'zidane@user.com', password: 'admin123' })
        }
        loading={isLoading}
      />
    </div>
  );
};

export default LoginContainer;
