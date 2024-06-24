'use client';

import FormItem from '@/shared/container/ClientAntd/FormItem/FormItem';
import type { ISendMessagePayload } from '@/shared/models/chatInterfaces';
import { Button, Form, Input } from 'antd';
import QuotedCard from './QuotedProductCard/QuotedCard';
import useGenerateQuoteProduct from '../usecase/useGenerateQuoteProduct';
import { IAllUserResponse } from '@/shared/models/userInterfaces';
import useSendChatToVendor from '../usecase/useSendChatToVendor';
import { IAllProductsResponse } from '@/shared/models/productInterfaces';
import closeIcon from '../../../../../public/assets/close.svg';
import Image from 'next/image';
import { useForm } from 'antd/es/form/Form';

export default function SendMessageArea({
  vendor,
  quotedProduct,
}: {
  vendor: IAllUserResponse;
  quotedProduct: IAllProductsResponse | null;
}) {
  const [form] = useForm();
  const quotedProductResult = useGenerateQuoteProduct(quotedProduct);
  const { onSendChat, clearQuoteProduct } = useSendChatToVendor(
    vendor,
    quotedProductResult
  );

  return (
    <Form<ISendMessagePayload>
      onFinish={(val) => {
        onSendChat(val.message);
        form.resetFields();
      }}
      form={form}
      className="w-full fixed bottom-0 max-w-screen-sm">
      {quotedProductResult && (
        <div className="z-[100]">
          <QuotedCard
            product={{
              ...quotedProductResult,
            }}
            closeComponent={
              <Image
                src={closeIcon}
                alt="close"
                className="cursor-pointer"
                onClick={clearQuoteProduct}
              />
            }
          />
        </div>
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
