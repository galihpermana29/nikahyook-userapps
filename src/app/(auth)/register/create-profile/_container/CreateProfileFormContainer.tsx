'use client';

import { createProfile } from '@/shared/actions/userService';
import type { ICreateProfilePayloadRoot } from '@/shared/models/authInterfaces';
import { getClientSession } from '@/shared/usecase/getClientSession';
import { Form, message, type FormProps } from 'antd';
import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { useMutation } from 'react-query';

export default function CreateProfileFormContainer(props: FormProps) {
  const [form] = Form.useForm();
  const router = useRouter();
  const session = getClientSession();
  const userId = session.user_id;

  // mutate function here
  const { mutate, isLoading } = useMutation({
    mutationFn: (payload: ICreateProfilePayloadRoot) =>
      createProfile(payload, userId),
    onMutate: () => {
      message.loading('We are creating your profile...', 2);
    },
    onSuccess: () => {
      message.success('We successfully created your profile!');
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
