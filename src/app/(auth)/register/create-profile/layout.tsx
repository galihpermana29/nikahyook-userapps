import Title from '../../_container/Title';

export default function CreateProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Title title="Tell us who you are" /> {children}
    </>
  );
}
