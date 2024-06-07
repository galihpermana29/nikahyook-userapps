import React from 'react';
import Title from '../../_container/Title';

export default function RegisterMainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Title title="Create an account" />
      {children}
    </>
  );
}
