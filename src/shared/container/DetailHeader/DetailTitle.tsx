import React from 'react';
import BackButton from '../Button/BackButton';

const DetailTitle = ({ title }: { title: string }) => {
  return (
    <div className="px-4 py-2 flex items-center gap-3">
      <BackButton />
      <h1 className="text-body-1 font-semibold truncate">{title}</h1>
    </div>
  );
};

export default DetailTitle;
