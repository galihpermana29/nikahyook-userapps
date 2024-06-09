import Image from 'next/image';
import React from 'react';

type ICuratiorialAuthorSection = {
  expert_name: string;
  expert_photo: string;
};

const CuratorialAuthorSection = ({
  expert_name,
  expert_photo,
}: ICuratiorialAuthorSection) => {
  return (
    <section className="px-4 flex items-center gap-2">
      <div className="relative size-[40px]">
        <Image
          src={expert_photo}
          alt={`${expert_name} Expert Photo`}
          fill
          className="rounded-full"
        />
      </div>
      <div>
        <p className="text-caption-2 text-ny-primary-500">Meet the Expert</p>
        <p className="text-caption-1 font-medium">
          {expert_name}{' '}
          <span className="text-caption-2 text-ny-gray-400">| Curator</span>
        </p>
      </div>
    </section>
  );
};

export default CuratorialAuthorSection;
