import React from 'react';

export default function ForgotPasswordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col gap-5 justify-center w-full max-w-sm items-center mx-auto">
      {children}
    </main>
  );
}
