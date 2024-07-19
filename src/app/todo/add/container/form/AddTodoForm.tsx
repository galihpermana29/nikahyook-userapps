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
import React, { 
    useRef, 
    useState 
} from 'react';

type IAddTodoForm = {
  form: any;
  categories: string[];
  handleMutate: (values: any) => void;
};

const AddTodoForm = ({ form, categories, handleMutate }: IAddTodoForm) => {
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
    <Form form={form} layout="vertical" className="p-4" onFinish={handleMutate}>
      <Form.Item
        name={'name'}
        label="Name"
        className="mb-3"
        rules={[{ required: true, message: 'Name is required!' }]}
      >
        <Input placeholder="Enter todo name" />
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
              <Space
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0 8px 4px',
                }}
              >
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
  );
};

export default AddTodoForm;
