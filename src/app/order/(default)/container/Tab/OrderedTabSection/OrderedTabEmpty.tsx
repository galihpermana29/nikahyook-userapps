import EmptySection from '@/shared/container/Section/EmptySection';
import React from 'react';

export default function OrderedTabEmpty() {
  return (
    <EmptySection
      title="No item ordered yet"
      message={
        <>
          <span>You have never placed an order.</span> <br />
          <span>Please make an order!</span>
        </>
      }
    />
  );
}
