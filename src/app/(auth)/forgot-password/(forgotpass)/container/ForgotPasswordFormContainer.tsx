'use client';

import { Form, type FormProps } from 'antd';
import type { ReactNode } from 'react';
import useMutateForgot from '../usecase/useMutateForgot';

export default function ForgotPasswordFormContainer(props: FormProps) {
  const [form] = Form.useForm();
  const { mutate, isLoading } = useMutateForgot();

  return (
    <Form disabled={isLoading} onFinish={mutate} form={form} {...props}>
      {props.children as ReactNode}
    </Form>
  );
}
