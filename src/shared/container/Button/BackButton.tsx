'use client';

import { Button, type ButtonProps } from 'antd';
import { LetfArrowIcon } from '../Icon/LeftArrow';
import { useRouter } from 'next/navigation';

type BackButtonProps = ButtonProps & {
  to?: string;
};

export default function BackButton({ to, ...props }: BackButtonProps) {
  const router = useRouter();

  return (
    <Button
      {...props}
      type="link"
      icon={<LetfArrowIcon />}
      onClick={() => (to ? router.push(to) : router.back())}
    />
  );
}
