import Image from 'next/image';

interface INoResult {
  text?: string;
  description?: string;
}

function NoResult({
  text = 'Search Not Found',
  description = "We didn't find what you were looking for. Try using different keywords or double-checking the spelling.",
}: INoResult) {
  return (
    <div className="flex flex-col gap-2 text-center px-5 w-full col-span-2 sm:col-span-3 md:col-span-5 items-center justify-center h-[70vh] md:h-[50vh]">
      <div className="relative w-56 aspect-square">
        <Image
          src={'/assets/search-not-found.png'}
          alt="search not found"
          fill
        />
      </div>
      <h3 className="text-caption-1 font-medium">{text}</h3>
      <p className="text-caption-2 text-ny-gray-400">{description}</p>
    </div>
  );
}

export default NoResult;
