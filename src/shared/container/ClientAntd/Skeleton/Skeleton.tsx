'use client';

import {
  Skeleton as SkeletonAntd,
  type SkeletonProps as SkeletonPropsAntd,
} from 'antd';
import { type SkeletonInputProps as SkeletonInputPropsAntd } from 'antd/es/skeleton/Input';
import { type SkeletonButtonProps as SkeletonButtonPropsAntd } from 'antd/es/skeleton/Button';

export function Skeleton(props: SkeletonPropsAntd) {
  return <SkeletonAntd {...props} />;
}

export function SkeletonInput(props: SkeletonInputPropsAntd) {
  return <SkeletonAntd.Input {...props} />;
}

export function SkeletonButton(props: SkeletonButtonPropsAntd) {
  return <SkeletonAntd.Button {...props} />;
}
