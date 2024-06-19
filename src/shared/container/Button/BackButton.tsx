'use client';

import { Button, type ButtonProps } from 'antd';
import { LetfArrowIcon } from '../Icon/LeftArrow';
import { useRouter } from 'next/navigation';

export default function BackButton(props: ButtonProps) {
  const router = useRouter();

  return (
    <Button
      {...props}
      type="link"
      icon={<LetfArrowIcon />}
      onClick={() => router.back()}
    />
  );
}
