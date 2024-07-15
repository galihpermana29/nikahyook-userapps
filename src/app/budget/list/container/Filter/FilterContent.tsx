'use client';

import { Button, Form } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React from 'react';
import { FilterForm, type TBudgetFilterForm } from '../Form/FilterForm';
import { useBudgetFilter } from '../../usecase/useBudgetFilter';

export const FilterContent = () => {
  const [filterForm] = useForm();
  const { initialValues, onFinish, onResetFilter } =
    useBudgetFilter(filterForm);

  return (
    <Form<TBudgetFilterForm>
      form={filterForm}
      layout="vertical"
      className="min-w-[200px] flex flex-col divide-y gap-1"
      onFinish={onFinish}>
      <FilterForm initialValues={initialValues} />
      <div className="flex gap-2 justify-end pt-2 w-full">
        <Button
          onClick={onResetFilter}
          className="hover:!bg-ny-primary-100 hover:!text-ny-primary-500 h-[35px] bg-ny-primary-100 text-ny-primary-500 text-caption-1 w-full font-[400] rounded-[8px]">
          Reset
        </Button>
        <Button
          htmlType="submit"
          className="hover:!bg-ny-primary-500 hover:!text-white h-[35px] w-full bg-ny-primary-500 text-white text-caption-1  font-[400] rounded-[8px]">
          Apply
        </Button>
      </div>
    </Form>
  );
};
