import Image from 'next/image';

function EmptySection({ message }: { message: string }) {
  return (
    <div className="w-full flex flex-col gap-5 items-center py-10">
      <div className="relative w-1/5 aspect-square">
        <Image src={'/assets/empty-box.png'} alt="Empty Box" fill />
      </div>
      <p className="text-ny-gray-400 text-xs font-medium">{message}</p>
    </div>
  );
}

export default EmptySection;
