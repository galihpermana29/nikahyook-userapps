import ColorfulBackgroundCard from '@/shared/container/ColorfulBackgroundCard/ColorfulBackgroundCard';
import PageTitle from '@/shared/container/PageTitle/PageTitle';
import React from 'react';
import ProfileNavigationButton from './container/ProfileNavigationButton';
import ProfileLogOutButton from './container/ProfileLogOutButton';

const navigationMenu = [
  { label: 'Wedding Settings', href: '/profile/wedding-settings' },
  { label: 'My Order', href: '/order' },
  { label: 'My Review', href: '/profile/review' },
  { label: 'Contact & Information', href: '/profile/contact' },
];

const LoadingProfile = () => {
  return (
    <main className="flex flex-col size-full min-h-screen gap-5">
      <PageTitle title="My Profile" />

      <div className="flex flex-col gap-5 px-4 flex-grow pb-5">
        <div className="flex flex-col gap-5">
          <div className="w-full h-16 animate-pulse bg-ny-gray-300 rounded-lg" />
          <ColorfulBackgroundCard className="flex items-center overflow-hidden gap-8 justify-center p-3 rounded-lg relative h-20" />
        </div>

        <div className="flex flex-col gap-3 w-full flex-grow">
          {navigationMenu.map((menu) => (
            <ProfileNavigationButton disabled key={menu.href} {...menu} />
          ))}
        </div>

        <div className="flex flex-col gap-3 w-full">
          <ProfileNavigationButton
            disabled
            href="/profile/change-password"
            label="Change Password"
          />

          <ProfileLogOutButton disabled />
        </div>
      </div>
    </main>
  );
};

export default LoadingProfile;
