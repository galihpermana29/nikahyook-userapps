'use client';

import { Form, message, type FormProps } from 'antd';
import type { ReactNode } from 'react';

export default function OTPVerificationFormContainer(props: FormProps) {
  const [form] = Form.useForm();

  // mutate function here
  const mutate = (payload: { otp: string }) =>
    message.success(JSON.stringify(payload));

  return (
    <Form onFinish={mutate} form={form} {...props}>
      {props.children as ReactNode}
    </Form>
  );
}
