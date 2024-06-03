import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import ClientSideLayout from '@/shared/container/ClientSideLayout/ClientSideLayout';
import { CookiesProvider } from 'next-client-cookies/server';
import { ConfigProvider } from 'antd';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nikahyook Apps',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-screen-sm mx-auto">
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#E60B6A',
              },
            }}>
            <CookiesProvider>
              <ClientSideLayout>{children}</ClientSideLayout>
            </CookiesProvider>
          </ConfigProvider>
        </div>
      </body>
    </html>
  );
}
