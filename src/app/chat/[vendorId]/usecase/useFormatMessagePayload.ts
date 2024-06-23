import type { ISendMessagePayload } from '@/shared/models/chatInterfaces';

export default function useFormatMessagePayload({
  message,
  vendorId,
}: {
  message: string;
  vendorId: string;
}) {
  const payload = {
    message,
    vendorId,
    sentAt: new Date().toISOString(),
  } as ISendMessagePayload;

  return payload;
}
