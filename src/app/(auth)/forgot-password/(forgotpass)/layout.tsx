import React, { Suspense } from 'react';
import LogoImage from '../../container/LogoImage';
import Title from '../../container/Title';
import ForgotPasswordLoading from './loading';

export default function ForgotPasswordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LogoImage />

      <Title
        title="Reset your password"
        subtitle="Please enter your email address to request a password reset"
      />

      <Suspense fallback={<ForgotPasswordLoading />}>{children}</Suspense>
    </>
  );
}
