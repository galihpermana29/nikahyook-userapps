import React, { Suspense } from 'react';
import Title from '../../container/Title';
import RegisterLoading from './loading';

export default function RegisterMainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <Title title="Create an account" />
      <Suspense fallback={<RegisterLoading />}>{children}</Suspense>
    </div>
  );
}
