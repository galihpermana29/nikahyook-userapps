import type { TModalReducerReturn } from '@/shared/usecase/useModalReducer';
import { Button } from 'antd';

export default function ModalFooter({
  closeModal,
}: {
  closeModal: TModalReducerReturn['closeModal'];
}) {
  return (
    <div className="space-x-3 w-full flex justify-center">
      <Button
        onClick={closeModal}
        type="primary"
        className="bg-ny-primary-100 text-ny-primary-500 w-full">
        Cancel
      </Button>
      <Button className="w-full" htmlType="submit" type="primary">
        Submit
      </Button>
    </div>
  );
}
