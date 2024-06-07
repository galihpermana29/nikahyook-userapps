import React from 'react';
import Title from '../_container/Title';

export default function ForgotPasswordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col gap-5 justify-center min-h-screen w-full max-w-sm items-center mx-auto">
      <Title
        title="Reset your password"
        subtitle="Please enter your email address to request a password reset"
      />

      {children}
    </main>
  );
}
