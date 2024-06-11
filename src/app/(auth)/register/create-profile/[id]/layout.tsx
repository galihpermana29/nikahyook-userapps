import { Suspense } from 'react';
import CreateProfileLoading from './loading';
import Title from '@/app/(auth)/container/Title';

export default function CreateProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Title title="Tell us who you are" />
      <Suspense fallback={<CreateProfileLoading />}>{children}</Suspense>
    </>
  );
}
