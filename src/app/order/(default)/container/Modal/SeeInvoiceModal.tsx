import type { TModalReducerReturn } from '@/shared/usecase/useModalReducer';
import ModalFooter from './ModalFooter';
import useGetOrderDetails from '../../usecase/useGetOrderDetails';
import { Button } from 'antd';
import ModalLoading from './ModalLoading';
import CustomErrorBoundary from '@/shared/container/ErrorBoundary/ErrorBoundary';

export default function SeeInvoiceModal({
  closeModal,
  orderId,
}: {
  orderId: string | undefined;
  closeModal: TModalReducerReturn['closeModal'];
}) {
  if (!orderId) return;

  const {
    data: order,
    isLoading,
    isError,
    error,
  } = useGetOrderDetails(orderId);

  if (isError) return <CustomErrorBoundary error={error} />;
  if (isLoading) return <ModalLoading />;
  if (!order) return null;

  return (
    <div className="flex flex-col gap-8 items-center justify-center pt-3">
      <div className="flex h-96 justify-center items-center w-full bg-ny-gray-100 border border-ny-gray-300 text-body-2 rounded-lg">
        {order.data.invoice_file_uri ? (
          <object
            data={order.data.invoice_file_uri}
            className="object-contain bg-contain"
            type="application/pdf"
            width="100%"
            height="100%">
            No receipt found!
          </object>
        ) : (
          'No receipt found!'
        )}
      </div>

      <ModalFooter
        primaryButton={
          <Button
            target="_blank"
            disabled={!order.data.invoice_file_uri}
            href={order.data.invoice_file_uri ?? undefined}
            className="w-full"
            type="primary">
            Save
          </Button>
        }
        closeModal={closeModal}
      />
    </div>
  );
}
