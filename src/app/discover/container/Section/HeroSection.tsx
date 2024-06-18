import { CartIcon } from '@/shared/container/Icon/CartIcon';
import { NotificationIcon } from '@/shared/container/Icon/NotificationIcon';
import { SearchIcon } from '@/shared/container/Icon/SearchIcon';
import { getServerSession } from '@/shared/usecase/getServerSession';
import { Input } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

export const HeroSection = async () => {
  const sessionData = await getServerSession();

  return (
    <section className="w-full bg-ny-primary-500 py-5 px-4 z-0 h-[248px] relative rounded-b-2xl overflow-hidden flex flex-col justify-between">
      <Image
        src={'/assets/discover-banner.png'}
        alt="Banner Image"
        fill
        className="-z-10 object-cover"
      />
      <header
        className={`w-full max-w-screen-sm z-30 flex justify-between gap-5 transition-colors duration-150`}>
        <Link href={'/'}>
          <div className="relative w-[118px] h-6">
            <Image src={'/assets/logo-white.png'} alt="Logo" fill />
          </div>
        </Link>

        <div className="flex items-center gap-3 text-white">
          <Link href={'/cart'}>
            <CartIcon />
          </Link>
          <Link href={'/notification'}>
            <NotificationIcon />
          </Link>
          <Link href={'/profile'}>
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
      <Link href="/search" className="w-full">
        <Input
          placeholder="Search Inspiration"
          prefix={<SearchIcon />}
          className="py-2 rounded-lg"
        />
      </Link>
    </section>
  );
};
