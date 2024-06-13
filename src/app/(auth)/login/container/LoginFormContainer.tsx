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
    mutationFn: login,
    onMutate: () => {
      message.loading('We are logging you in...');
    },
    onSuccess: (data) => {
      // throws when data.success is false, or when mutation errored
      clientSideReactQueryErrorDetection(data);
      router.replace('/discover');
    },
    onError: (error: string | Error) => {
      if (error instanceof Error) {
        message.error(error.message);
      } else {
        message.error(error as string);
      }
    },
  });

  return (
    <Form<ILoginPayloadRoot>
      disabled={isLoading}
      onFinish={mutate}
      form={form}
      {...props}>
      {props.children as ReactNode}
    </Form>
  );
}
