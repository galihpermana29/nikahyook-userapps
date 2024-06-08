import { Suspense } from 'react';
import Title from '../../container/Title';
import CreateProfileLoading from './loading';

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
