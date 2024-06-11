'use client';

import React from 'react';
import {
  Skeleton as SkeletonAntd,
  type SkeletonProps as SkeletonPropsAntd,
} from 'antd';
import { type SkeletonInputProps as SkeletonInputPropsAntd } from 'antd/es/skeleton/Input';
import { type SkeletonButtonProps as SkeletonButtonPropsAntd } from 'antd/es/skeleton/Button';

const Skeleton = (props: SkeletonPropsAntd) => {
  return <SkeletonAntd {...props} />;
};

const SkeletonInput = (props: SkeletonInputPropsAntd) => {
  return <SkeletonAntd.Input {...props} />;
};

const SkeletonButton = (props: SkeletonButtonPropsAntd) => {
  return <SkeletonAntd.Button {...props} />;
};

export { Skeleton, SkeletonInput, SkeletonButton };
