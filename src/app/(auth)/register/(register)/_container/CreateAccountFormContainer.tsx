'use client';

import { login, register } from '@/shared/actions/userService';
import type { IRegisterInputRoot } from '@/shared/models/authInterfaces';
import { Form, message, type FormProps } from 'antd';
import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { useMutation } from 'react-query';

export default function CreateAccountFormContainer(props: FormProps) {
  const [form] = Form.useForm();
  const router = useRouter();

  // mutate function here
  const { mutate, isLoading } = useMutation({
    mutationFn: async (payload: IRegisterInputRoot) => {
      const data = await register(payload);
      await login({ email: payload.email, password: payload.password });

      return data;
    },
    onMutate: () => {
      message.loading('Please wait, we are creating your account...', 5);
    },
    onSuccess: async () => {
      router.push(`/register/create-profile`);
    },
    onError: (error: any) => {
      message.error(error);
    },
  });

  return (
    <Form disabled={isLoading} onFinish={mutate} form={form} {...props}>
      {props.children as ReactNode}
    </Form>
  );
}
