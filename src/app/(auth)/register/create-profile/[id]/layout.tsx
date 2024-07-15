import { Suspense } from 'react';
import CreateProfileLoading from './loading';
import Title from '@/app/(auth)/container/Title';
import { getServerSession } from '@/shared/usecase/getServerSession';
import { redirect } from 'next/navigation';
import LogoImage from '@/app/(auth)/container/LogoImage';

export default async function CreateProfileLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    id: string;
  };
}>) {
  const session = await getServerSession();
  if (session.user_id !== params.id) return redirect('/');

  return (
    <>
      <LogoImage />
      <Title title="Tell us who you are" />
      <Suspense fallback={<CreateProfileLoading />}>{children}</Suspense>
    </>
  );
}
