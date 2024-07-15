'use client';

import { 
  Checkbox, 
  CheckboxProps 
} from 'antd';
import { ITodoo } from '@/shared/models/todoInterfaces';
import React, { useState } from 'react';
import useMutateTodo from '../../usecase/useMutateTodo';
import { useFormatTime } from '../../usecase/useFormatTime';

const TodoCard = ({ data }: { data: ITodoo }) => {
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
    <div className="flex items-center justify-between px-3 py-2 border border-ny-gray-100 rounded-lg">
      <div className="flex items-center gap-3">
        <Checkbox
          checked={checked}
          onChange={handleCheckboxChange}
          disabled={isUpdatingTodo}
        />
        <div className="space-y-2">
          <h3 className="text-caption-1 font-medium">{data.name}</h3>
          <p className="text-caption-2 text-ny-gray-400">
            {data.date} - {useFormatTime(data.time)}
          </p>
        </div>
      </div>
      <p className="text-caption-2 text-ny-info-500">{data.category_name}</p>
    </div>
  );
};

export default TodoCard;