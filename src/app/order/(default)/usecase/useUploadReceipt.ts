'use client';

import { updateOrderPayment } from '@/shared/actions/orderService';
import { IFetchGeneralResponse } from '@/shared/models/generalInterfaces';
import type { IOrderPaymentInput } from '@/shared/models/orderInterfaces';
import type { TModalReducerReturn } from '@/shared/usecase/useModalReducer';
import { message } from 'antd';
import { useMutation, useQueryClient } from 'react-query';
import transformOrderPaymentInput from '../repository/transformOrderPaymentInput';
import { useRouter } from 'next/navigation';

type TUseUploadReceiptParams = {
  id: string;
  closeModal: TModalReducerReturn['closeModal'];
};

export default function useUploadReceipt(params: TUseUploadReceiptParams) {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation<IFetchGeneralResponse<string>, Error, IOrderPaymentInput>({
    mutationFn: async (value: IOrderPaymentInput) => {
      if (!value.payment_file_uri) {
        throw new Error('Please provide a receipt!');
      }

      const payload = transformOrderPaymentInput(value);

      return updateOrderPayment(parseInt(params.id), payload);
    },
    onMutate: () => {
      message.loading('Uploading receipt...');
    },
    onSuccess: () => {
      queryClient.refetchQueries(['waiting for payment']);
      message.success('Successfully uploaded payment receipt!');
      params.closeModal();
      router.push('/order?type=paid');
    },
    onError: (error) => {
      message.error(`Something went wrong! ${error.message}`);
    },
  });
}
