'use client';

import React from 'react';
import {
  Skeleton as SkeletonAntd,
  type GetRef,
  type SkeletonProps as SkeletonPropsAntd,
} from 'antd';
import { type SkeletonInputProps as SkeletonInputPropsAntd } from 'antd/es/skeleton/Input';
import { type SkeletonButtonProps as SkeletonButtonPropsAntd } from 'antd/es/skeleton/Button';

type SkeletonRefType = GetRef<typeof SkeletonAntd>;
type SkeletonInputRefType = GetRef<typeof SkeletonAntd.Input>;
type SkeletonButtonRefType = GetRef<typeof SkeletonAntd.Button>;

const Skeleton = React.forwardRef<SkeletonRefType, SkeletonPropsAntd>(
  (props: SkeletonPropsAntd) => {
    return <SkeletonAntd {...props} />;
  }
);

const SkeletonInput = React.forwardRef<
  SkeletonInputRefType,
  SkeletonInputPropsAntd
>((props: SkeletonInputPropsAntd) => {
  return <SkeletonAntd.Input {...props} />;
});

const SkeletonButton = React.forwardRef<
  SkeletonButtonRefType,
  SkeletonButtonPropsAntd
>((props: SkeletonButtonPropsAntd) => {
  return <SkeletonAntd.Button {...props} />;
});

Skeleton.displayName = 'Skeleton';
SkeletonInput.displayName = 'SkeletonInput';
SkeletonButton.displayName = 'SkeletonButton';

export { Skeleton, SkeletonInput, SkeletonButton };
