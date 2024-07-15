import Link from 'next/link';
import React from 'react';

function HeaderDesktopNavItem({
  href,
  label,
  currentPath,
}: {
  href: string;
  label: string;
  currentPath: string;
}) {
  return (
    <Link
      href={href}
      className={`text-body-2 hover:bg-ny-primary-200 hover:bg-opacity-35 p-2 rounded-md transition-all duration-150 ${
        currentPath === href
          ? 'font-semibold text-white'
          : 'font-normal text-ny-primary-100'
      }`}>
      {label}
    </Link>
  );
}

export default HeaderDesktopNavItem;
