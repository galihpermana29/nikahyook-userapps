import React from 'react';
import BackButton from '../Button/BackButton';

interface IPageTitle {
  title: string;
  children?: React.ReactNode;
  withBackButton?: boolean;
  backUrl?: string;
}

const PageTitle = ({
  title,
  children,
  backUrl,
  withBackButton = true,
}: IPageTitle) => {
  return (
    <div className="px-4 py-2 flex justify-between items-center w-full max-w-screen-md sticky top-0 md:top-[76px] z-10 bg-white">
      <div className="flex items-center gap-3 w-[65%]">
        {withBackButton && <BackButton to={backUrl} />}
        <h1 className="text-body-1 font-semibold truncate">{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default PageTitle;
