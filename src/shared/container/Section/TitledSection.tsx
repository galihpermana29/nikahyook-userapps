import { Button } from 'antd';
import Link from 'next/link';

interface ITitledSection {
  title: string;
  titleSize?: 'normal' | 'large';
  navigateTo?: string;
  children: React.ReactNode;
  onLoadMore?: () => void;
}

export const TitledSection = ({
  children,
  navigateTo,
  title,
  titleSize = 'normal',
  onLoadMore,
}: ITitledSection) => {
  return (
    <section>
      <div className="px-4 flex items-center justify-between gap-2 mb-4">
        <h2
          className={`${
            titleSize === 'normal' ? 'text-caption-1' : 'text-body-2'
          } capitalize font-medium`}>
          {title}
        </h2>
        {navigateTo && (
          <Link href={navigateTo}>
            <Button className="text-caption-2 text-ny-primary-500 bg-ny-primary-100 border-ny-primary-100 font-medium">
              See All
            </Button>
          </Link>
        )}
      </div>
      {children}
      {onLoadMore && (
        <Button className="w-full text-body-2 text-ny-primary-500 border-ny-primary-100 font-medium mx-4 mt-3">
          Load More
        </Button>
      )}
    </section>
  );
};
