'use client';

import FormButtonGroup from '@/app/budget/container/Group/FormButtonGroup';
import { Form, Input, InputNumber } from 'antd';
import { useForm } from 'antd/es/form/Form';
import type { TUpdateGuestGroup } from '@/shared/models/guestInterfaces';
import SubrouteHeader from '@/app/budget/container/Header/SubrouteHeader';
import { useParams, useRouter } from 'next/navigation';
import { useEditGuestGroup } from './usecase/useEditGuestGroup';
import { formatInitialValues } from './repository/formatInitialValues';
import { useGetGuestGroup } from './usecase/useGetGuestGroup';
import GuestEditLoading from './loading';

function EditGuestGroupPage() {
  const [guestForm] = useForm();
  const params = useParams();
  const router = useRouter();

  const guestId = parseInt(params['id'] as string);
  const { mutate } = useEditGuestGroup(guestId);
  const { data, isLoading } = useGetGuestGroup(guestId);
  if (isLoading) return <GuestEditLoading />;

  const initialValues = formatInitialValues(data);

  return (
    <>
      <SubrouteHeader backUrl="/budget/guest/list" title="Add Guest" />
      <main>
        <Form<TUpdateGuestGroup>
          onFinish={mutate}
          form={guestForm}
          layout="vertical"
          initialValues={initialValues}
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

export default EditGuestGroupPage;
