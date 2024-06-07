import React from 'react';
import Title from '../../_container/Title';

export default function ForgotPasswordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Title
        title="Reset your password"
        subtitle="Please enter your email address to request a password reset"
      />

      {children}
    </>
  );
}
