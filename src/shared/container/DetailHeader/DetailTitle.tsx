'use client';

import { Button } from 'antd';
import { LetfArrowIcon } from '../Icon/LeftArrow';
import React from 'react';
import { useRouter } from 'next/navigation';

interface IDetailTitle {
  title: string;
  children?: React.ReactNode
}

const DetailTitle = ({ title, children }: IDetailTitle) => {
  const router = useRouter();
  return (
    <div className='px-4 py-2 flex justify-between items-center'>
      <div className="flex items-center gap-3">
        <Button
          type="link"
          icon={<LetfArrowIcon />}
          onClick={() => router.back()}
        />
        <h1 className="text-body-1 font-semibold truncate">{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default DetailTitle;
