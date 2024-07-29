'use client';

import { usePathname } from 'next/navigation';
import { ChatIcon } from '../Icon/ChatIcon';
import { DashboardIcon } from '../Icon/DashboardIcon';
import { HomeIcon } from '../Icon/HomeIcon';
import { ToDoIcon } from '../Icon/ToDoIcon';
import { WalletIcon } from '../Icon/WalletIcon';
import { BottomNavItem } from './BottomNavItem';

export const BottomNav = () => {
  const pathName = usePathname();

  return (
    <nav className="sticky bottom-0 text-caption-3 font-medium text-ny-primary-200 w-full max-w-screen-md mx-auto md:hidden bg-white z-30 grid grid-cols-5 px-2 justify-between">
      <BottomNavItem
        href="/discover"
        label="Home"
        currentPath={pathName}
        icon={<HomeIcon />}
      />
      <BottomNavItem
        href="/dashboard"
        label="Dashboard"
        currentPath={pathName}
        icon={<DashboardIcon />}
      />
      <BottomNavItem
        href="/todo"
        label="To Do"
        currentPath={pathName}
        icon={<ToDoIcon />}
      />
      <BottomNavItem
        href="/budget"
        label="Budget"
        currentPath={pathName}
        icon={<WalletIcon />}
      />
      <BottomNavItem
        href="/chat"
        label="Chat"
        currentPath={pathName}
        icon={<ChatIcon />}
      />
    </nav>
  );
};
