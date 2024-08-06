'use client';

import { Form, Input, InputNumber, Select } from 'antd';
import FormButtonGroup from '../../container/Group/FormButtonGroup';
import { useForm } from 'antd/es/form/Form';
import { useCreateBudget } from '../../usecase/useCreateBudget';
import { getAllocationCategorySelectOptions } from '../../repositories/getAllocationCategorySelectOptions';
import { useState } from 'react';

function BudgetAddContainer({
  callbackUrl,
}: {
  callbackUrl: string | undefined;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [addBudgetForm] = useForm();
  const { mutate } = useCreateBudget(setIsSubmitting, callbackUrl);

  return (
    <main>
      <Form
        onFinish={mutate}
        form={addBudgetForm}
        layout="vertical"
        className="p-4">
        <Form.Item
          name={'name'}
          label="Name"
          className="mb-3"
          rules={[{ required: true, message: 'Name is required!' }]}>
          <Input placeholder="Enter budget name" />
        </Form.Item>
        <Form.Item
          name={'nominal'}
          label="Nominal"
          className="mb-3"
          rules={[{ required: true, message: 'Nominal is required!' }]}>
          <InputNumber
            placeholder="Enter the price of the budget"
            className="w-full"
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
            }
            parser={(value) =>
              value?.replace(/IDR\s?|\.\s?|/g, '') as unknown as number
            }
          />
        </Form.Item>
        <Form.Item
          name={'category'}
          label="Category"
          className="mb-3"
          rules={[{ required: true, message: 'Category is required!' }]}>
          <Select
            options={getAllocationCategorySelectOptions()}
            placeholder="Choose budget allocation category"
          />
        </Form.Item>
      </Form>

      <FormButtonGroup
        isSubmitting={isSubmitting}
        onCancel={() => addBudgetForm.resetFields()}
        onSubmit={() => addBudgetForm.submit()}
      />
    </main>
  );
}

export default BudgetAddContainer;
