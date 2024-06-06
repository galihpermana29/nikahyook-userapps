'use client';

import useMounted from '@/shared/usecase/useMounted';
import { Input as InputAntd, Skeleton, type InputProps } from 'antd';

export default function Input(props: InputProps) {
  const mounted = useMounted();

  if (!mounted) return <Skeleton.Input className="w-full" />;
  if (props.type === 'password') return <InputAntd.Password {...props} />;

  return <InputAntd {...props} />;
}
