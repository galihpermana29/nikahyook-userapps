import React from 'react';

export default function ReviewPageLoading() {
  return (
    <div className="flex flex-col gap-4">
      {Array(2)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="h-64 w-full animate-pulse bg-ny-gray-100 rounded-lg"
          />
        ))}
    </div>
  );
}
