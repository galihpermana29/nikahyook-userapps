import type { TModalReducerReturn } from '@/shared/usecase/useModalReducer';
import ModalFooter from './ModalFooter';

export default function SeeInvoiceModal({
  closeModal,
  orderId,
}: {
  orderId: string | undefined;
  closeModal: TModalReducerReturn['closeModal'];
}) {
  if (!orderId) return;

  return (
    <div className="flex flex-col gap-[10px] items-center justify-center pt-3">
      <div className="flex h-96 w-full bg-ny-gray-100 border border-ny-gray-300 rounded-lg" />
      <ModalFooter closeModal={closeModal} />
    </div>
  );
}
