'use client';

import BottomBar from '@/shared/container/BottomBar/BottomBar';
import { CalenderIcon } from '@/shared/container/Icon/CalenderIcon';
import { ClockIcon } from '@/shared/container/Icon/ClockIcon';
import {
  Button,
  DatePicker,
  Divider,
  Form,
  Input,
  InputRef,
  Select,
  Space,
  TimePicker,
} from 'antd';
import { useForm } from 'antd/es/form/Form';
import React, { useRef, useState } from 'react';

const AddTodoContainer = ({ categories }: { categories: string[] }) => {
  const [form] = useForm();
  const timeFormat = 'HH:mm';
  const [items, setItems] = useState(categories);
  const [name, setName] = useState('');
  const inputRef = useRef<InputRef>(null);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const addItem = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    e.preventDefault();
    if (name && !items.includes(name)) {
      setItems([...items, name]);
      setName('');
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  };

  return (
    <main className="border-t border-t-ny-gray-100">
      <Form form={form} layout="vertical" className="p-4">
        <Form.Item
          name={'name'}
          label="Name"
          className="mb-3"
          rules={[{ required: true, message: 'Name is required!' }]}
        >
          <Input placeholder="Enter budget name" />
        </Form.Item>
        <Form.Item
          name={'category'}
          label="Category"
          className="mb-3"
          rules={[{ required: true, message: 'Category is required!' }]}
        >
          <Select
            placeholder="Enter or choose category"
            dropdownRender={(menu) => (
              <>
                {menu}
                <Divider style={{ margin: '8px 0' }} />
                <Space style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 8px 4px' }}>
                  <Input
                    placeholder="New category"
                    ref={inputRef}
                    value={name}
                    onChange={onNameChange}
                    onKeyDown={(e) => e.stopPropagation()}
                  />
                  <Button type="primary" onClick={addItem}>
                    Add item
                  </Button>
                </Space>
              </>
            )}
            options={items.map((item) => ({ label: item, value: item }))}
          />
        </Form.Item>
        <Form.Item
          name={'date'}
          label="Date"
          className="mb-3"
          rules={[{ required: true, message: 'Date is required!' }]}
        >
          <DatePicker
            placeholder="Choose date"
            className="w-full"
            suffixIcon={<CalenderIcon />}
          />
        </Form.Item>
        <Form.Item
          name={'time'}
          label="Time"
          className="mb-3"
          rules={[{ required: true, message: 'Time is required!' }]}
        >
          <TimePicker
            placeholder="Choose time"
            format={timeFormat}
            className="w-full"
            suffixIcon={<ClockIcon fill="#292D32" />}
          />
        </Form.Item>
      </Form>

      <BottomBar>
        <div className="flex items-center gap-2">
          <Button
            className="flex items-center justify-center flex-1 rounded-[8px] h-[40px] bg-ny-primary-100 text-ny-primary-500 text-body-2"
            onClick={() => form.resetFields()}
          >
            Cancel
          </Button>
          <Button
            className="flex items-center justify-center flex-1 rounded-[8px] h-[40px] bg-ny-primary-500 text-white text-body-2"
            onClick={() => form.submit()}
          >
            Save
          </Button>
        </div>
      </BottomBar>
    </main>
  );
};

export default AddTodoContainer;
