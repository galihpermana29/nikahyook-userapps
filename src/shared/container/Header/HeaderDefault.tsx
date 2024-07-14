import { getServerSession } from '@/shared/usecase/getServerSession';
import Image from 'next/image';
import Link from 'next/link';
import { CartIcon } from '../Icon/CartIcon';
import { NotificationIcon } from '../Icon/NotificationIcon';

async function HeaderDefault() {
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
          href={'/cart'}
          className="rounded-md p-1 hover:bg-ny-primary-200 hover:bg-opacity-35 transition-all duration-150">
          <CartIcon />
        </Link>
        <Link
          href={'/notification'}
          className="rounded-md p-1 hover:bg-ny-primary-200 hover:bg-opacity-35 transition-all duration-150">
          <NotificationIcon />
        </Link>
        <Link href={'/profile'} className="p-1">
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
