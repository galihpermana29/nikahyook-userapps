'use client';

import { createProfile } from '@/shared/actions/userService';
import type { ICreateProfileInputRoot } from '@/shared/models/authInterfaces';
import { clientSideReactQueryErrorDetection } from '@/shared/usecase/errorHandling';
import { getClientSession } from '@/shared/usecase/getClientSession';
import { Form, message, type FormProps } from 'antd';
import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { useMutation } from 'react-query';
import { formatCreateProfilePayload } from '../usecase/formatCreateProfilePayload';

export default function CreateProfileFormContainer(props: FormProps) {
  const [form] = Form.useForm();
  const router = useRouter();
  const session = getClientSession();
  const userId = session.user_id;

  const { mutate, isLoading } = useMutation({
    mutationFn: (input: ICreateProfileInputRoot) => {
      const payload = formatCreateProfilePayload(input);
      return createProfile(payload, userId);
    },
    onMutate: () => {
      message.loading('We are creating your profile...', 2);
    },
    onSuccess: (data) => {
      // throws when data.success is false, or when mutation errored
      clientSideReactQueryErrorDetection(data);
      message.success('We successfully created your profile!');
      router.replace('/discover');
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
    <Form<ICreateProfileInputRoot>
      disabled={isLoading}
      onFinish={mutate}
      form={form}
      {...props}>
      {props.children as ReactNode}
    </Form>
  );
}
