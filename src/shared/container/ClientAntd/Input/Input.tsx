'use client';

import React from 'react';
import useMounted from '@/shared/usecase/useMounted';
import {
  Input as InputAntd,
  Skeleton,
  type GetRef,
  type InputProps,
} from 'antd';
import type { PasswordProps } from 'antd/es/input';
import type { OTPProps } from 'antd/es/input/OTP';

type InputRefType = GetRef<typeof InputAntd>;
type InputPasswordRefType = GetRef<typeof InputAntd.Password>;
type InputOTPRefType = GetRef<typeof InputAntd.OTP>;

const Input = React.forwardRef<InputRefType, InputProps>(
  (props: InputProps, ref) => {
    const mounted = useMounted();

    if (!mounted) return <Skeleton.Input block active className="w-full" />;

    return <InputAntd ref={ref} {...props} />;
  }
);

const InputPassword = React.forwardRef<InputPasswordRefType, PasswordProps>(
  (props: PasswordProps, ref) => {
    const mounted = useMounted();

    if (!mounted) return <Skeleton.Input block active className="w-full" />;

    return <InputAntd.Password ref={ref} {...props} />;
  }
);

const InputOTP = React.forwardRef<InputOTPRefType, OTPProps>(
  (props: OTPProps, ref) => {
    const mounted = useMounted();

    if (!mounted) return <Skeleton.Input block active className="w-full" />;

    return <InputAntd.OTP ref={ref} {...props} />;
  }
);

Input.displayName = 'Input';
InputPassword.displayName = 'InputPassword';
InputOTP.displayName = 'InputOTP';

export { Input, InputPassword, InputOTP };
