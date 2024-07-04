import Link from 'next/link';
import { ReactNode } from 'react';
import React from 'react';

interface IBottomNavItem {
  icon: ReactNode;
  label: string;
  href: string;
  currentPath: string;
}

export const BottomNavItem = ({
  icon,
  label,
  href,
  currentPath,
}: IBottomNavItem) => {
  return (
    <Link
      href={href}
      className={`flex p-4 flex-col items-center hover:bg-ny-gray-100/30 transition-colors duration-150 ${
        currentPath === href && 'text-ny-primary-500'
      }`}>
      {icon}
      <p>{label}</p>
    </Link>
  );
};
