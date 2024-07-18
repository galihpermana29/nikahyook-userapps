import { Button } from 'antd';

export default function ModalLoading() {
  return (
    <div className="flex flex-col gap-8">
      <div className="bg-ny-gray-100 rounded-lg h-96 w-full animate-pulse" />
      <div className="flex items-center gap-4 w-full">
        <Button className="w-full" disabled>
          Cancel
        </Button>
        <Button className="w-full" disabled>
          Save
        </Button>
      </div>
    </div>
  );
}
