import { LetfArrowIcon } from '@/shared/container/Icon/LeftArrow';
import Link from 'next/link';
import { ReactNode } from 'react';

function SubrouteHeader({
  backUrl,
  extraComponent,
  title,
}: {
  backUrl?: string;
  extraComponent?: ReactNode;
  title: string;
}) {
  return (
    <header className="sticky top-0 md:top-[76px] bg-white z-10">
      <div className="flex items-center justify-between gap-2 p-4 border-b">
        <div className="flex items-center gap-2">
          <Link
            href={backUrl ?? '/budget'}
            className="hover:bg-ny-gray-100/30 transition-colors duration-150 rounded-lg">
            <LetfArrowIcon className="shrink-0" />
          </Link>

          <h1 className="text-body-1 font-medium">{title}</h1>
        </div>

        {extraComponent}
      </div>
    </header>
  );
}

export default SubrouteHeader;
