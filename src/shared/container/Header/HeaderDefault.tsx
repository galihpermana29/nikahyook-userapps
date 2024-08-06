import { getServerSession } from '@/shared/usecase/getServerSession';
import Image from 'next/image';
import Link from 'next/link';
import { CartIcon } from '../Icon/CartIcon';
import { NotificationIcon } from '../Icon/NotificationIcon';
import { NotificationBadge } from '../NotificationBadge/NotificationBadge';

async function HeaderDefault({ callbackUrl }: { callbackUrl?: string }) {
  const sessionData = await getServerSession();

  return (
    <header
      className={`w-full md:hidden z-30 flex items-center justify-between gap-5 transition-colors duration-150`}>
      <Link href={'/'}>
        <div className="relative w-[118px] h-6">
          <Image src={'/assets/logo-white.png'} alt="Logo" fill />
        </div>
      </Link>

      <div className="flex items-center gap-2 text-white">
        <Link
          href={callbackUrl ? `/cart?callbackUrl=${callbackUrl}` : '/cart'}
          className="rounded-md p-1 hover:bg-ny-primary-200 hover:bg-opacity-35 transition-all duration-150">
          <CartIcon />
        </Link>
        <Link
          href={
            callbackUrl
              ? `/notification?callbackUrl=${callbackUrl}`
              : '/notification'
          }
          className="rounded-md p-2 pb-[2px] hover:bg-ny-primary-200 hover:bg-opacity-35 transition-all duration-150">
          <NotificationBadge>
            <NotificationIcon color="white" />
          </NotificationBadge>
        </Link>
        <Link
          href={
            callbackUrl ? `/profile?callbackUrl=${callbackUrl}` : '/profile'
          }
          className="p-1">
          <div className="w-6 h-6 bg-ny-gray-100 rounded-lg border border-white relative overflow-hidden">
            <Image
              src={
                sessionData.user_detail.profile_image_uri ??
                '/assets/default-profile-picture.jpg'
              }
              alt="Profile Picture"
              fill
            />
          </div>
        </Link>
      </div>
    </header>
  );
}

export default HeaderDefault;
