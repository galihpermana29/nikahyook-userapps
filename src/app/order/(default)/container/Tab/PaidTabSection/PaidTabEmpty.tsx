import EmptySection from '@/shared/container/Section/EmptySection';
import React from 'react';

export default function PaidTabEmpty() {
  return (
    <EmptySection
      title="No order paid yet"
      message={
        <>
          <span>There are currently no orders paid.</span> <br />
          <span>Please wait while we confirm your payments.</span>
        </>
      }
    />
  );
}
