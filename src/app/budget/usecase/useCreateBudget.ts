import { IFetchGeneralResponse } from '@/shared/models/generalInterfaces';
import { createBudget } from '@/shared/actions/budgetService';
import type { TCreateBudgetPayload } from '@/shared/models/budgetInterfaces';
import { message } from 'antd';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';

export const useCreateBudget = (
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>,
  callbackUrl?: string | null
) => {
  const router = useRouter();
  return useMutation<
    IFetchGeneralResponse<number>,
    Error,
    TCreateBudgetPayload
  >({
    mutationKey: ['create-budget'],
    mutationFn: async (payload: TCreateBudgetPayload) => createBudget(payload),
    onMutate: () => {
      setIsSubmitting(true);
    },
    onError: (err) => {
      message.error(err.message);
    },
    onSuccess: () => {
      router.push(callbackUrl ?? '/budget');
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });
};
