import React from 'react';
import Title from '../../container/Title';

export default function OTPVerificationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Title
        title="OTP Verification"
        subtitle="We have sent OTP code to your email."
      />

      {children}
    </>
  );
}
