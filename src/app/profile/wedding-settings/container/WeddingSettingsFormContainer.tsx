'use client';

import { formatCreateProfilePayload } from '@/app/(auth)/register/create-profile/[id]/usecase/formatCreateProfilePayload';
import { createProfile } from '@/shared/actions/userService';
import type { ICreateProfileInputRoot } from '@/shared/models/authInterfaces';
import { clientSideReactQueryErrorDetection } from '@/shared/usecase/errorHandling';
import { getClientSession } from '@/shared/usecase/getClientSession';
import useParseUserJsonText from '@/shared/usecase/useParseUserJsonText';
import { Form, message, type FormProps } from 'antd';
import dayjs from 'dayjs';
import type { ReactNode } from 'react';
import { useMutation } from 'react-query';

export default function WeddingSettingsFormContainer(props: FormProps) {
  const [form] = Form.useForm();
  const { user_id, user_detail } = getClientSession();
  const userDetail = user_detail.detail;
  const userJsonText = useParseUserJsonText(userDetail.json_text);

  const { mutate, isLoading } = useMutation({
    mutationFn: (input: ICreateProfileInputRoot) => {
      const payload = formatCreateProfilePayload(input);
      return createProfile(payload, user_id);
    },
    onMutate: () => {
      message.loading('We are updating your settings...');
    },
    onSuccess: (data) => {
      // throws when data.success is false, or when mutation errored
      clientSideReactQueryErrorDetection(data);
      message.success('We successfully updated your settings!');
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

  const initialValues = {
    ...userJsonText,
    'province-select': userDetail.location?.value.slice(0, 2),
    location: userDetail.location,
    wedding_date: dayjs(userDetail.wedding_date),
  };

  return (
    <Form
      disabled={isLoading}
      onFinish={mutate}
      form={form}
      initialValues={initialValues}
      {...props}>
      {props.children as ReactNode}
    </Form>
  );
}
