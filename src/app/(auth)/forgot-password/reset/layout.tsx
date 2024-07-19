import React, { Suspense } from 'react';
import Title from '../../container/Title';
import ResetPasswordLoading from './loading';

export default function ResetPasswordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Title
        title="Create New Password"
        subtitle="Please create a new password that is different from the previous one."
      />

      <Suspense fallback={<ResetPasswordLoading />}>{children}</Suspense>
    </>
  );
}
