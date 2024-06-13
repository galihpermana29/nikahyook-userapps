import React, { Suspense } from 'react';
import Title from '../../container/Title';
import OTPVerificationLoading from './loading';

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

      <Suspense fallback={<OTPVerificationLoading />}>{children}</Suspense>
    </>
  );
}
