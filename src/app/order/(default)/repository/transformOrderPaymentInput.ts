import type {
  IOrderPaymentInput,
  IOrderPaymentPayload,
} from '@/shared/models/orderInterfaces';

export default function transformOrderPaymentInput(
  input: IOrderPaymentInput
): IOrderPaymentPayload {
  return {
    ...input,
    payment_file_uri: [input.payment_file_uri],
  };
}
