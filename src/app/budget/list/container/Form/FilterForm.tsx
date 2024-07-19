'use client';

import { getAllocationCategorySelectOptions } from '@/app/budget/repositories/getAllocationCategorySelectOptions';
import { getBudgetStatusSelectOptions } from '@/app/budget/repositories/getBudgetStatusSelectOptions';
import { Form, Select } from 'antd';
import React from 'react';

export type TBudgetFilterForm = {
  status: string | null;
  category: string | null;
};

export const FilterForm = ({
  initialValues,
}: {
  initialValues: TBudgetFilterForm;
}) => {
  return (
    <div className="space-y-3">
      <Form.Item
        className="my-0"
        name={'status'}
        label="Status"
        initialValue={initialValues.status}>
        <Select
          className="h-[35px]"
          placeholder="Choose budget status"
          options={getBudgetStatusSelectOptions()}
        />
      </Form.Item>
      <Form.Item
        className="my-0"
        name={'category'}
        label="Category"
        initialValue={initialValues.category}>
        <Select
          className="h-[35px]"
          placeholder="Choose allocation category"
          options={getAllocationCategorySelectOptions()}
        />
      </Form.Item>
    </div>
  );
};
