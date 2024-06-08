'use client';

import { login } from '@/shared/actions/userService';
import type { ILoginPayloadRoot } from '@/shared/models/userInterfaces';
import { clientSideReactQueryErrorDetection } from '@/shared/usecase/errorHandling';
import { Form, message, type FormProps } from 'antd';
import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { useMutation } from 'react-query';

export default function LoginFormContainer(props: FormProps) {
  const [form] = Form.useForm();
  const router = useRouter();

  const { mutate, isLoading } = useMutation({
    mutationFn: (payload: ILoginPayloadRoot) => login(payload),
    onMutate: () => {
      message.loading('We are logging you in...');
    },
    onSuccess: (data) => {
      clientSideReactQueryErrorDetection(data);
      router.replace('/discover');
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
