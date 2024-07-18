import Image from 'next/image';

function EmptySection({
  title,
  message,
}: {
  title?: React.ReactNode;
  message: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-col gap-5 items-center py-10">
      <div className="relative w-1/5 aspect-square">
        <Image src={'/assets/empty-box.png'} alt="Empty Box" fill />
      </div>
      <div className="flex flex-col gap-2 text-center justify-center">
        {title ? <p className="text-caption-1 font-medium">{title}</p> : null}
        <p className="text-ny-gray-400 text-xs font-medium max-w-80">
          {message}
        </p>
      </div>
    </div>
  );
}

export default EmptySection;
