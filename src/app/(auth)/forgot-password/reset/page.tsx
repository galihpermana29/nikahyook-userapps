import React from 'react';
import ResetPasswordFormContainer from './container/ResetPasswordFormContainer';
import ResetPasswordForm from './container/Form/ResetPasswordForm';
import { Button } from 'antd';

export default function ResetPasswordPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // case where token is not present is handled in middleware
  const token = searchParams['token'] as string;

  return (
    <ResetPasswordFormContainer
      token={token}
      className="w-full flex flex-col gap-3"
      layout="vertical">
      <ResetPasswordForm />

      <Button type="primary" htmlType="submit">
        Save
      </Button>
    </ResetPasswordFormContainer>
  );
}
