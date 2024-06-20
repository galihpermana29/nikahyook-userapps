import React from 'react';

type IBottomBar = {
  children: React.ReactNode;
};

const BottomBar = ({ children }: IBottomBar) => {
  return (
    <div className="max-w-screen-sm bg-white w-full px-4 py-3 fixed bottom-0 shadow-lg z-30">
      {children}
    </div>
  );
};

export default BottomBar;
