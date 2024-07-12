'use client';

import FormButtonGroup from '@/app/budget/container/Group/FormButtonGroup';
import { Form, Input, InputNumber } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useAddGuestGroup } from './usecase/useAddGuestGroup';
import type { TUpdateGuestGroup } from '@/shared/models/guestInterfaces';
import SubrouteHeader from '@/app/budget/container/Header/SubrouteHeader';
import { useRouter } from 'next/navigation';

function AddGuestGroupPage() {
  const [guestForm] = useForm();
  const { mutate } = useAddGuestGroup();
  const router = useRouter();

  return (
    <>
      <SubrouteHeader backUrl="/budget/guest/list" title="Add Guest" />
      <main>
        <Form<TUpdateGuestGroup>
          onFinish={mutate}
          form={guestForm}
          layout="vertical"
          className="p-4 space-y-4">
          <Form.Item
            className="my-0"
            name={'name'}
            label="Guest Name"
            rules={[{ required: true, message: 'Guest name is required!' }]}>
            <Input className="w-full" placeholder="Enter guest name" />
          </Form.Item>
          <Form.Item
            className="my-0"
            name={'total'}
            label="Total guest"
            rules={[{ required: true, message: 'Total guest is required!' }]}>
            <InputNumber className="w-full" placeholder="Enter total guest" />
          </Form.Item>
        </Form>

        <FormButtonGroup
          onCancel={() => router.push('/budget/guest/list')}
          onSubmit={() => guestForm.submit()}
        />
      </main>
    </>
  );
}

export default AddGuestGroupPage;
