'use client';

import { Form, type FormProps } from 'antd';
import type { ReactNode } from 'react';
import useMutateChange from '../usecase/useMutateChange';

export default function ChangePasswordFormContainer(props: FormProps) {
  const [form] = Form.useForm();
  const { mutate, isLoading } = useMutateChange();

  return (
    <Form disabled={isLoading} onFinish={mutate} form={form} {...props}>
      {props.children as ReactNode}
    </Form>
  );
}
