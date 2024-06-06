import React from 'react';

type IDetailFooter = {
  children: React.ReactNode;
};

const DetailFooter = ({ children }: IDetailFooter) => {
  return (
    <div className="bg-white w-full px-4 py-3 fixed bottom-0 shadow-lg z-50">
      {children}
    </div>
  );
};

export default DetailFooter;
