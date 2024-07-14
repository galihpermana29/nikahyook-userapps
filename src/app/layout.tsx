import ClientSideLayout from '@/shared/container/ClientSideLayout/ClientSideLayout';
import { ConfigProvider } from 'antd';
import type { Metadata } from 'next';
import { CookiesProvider } from 'next-client-cookies/server';
import { Inter } from 'next/font/google';
import 'swiper/css';
import './globals.scss';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import HeaderDesktop from '@/shared/container/Header/HeaderDesktop';
import { headers } from 'next/headers';

dayjs.extend(calendar);

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
  const currentUrl = headers().get('x-pathname');

  const authPaths = ['/login', '/register', '/forgot-password'];

  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#E60B6A',
            },
          }}>
          <CookiesProvider>
            <ClientSideLayout>
              <HeaderDesktop />
              <div
                className={`${
                  !authPaths.some((path) => currentUrl?.includes(path)) &&
                  'max-w-screen-md mx-auto md:mt-5'
                }`}>
                {children}
              </div>
            </ClientSideLayout>
          </CookiesProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
