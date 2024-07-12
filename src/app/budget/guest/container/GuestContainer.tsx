'use client';

import { Form, InputNumber } from 'antd';
import { useForm } from 'antd/es/form/Form';
import FormButtonGroup from '../../container/Group/FormButtonGroup';
import { useSetTargetAttending } from '../usecase/useSetTargetAttending';
import { useRouter } from 'next/navigation';

function GuestContainer() {
  const [guestForm] = useForm();
  const router = useRouter();
  const { mutate } = useSetTargetAttending();

  return (
    <main>
      <Form
        onFinish={mutate}
        form={guestForm}
        layout="vertical"
        className="p-4">
        <Form.Item
          name={'target_attending'}
          label="Guest Attending"
          rules={[{ required: true, message: 'Target guest is required!' }]}>
          <InputNumber
            className="w-full"
            placeholder="Enter your target guest attending number"
          />
        </Form.Item>
      </Form>

      <FormButtonGroup
        onCancel={() => router.push('/budget')}
        onSubmit={() => guestForm.submit()}
      />
    </main>
  );
}

export default GuestContainer;
