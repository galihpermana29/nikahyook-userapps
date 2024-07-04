'use client';

import ItemCard from '../../ItemCard/ItemCard';
import { Button, Modal } from 'antd';
import useModalReducer, {
  type IModalDefinition,
} from '@/shared/usecase/useModalReducer';
import TabLoading from '../TabLoading/TabLoading';
import ModalLoading from '../../Modal/ModalLoading';
import dynamic from 'next/dynamic';
import useGetOrders from '../../../usecase/useGetOrders';
import FinishedTabEmpty from './FinishedTabEmpty';

const AddReviewModal = dynamic(() => import('../../Modal/AddReviewModal'), {
  loading: () => <ModalLoading />,
});

const SeeInvoiceModal = dynamic(() => import('../../Modal/SeeInvoiceModal'), {
  loading: () => <ModalLoading />,
});

export default function FinishedTab() {
  const {
    data: finishedItems,
    isLoading,
    isError,
    error,
  } = useGetOrders('payment done');

  const { openModal, closeModal, modalState } = useModalReducer();
  const orderId = modalState.isOpen ? modalState.id?.toString() : undefined;

  const modalType = {
    'add-review': {
      title: 'Add Review',
      element: <AddReviewModal closeModal={closeModal} orderId={orderId} />,
    },
    'see-invoice': {
      title: 'Invoice',
      element: <SeeInvoiceModal orderId={orderId} closeModal={closeModal} />,
    },
  } as Record<string, IModalDefinition>;

  if (isError) throw error;
  if (isLoading) return <TabLoading />;
  if (!finishedItems || finishedItems.data.length === 0)
    return <FinishedTabEmpty />;

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

      {finishedItems.data.map((finishedItem) => (
        <ItemCard
          key={finishedItem.id}
          item={finishedItem}
          secondaryButton={
            <Button
              onClick={() => openModal('add-review', finishedItem.id)}
              type="primary"
              className="bg-ny-primary-100 text-ny-primary-500 block w-full">
              Add Review
            </Button>
          }
          primaryButton={
            <Button
              onClick={() => openModal('see-invoice', finishedItem.id)}
              type="primary"
              className="block w-full">
              See Invoice
            </Button>
          }
        />
      ))}
    </div>
  );
}
