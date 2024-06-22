import BackButton from '../Button/BackButton';
import React from 'react';

interface IPageTitle {
  title: string;
  children?: React.ReactNode
}

const PageTitle = ({ title, children }: IPageTitle) => {
  return (
    <div className='px-4 py-2 flex justify-between items-center'>
      <div className="flex items-center gap-3">
        <BackButton />
        <h1 className="text-body-1 font-semibold truncate">{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default PageTitle;
