'use client';

import { Button } from 'antd';

const CustomErrorBoundary = ({ error }: { error: any }) => {
  return (
    <div className="bg-red-500">
      <div className="flex flex-col text-center gap-[20px] justify-center items-center">
        <div>
          <div className="text-[30px] font-bold">Something went wrong!</div>
          <div className="text-[18px] font-regular">{error.message}</div>
        </div>
        <Button
          className="max-w-max h-[40px]"
          onClick={() => window.location.reload()}>
          Reload
        </Button>
      </div>
    </div>
  );
};

export default CustomErrorBoundary;
