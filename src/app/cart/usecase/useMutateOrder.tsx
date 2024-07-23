import { createOrder } from '@/shared/actions/productService';
import { message } from 'antd';
import { useMutation } from 'react-query';
import { useRouter } from 'next/navigation';
import { useNotifyOrder } from './useNotifyOrder';
import type { IPostGeneralSuccessResponse } from '@/shared/models/generalInterfaces';

const useMutateOrder = () => {
  const router = useRouter();
  const { mutate: notify } = useNotifyOrder();

  const { mutate: handleCreateOrder, isLoading: isCreatingOrder } = useMutation(
    {
      mutationFn: (productsid: number[]) => createOrder(productsid),
      onSuccess: (data) => {
        if (data.success) {
          notify((data.data as IPostGeneralSuccessResponse<number[]>).data);
          message.success('Order created successfully!');
          router.push('/order?type=ordered');
        } else {
          message.error('Failed to create order, please try again');
        }
      },
      onError: (error: Error) => {
        message.error(`An error occurred: ${error.message}`);
      },
    }
  );

  return { handleCreateOrder, isCreatingOrder };
};

export default useMutateOrder;
