import React from 'react';
import OTPVerificationFormContainer from './container/OTPVerificationFormContainer';
import OTPVerificationForm from './container/Form/OTPVerificationForm';
import { Button } from 'antd';

export default function OTPVerificationPage() {
  return (
    <section className="w-full">
      <OTPVerificationFormContainer
        className="flex flex-col gap-3 w-full"
        layout="vertical">
        <OTPVerificationForm />
      </OTPVerificationFormContainer>

      <div className="text-caption-1 mt-5 text-center w-full">
        Didn&apos;t receive an OTP code?{' '}
        <Button type="link" className="text-ny-primary-500 inline px-0 mx-0">
          Resend OTP
        </Button>
      </div>
    </section>
  );
}
