import PageTitle from '@/shared/container/PageTitle/PageTitle';
import UserInformation from './container/UserInformation';
import UserStatistics from './container/UserStatistics';
import ProfileNavigationButton from './container/ProfileNavigationButton';
import ProfileLogOutButton from './container/ProfileLogOutButton';

const navigationMenu = [
  { label: 'Wedding Settings', href: '/profile/wedding-settings' },
  { label: 'My Order', href: '/order' },
  { label: 'My Review', href: '/profile/review' },
  { label: 'Contact & Information', href: '/profile/contact' },
];

export default function ProfilePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const callbackUrl = searchParams.callbackUrl as string | undefined;
  return (
    <main className="flex flex-col size-full min-h-screen gap-5">
      <PageTitle backUrl={callbackUrl ?? '/discover'} title="My Profile" />

      <div className="flex flex-col gap-5 px-4 flex-grow pb-5">
        <div className="flex flex-col gap-5">
          <UserInformation />
          <UserStatistics />
        </div>

        <div className="flex flex-col gap-3 w-full flex-grow">
          {navigationMenu.map((menu) => (
            <ProfileNavigationButton
              key={menu.href}
              label={menu.label}
              href={
                callbackUrl
                  ? menu.href +
                    `?callbackUrl=/profile?callbackUrl=${callbackUrl}`
                  : menu.href
              }
            />
          ))}
        </div>

        <div className="flex flex-col gap-3 w-full">
          <ProfileNavigationButton
            href="/profile/change-password"
            label="Change Password"
          />

          <ProfileLogOutButton />
        </div>
      </div>
    </main>
  );
}
