import { Button } from 'antd';

interface ICuratorialItemSection {
  title: string;
  children: React.ReactNode;
}

const CuratorialItemSection = ({ children, title }: ICuratorialItemSection) => {
  return (
    <section>
      <div className="px-4 flex items-center justify-between gap-2 mb-4">
        <h2 className="text-caption-1 font-medium">{title}</h2>
        <Button className="text-xs text-ny-primary-500 bg-ny-primary-100 border-ny-primary-100 font-medium">
          See All
        </Button>
      </div>
      {children}
    </section>
  );
};

export default CuratorialItemSection;
