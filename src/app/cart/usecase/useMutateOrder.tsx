import { createOrder } from '@/shared/actions/productService';
import { message } from 'antd';
import { useMutation } from 'react-query';
import { useRouter } from 'next/navigation';

const useMutateOrder = () => {
  const router = useRouter();

  const { mutate: handleCreateOrder, isLoading: isCreatingOrder } = useMutation(
    {
      mutationFn: (productsid: number[]) => createOrder(productsid),
      onSuccess: (data) => {
        if (data.success) {
          message.success('Order created successfully!');
          router.push('/discover');
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
