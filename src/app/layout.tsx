import ClientSideLayout from '@/shared/container/ClientSideLayout/ClientSideLayout';
import HeaderDesktop from '@/shared/container/Header/HeaderDesktop';
import { ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import type { Metadata } from 'next';
import { CookiesProvider } from 'next-client-cookies/server';
import { Inter } from 'next/font/google';
import 'swiper/css';
import './globals.scss';

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
              <div className="flex flex-col w-full gap-5 min-h-dvh">
                <HeaderDesktop />
                <div className="max-w-screen-md w-full mx-auto">{children}</div>
              </div>
            </ClientSideLayout>
          </CookiesProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
