'use client';

import { Skeleton } from 'antd';

// you can modify this loading page

const DiscoverLoading = () => {
  return (
    <div>
      <div className="flex gap-[12px]">
        <Skeleton.Node active />
        <Skeleton.Node active />
        <Skeleton.Node active />
        <Skeleton.Node active />
      </div>
    </div>
  );
};

export default DiscoverLoading;
