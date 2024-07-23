import React from 'react';

const NotificationLoading = () => {
  return (
    <div className="p-4 flex flex-col gap-3">
      <div className="bg-ny-gray-100 rounded-lg h-24 animate-pulse" />
      <div className="bg-ny-gray-100 rounded-lg h-24 animate-pulse" />
      <div className="bg-ny-gray-100 rounded-lg h-24 animate-pulse" />
      <div className="bg-ny-gray-100 rounded-lg h-24 animate-pulse" />
    </div>
  );
};

export default NotificationLoading;
