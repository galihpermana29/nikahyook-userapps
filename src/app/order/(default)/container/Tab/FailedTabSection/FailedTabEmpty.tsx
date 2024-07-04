import EmptySection from '@/shared/container/Section/EmptySection';
import React from 'react';

export default function FailedTabEmpty() {
  return (
    <EmptySection
      title="No failed order"
      message={
        <>
          <span>You have no failed order so far.</span> <br />
          <span>That&apos;s really great!</span>
        </>
      }
    />
  );
}
