'use client';

import FormButtonGroup from '@/app/budget/container/Group/FormButtonGroup';
import { getAllocationCategorySelectOptions } from '@/app/budget/repositories/getAllocationCategorySelectOptions';
import { useUpdateBudget } from '@/app/budget/usecase/useUpdateBudgetStatus';
import { TBudget } from '@/shared/models/budgetInterfaces';
import { Form, Input, InputNumber, Select } from 'antd';
import { useForm } from 'antd/es/form/Form';

function BudgetEditContainer({ data, id }: { data: TBudget; id: string }) {
  const [addBudgetForm] = useForm();
  const { mutate } = useUpdateBudget(Number(id));

  if (data) {
    addBudgetForm.setFieldsValue(data);
  }

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
        onCancel={() => addBudgetForm.resetFields()}
        onSubmit={() => addBudgetForm.submit()}
      />
    </main>
  );
}

export default BudgetEditContainer;
