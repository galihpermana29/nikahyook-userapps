import Image from 'next/image';
import logo from '@/../public/assets/logo-white.png';

export default function AuthGroupLoading() {
  return (
    <div
      style={{
        background: 'radial-gradient(50% 50% at 50% 50%, #f76a8b, #e60b6a)',
      }}
      className="size-full m-auto flex items-center justify-center">
      <Image src={logo} alt="logo" width={237} height={48} />
    </div>
  );
}
