'use client';

import FormItem from '@/shared/container/ClientAntd/FormItem/FormItem';
import type { ISendMessagePayload } from '@/shared/models/chatInterfaces';
import { Button, Form, Input, message } from 'antd';
import useFormatMessagePayload from '../usecase/useFormatMessagePayload';

export default function SendMessageArea({ vendorId }: { vendorId: string }) {
  return (
    <Form<ISendMessagePayload>
      onFinish={(val) => {
        if (!val.message) return;
        return message.success(
          JSON.stringify(useFormatMessagePayload({ ...val, vendorId }))
        );
      }}
      className="w-full fixed bottom-0 max-w-screen-sm">
      <footer className="px-4 py-3 flex gap-2 items-center w-full border-t">
        <FormItem className="my-0 w-full" name="message">
          <Input placeholder="Type your message..." />
        </FormItem>
        <Button type="primary" htmlType="submit">
          Send
        </Button>
      </footer>
    </Form>
  );
}
