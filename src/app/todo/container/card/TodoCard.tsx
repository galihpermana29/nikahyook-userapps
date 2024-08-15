'use client';

import { Checkbox, CheckboxProps, message } from 'antd';
import { ITodo } from '@/shared/models/todoInterfaces';
import React, { useState } from 'react';
import useMutateTodo from '../../usecase/useMutateTodo';
import { useFormatTime } from '../../usecase/useFormatTime';
import { useRouter } from 'next/navigation';
import { TrashIcon } from '@/shared/container/Icon/TrashIcon';
import { deleteTodo } from '@/shared/actions/todoService';

const TodoCard = ({ data }: { data: ITodo }) => {
  const router = useRouter();
  const [checked, setChecked] = useState<boolean>(data.status === 'resolved');
  const { handleUpdateTodo, isUpdatingTodo } = useMutateTodo();

  const handleCheckboxChange: CheckboxProps['onChange'] = (e) => {
    const newStatus = e.target.checked ? 'resolved' : 'unresolved';
    setChecked(e.target.checked);

    handleUpdateTodo({
      id: data.id,
      payload: {
        ...data,
        status: newStatus,
      },
    });
  };

  return (
    <div
      onClick={() => router.push(`/todo/edit/${data.id}`)}
      className="flex items-center justify-between px-3 py-2 border border-ny-gray-100 rounded-lg cursor-pointer">
      <div className="flex items-center gap-3">
        <Checkbox
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
          checked={checked}
          onChange={handleCheckboxChange}
          disabled={isUpdatingTodo}
        />
        <div className="space-y-2">
          <div>
            <p className="text-caption-2 text-ny-info-500 capitalize">
              {data.category_name}
            </p>
            <h3 className="text-caption-1 font-medium">{data.name}</h3>
          </div>

          <p className="text-caption-2 text-ny-gray-400">
            {data.date} - {useFormatTime(data.time)}
          </p>
        </div>
      </div>
      <TrashIcon
        className="hover:cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          message.success('Successfully deleted todo!');
          deleteTodo(data.id);
        }}
      />
    </div>
  );
};

export default TodoCard;
