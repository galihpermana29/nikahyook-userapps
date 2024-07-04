import { usePathname } from 'next/navigation';
import { ChatIcon } from '../shared/container/Icon/ChatIcon';
import { DashboardIcon } from '../shared/container/Icon/DashboardIcon';
import { HomeIcon } from '../shared/container/Icon/HomeIcon';
import { ToDoIcon } from '../shared/container/Icon/ToDoIcon';
import { WalletIcon } from '../shared/container/Icon/WalletIcon';
import { BottomNavItem } from './BottomNavItem';
import React from 'react';

export const BottomNav = () => {
  const pathName = usePathname();

  return (
    <nav className="border-2 text-caption-3 font-medium text-ny-primary-200 bg-white z-30 grid grid-cols-5 px-2 justify-between">
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
