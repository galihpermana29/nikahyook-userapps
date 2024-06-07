import { NikahyookLogoIcon } from '@/shared/container/Icon/NikahyookLogoIcon';

function NoResult() {
  return (
    <div className="flex flex-col gap-2 w-full text-ny-gray-300 col-span-2 sm:col-span-3 items-center justify-center h-[50vh]">
      <NikahyookLogoIcon className="text-ny-gray-100 w-32 h-32" />
      <span className="font-medium text-lg">No Result Found</span>
    </div>
  );
}

export default NoResult;
