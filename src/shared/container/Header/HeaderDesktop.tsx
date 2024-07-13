'use client';

import { getClientSession } from '@/shared/usecase/getClientSession';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CartIcon } from '../Icon/CartIcon';
import { NotificationIcon } from '../Icon/NotificationIcon';
import HeaderDesktopNavItem from './HeaderDesktopNavItem';

function HeaderDesktop() {
  const sessionData = getClientSession();

  const pathName = usePathname();

  const excludedPaths = ['/login', '/register', '/forgot-password'];

  if (excludedPaths.includes(pathName)) return;

  return (
    <nav className="sticky hidden md:flex top-0 px-8 lg:px-[60px] py-[18px] bg-ny-primary-500 text-white z-30  justify-between items-center gap-5">
      <Link href={'/'}>
        <div className="relative w-[118px] h-5">
          <Image
            src={'/assets/logo-white.png'}
            alt="logo"
            fill
            className="object-cover"
          />
        </div>
      </Link>

      <div className="flex items-center gap-2 lg:gap-9">
        <HeaderDesktopNavItem
          href="/discover"
          label="Home"
          currentPath={pathName}
        />
        <HeaderDesktopNavItem
          href="/dashboard"
          label="Dashboard"
          currentPath={pathName}
        />
        <HeaderDesktopNavItem
          href="/todo"
          label="To Do"
          currentPath={pathName}
        />
        <HeaderDesktopNavItem
          href="/budget"
          label="Budget"
          currentPath={pathName}
        />
        <HeaderDesktopNavItem
          href="/chat"
          label="Chat"
          currentPath={pathName}
        />
      </div>

      <div className="flex items-center gap-1 text-white">
        <Link
          href={'/cart'}
          className="rounded-md p-2 hover:bg-ny-primary-200 hover:bg-opacity-35 transition-all duration-150">
          <CartIcon />
        </Link>
        <Link
          href={'/notification'}
          className="rounded-md p-2 hover:bg-ny-primary-200 hover:bg-opacity-35 transition-all duration-150">
          <NotificationIcon />
        </Link>
        <Link href={'/profile'} className="p-1">
          <div className="w-6 h-6 bg-ny-gray-100 rounded-lg border border-white relative overflow-hidden">
            <Image
              src={
                sessionData?.user_detail?.profile_image_uri ??
                '/assets/default-profile-picture.jpg'
              }
              alt="Profile Picture"
              fill
            />
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default HeaderDesktop;
