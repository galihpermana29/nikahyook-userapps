import React from 'react';
import BackButton from '../Button/BackButton';

interface IDetailTitle {
  title: string;
  children?: React.ReactNode;
  withBackButton?: boolean;
}

const DetailTitle = ({
  title,
  children,
  withBackButton = true,
}: IDetailTitle) => {
  return (
    <div className="px-4 py-2 flex justify-between items-center">
      <div className="flex items-center gap-3">
        {withBackButton && <BackButton />}
        <h1 className="text-body-1 font-semibold truncate">{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default DetailTitle;
