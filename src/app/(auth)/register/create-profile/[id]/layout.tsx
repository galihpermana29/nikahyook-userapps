import Title from '@/app/(auth)/container/Title';
import { getServerSession } from '@/shared/usecase/getServerSession';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import CreateProfileLoading from './loading';

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
      <Title title="Tell us who you are" />
      <Suspense fallback={<CreateProfileLoading />}>{children}</Suspense>
    </>
  );
}
