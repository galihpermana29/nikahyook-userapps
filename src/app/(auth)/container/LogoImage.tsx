import Image from 'next/image';
import React from 'react';

function LogoImage() {
  return (
    <div className="hidden md:flex justify-center mb-10">
      <div className="relative w-[280px] h-[52px]">
        <Image src={'/assets/logo-primary.png'} fill alt="logo" />
      </div>
    </div>
  );
}

export default LogoImage;
