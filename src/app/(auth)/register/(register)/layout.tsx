import React, { Suspense } from 'react';
import LogoImage from '../../container/LogoImage';
import Title from '../../container/Title';
import RegisterLoading from './loading';

export default function RegisterMainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="md:py-[60px] w-full">
      <LogoImage />
      <Title title="Create an account" />
      <Suspense fallback={<RegisterLoading />}>{children}</Suspense>
    </div>
  );
}
