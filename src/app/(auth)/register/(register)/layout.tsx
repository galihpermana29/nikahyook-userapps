import React, { Suspense } from 'react';
import Title from '../../container/Title';
import RegisterLoading from './loading';

export default function RegisterMainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Title title="Create an account" />
      <Suspense fallback={<RegisterLoading />}>{children}</Suspense>
    </>
  );
}
