'use client';

import { Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import FormButtonGroup from '../../container/Group/FormButtonGroup';

function GuestContainer() {
  const [guestForm] = useForm();

  return (
    <main>
      <Form form={guestForm} layout="vertical" className="p-4">
        <Form.Item
          name={'guest'}
          label="Guest Attending"
          rules={[{ required: true, message: 'Target guest is required!' }]}>
          <Input placeholder="Enter your target guest attending number" />
        </Form.Item>
      </Form>

      <FormButtonGroup
        onCancel={() => guestForm.resetFields()}
        onSubmit={() => guestForm.submit()}
      />
    </main>
  );
}

export default GuestContainer;
