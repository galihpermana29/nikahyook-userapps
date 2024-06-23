'use client';

import FormItem from '@/shared/container/ClientAntd/FormItem/FormItem';
import type { ISendMessagePayload } from '@/shared/models/chatInterfaces';
import { Button, Form, Input, message } from 'antd';
import QuotedCard from './QuotedProductCard/QuotedCard';
import useGenerateQuoteProduct from '../usecase/useGenerateQuoteProduct';
import { IAllUserResponse } from '@/shared/models/userInterfaces';
import useSendChatToVendor from '../usecase/useSendChatToVendor';
import { IAllProductsResponse } from '@/shared/models/productInterfaces';

export default function SendMessageArea({
  vendor,
  quotedProduct,
}: {
  vendor: IAllUserResponse;
  quotedProduct: IAllProductsResponse | null;
}) {
  const quotedProductResult = useGenerateQuoteProduct(quotedProduct);
  const { onSendChat } = useSendChatToVendor(vendor, quotedProductResult);

  return (
    <Form<ISendMessagePayload>
      onFinish={(val) => {
        onSendChat(val.message);
      }}
      className="w-full fixed bottom-0 max-w-screen-sm">
      {quotedProductResult && (
        <QuotedCard
          product={{
            ...quotedProductResult,
          }}
        />
      )}
      <div className="">
        <footer className="px-4 py-3 flex gap-2 items-center w-full border-t">
          <FormItem className="my-0 w-full" name="message">
            <Input placeholder="Type your message..." />
          </FormItem>
          <Button type="primary" htmlType="submit">
            Send
          </Button>
        </footer>
      </div>
    </Form>
  );
}
