'use client';

import useMounted from '@/shared/usecase/useMounted';
import { Input as InputAntd, Skeleton, type InputProps } from 'antd';
import type { PasswordProps } from 'antd/es/input';
import type { OTPProps } from 'antd/es/input/OTP';

export function Input(props: InputProps) {
  const mounted = useMounted();

  if (!mounted) return <Skeleton.Input block active className="w-full" />;

  return <InputAntd {...props} />;
}

export function InputPassword(props: PasswordProps) {
  const mounted = useMounted();

  if (!mounted) return <Skeleton.Input block active className="w-full" />;

  return <InputAntd.Password {...props} />;
}

export function InputOTP(props: OTPProps) {
  const mounted = useMounted();

  if (!mounted) return <Skeleton.Input block active className="w-full" />;

  return <InputAntd.OTP {...props} />;
}
