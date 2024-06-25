'use client';

import { Checkbox } from 'antd';
import { ITodo } from '@/shared/models/todoInterfaces';
import React, { useState } from 'react';

const TodoCard = ({ data }: { data: ITodo }) => {
  const [checked, setChecked] = useState<boolean>(data.resolved);

  return (
    <div className="flex items-center justify-between px-3 py-2 border border-ny-gray-100 rounded-lg">
      <div className="space-y-2">
        <h3 className="text-caption-1 font-medium">{data.name}</h3>
        <p className="text-caption-2 text-ny-gray-400">
          {data.date} - {data.time}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-caption-2 text-ny-info-500">{data.category}</p>
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      </div>
    </div>
  );
};

export default TodoCard;
