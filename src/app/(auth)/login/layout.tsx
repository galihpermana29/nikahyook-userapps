import React, { Suspense } from 'react';
import Title from '../container/Title';
import LoginLoading from './loading';

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col gap-5 justify-center w-full max-w-sm items-center mx-auto">
      <Title title="Login to your account" />

      <Suspense fallback={<LoginLoading />}>{children}</Suspense>
    </main>
  );
}
