'use client';

import ItemCard from '../../ItemCard/ItemCard';
import { Button, Modal } from 'antd';
import TabLoading from '../TabLoading/TabLoading';
import useModalReducer, {
  type IModalDefinition,
} from '@/shared/usecase/useModalReducer';
import dynamic from 'next/dynamic';
import ModalLoading from '../../Modal/ModalLoading';
import useGetOrders from '../../../usecase/useGetOrders';
import NeedToPayEmpty from './NeedToPayEmpty';

const UploadReceiptModal = dynamic(
  () => import('../../Modal/UploadReceiptModal'),
  {
    loading: () => <ModalLoading />,
  }
);

export default function NeedToPayTab() {
  const {
    data: needToPayOrders,
    isLoading,
    isError,
    error,
  } = useGetOrders('waiting for payment');

  const { openModal, closeModal, modalState } = useModalReducer();
  const orderId = modalState.isOpen ? modalState.id?.toString() : undefined;

  const modalType = {
    'upload-receipt': {
      title: 'Upload Payment Receipt',
      element: <UploadReceiptModal closeModal={closeModal} orderId={orderId} />,
    },
  } as Record<string, IModalDefinition>;

  if (isError) throw error;
  if (isLoading) return <TabLoading />;
  if (!needToPayOrders || needToPayOrders.data.length === 0)
    return <NeedToPayEmpty />;

  return (
    <div className="flex flex-col w-full gap-4 justify-center">
      {modalState.isOpen ? (
        <Modal
          open={modalState.isOpen}
          onCancel={closeModal}
          footer={null}
          title={modalType[modalState.type]['title']}>
          {modalType[modalState.type]['element']}
        </Modal>
      ) : null}

      {needToPayOrders.data.map((order) => (
        <ItemCard
          key={order.id}
          item={order}
          secondaryButton={
            <Button
              href={`/order/details/${order.id}`}
              type="primary"
              className="bg-ny-primary-100 text-ny-primary-500 block w-full">
              See Billing
            </Button>
          }
          primaryButton={
            <Button
              onClick={() => openModal('upload-receipt', order.id)}
              type="primary"
              className="block w-full">
              Upload Payment Receipt
            </Button>
          }
        />
      ))}
    </div>
  );
}
