import { Button } from 'antd';
import Link from 'next/link';

interface IDiscoverSection {
  title: string;
  navigateTo: string;
  children: React.ReactNode;
}

export const DiscoverSection = ({
  children,
  navigateTo,
  title,
}: IDiscoverSection) => {
  return (
    <section>
      <div className="px-4 flex items-center justify-between gap-2 mb-4">
        <h2 className="text-caption-1 font-medium">{title}</h2>
        <Link href={navigateTo}>
          <Button className="text-xs text-ny-primary-500 bg-ny-primary-100 border-ny-primary-100 font-medium">
            See All
          </Button>
        </Link>
      </div>
      {children}
    </section>
  );
};
