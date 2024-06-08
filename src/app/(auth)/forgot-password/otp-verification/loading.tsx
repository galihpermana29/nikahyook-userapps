import React from 'react';
import OTPVerificationFormContainer from './container/OTPVerificationFormContainer';
import { SkeletonInput } from '@/shared/container/ClientAntd/Skeleton/Skeleton';
import { Button } from 'antd';

export default function OTPVerificationLoading() {
  return (
    <section className="w-full">
      <OTPVerificationFormContainer
        disabled
        className="flex flex-col gap-3 w-full"
        layout="vertical">
        <SkeletonInput active block />
      </OTPVerificationFormContainer>

      <div className="text-caption-1 mt-5 text-center w-full">
        Didn&apos;t receive an OTP code?{' '}
        <Button
          disabled
          type="link"
          className="text-ny-primary-500 inline px-0 mx-0">
          Resend OTP
        </Button>
      </div>
    </section>
  );
}
