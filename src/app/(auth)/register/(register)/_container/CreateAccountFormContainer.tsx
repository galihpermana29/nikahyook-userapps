'use client';

import type { IRegisterPayloadRoot } from '@/shared/models/authInterfaces';
import { Form, message, type FormProps } from 'antd';
import dayjs from 'dayjs';
import type { ReactNode } from 'react';

export default function CreateAccountFormContainer(props: FormProps) {
  const [form] = Form.useForm();

  // mutate function here
  const mutate = (payload: IRegisterPayloadRoot) =>
    message.success(
      JSON.stringify({
        ...payload,
        date_of_birth: dayjs(payload.date_of_birth).format('YYYY-MM-DD'),
      })
    );

  return (
    <Form onFinish={mutate} form={form} {...props}>
      {props.children as ReactNode}
    </Form>
  );
}
