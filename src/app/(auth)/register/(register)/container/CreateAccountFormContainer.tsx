'use client';

import type { IRegisterInputRoot } from '@/shared/models/authInterfaces';
import { clientSideReactQueryErrorDetection } from '@/shared/usecase/errorHandling';
import { registerThenLogin } from '@/shared/usecase/registerThenLogin';
import { Form, message, type FormProps } from 'antd';
import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { useMutation } from 'react-query';

export default function CreateAccountFormContainer(props: FormProps) {
  const [form] = Form.useForm();
  const router = useRouter();

  const { mutate, isLoading } = useMutation({
    mutationFn: registerThenLogin,
    onMutate: () => {
      message.loading('Please wait, we are creating your account...', 2);
    },
    onSuccess: (data) => {
      // throws when data.success is false, or when mutation errored
      clientSideReactQueryErrorDetection(data);
      router.push(`/register/create-profile/${data.data}`);
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

  return (
    <Form<IRegisterInputRoot>
      disabled={isLoading}
      onFinish={mutate}
      form={form}
      {...props}>
      {props.children as ReactNode}
    </Form>
  );
}
