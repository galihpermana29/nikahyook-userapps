import { Button } from 'antd';
import { LetfArrowIcon } from '../Icon/LeftArrow';
import React from 'react';

const DetailTitle = ({ title }: { title: string }) => {
  return (
    <div className="px-4 py-2 flex items-center gap-3">
      <Button type="link" icon={<LetfArrowIcon />} />
      <h1 className="text-body-1 font-semibold truncate">{title}</h1>
    </div>
  );
};

export default DetailTitle;
