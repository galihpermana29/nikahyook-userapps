'use client';

import { Form, type FormProps } from 'antd';
import type { ReactNode } from 'react';
import useMutateReset from '../usecase/useMutateReset';

interface IResetPasswordFormContainerProps extends FormProps {
  token: string;
}

export default function ResetPasswordFormContainer(
  props: IResetPasswordFormContainerProps
) {
  const [form] = Form.useForm();
  const { mutate, isLoading } = useMutateReset(props.token);

  return (
    <Form disabled={isLoading} onFinish={mutate} form={form} {...props}>
      {props.children as ReactNode}
    </Form>
  );
}
