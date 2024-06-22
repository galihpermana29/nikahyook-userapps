'use client';

import { Button } from 'antd';
import { LetfArrowIcon } from '../Icon/LeftArrow';
import React from 'react';
import { useRouter } from 'next/navigation';

const DetailTitle = ({
  title,
  withBackButton = true,
}: {
  title: string;
  withBackButton?: boolean;
}) => {
  const router = useRouter();
  return (
    <div className="px-4 py-2 flex items-center gap-3">
      {withBackButton && (
        <Button
          type="link"
          icon={<LetfArrowIcon />}
          onClick={() => router.back()}
        />
      )}
      <h1 className="text-body-1 font-semibold truncate">{title}</h1>
    </div>
  );
};

export default DetailTitle;
