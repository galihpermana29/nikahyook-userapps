'use client';

import type { ICreateProfilePayloadRoot } from '@/shared/models/authInterfaces';
import { Form, message, type FormProps } from 'antd';
import dayjs from 'dayjs';
import type { ReactNode } from 'react';

export default function CreateProfileFormContainer(props: FormProps) {
  const [form] = Form.useForm();

  // mutate function here
  const mutate = (payload: ICreateProfilePayloadRoot) =>
    message.success(
      JSON.stringify({
        ...payload,
        wedding_date: dayjs(payload.wedding_date).format('YYYY-MM-DD'),
      })
    );

  return (
    <Form onFinish={mutate} form={form} {...props}>
      {props.children as ReactNode}
    </Form>
  );
}
