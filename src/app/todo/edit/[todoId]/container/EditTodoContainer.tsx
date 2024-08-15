'use client';

import BottomBar from '@/shared/container/BottomBar/BottomBar';
import { Button, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { updateTodo } from '@/shared/actions/todoService';
import { IPostTodoPayload, ITodo } from '@/shared/models/todoInterfaces';
import { useRouter } from 'next/navigation';
import AddTodoForm from '@/app/todo/add/container/form/AddTodoForm';
import dayjs from 'dayjs';

const EditTodoContainer = ({
  categories,
  data,
}: {
  categories: string[];
  data: ITodo;
}) => {
  const [form] = useForm();
  const router = useRouter();

  const handleMutate = async (values: any) => {
    const payload: IPostTodoPayload = {
      name: values.name,
      category_name: values.category,
      date: values.date.format('YYYY-MM-DD'),
      time: values.time.format('HH:mm:ss'),
    } as IPostTodoPayload;

    try {
      const res = await updateTodo(data.id, payload);
      if (res.success) {
        message.success('Todo edited successfully!');
        router.push('/todo');
      } else {
        message.error('Failed to add todo. Please try again.');
      }
    } catch (error) {
      message.error('An error occurred while adding the todo.');
    }
  };

  if (data) {
    form.setFieldsValue({
      ...data,
      date: dayjs(data.date),
      time: dayjs(`${data.date} ${data.time}`),
      category: data.category_name,
    });
  }

  return (
    <main className="border-t border-t-ny-gray-100">
      <AddTodoForm
        form={form}
        categories={categories}
        handleMutate={handleMutate}
      />
      <BottomBar>
        <div className="flex items-center gap-2">
          <Button
            className="flex items-center justify-center flex-1 rounded-[8px] h-[40px] bg-ny-primary-100 text-ny-primary-500 text-body-2"
            onClick={() => form.resetFields()}>
            Cancel
          </Button>
          <Button
            className="flex items-center justify-center flex-1 rounded-[8px] h-[40px] bg-ny-primary-500 text-white text-body-2"
            onClick={() => form.submit()}>
            Save
          </Button>
        </div>
      </BottomBar>
    </main>
  );
};

export default EditTodoContainer;
