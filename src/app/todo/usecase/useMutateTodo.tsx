import { updateTodo } from '@/shared/actions/todoService';
import { IPostTodoPayload } from '@/shared/models/todoInterfaces';
import { message } from 'antd';
import { useMutation } from 'react-query';

const useMutateTodo = () => {
  const { mutate: handleUpdateTodo, isLoading: isUpdatingTodo } = useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: IPostTodoPayload }) => updateTodo(id, payload),
    onSuccess: (data) => {
      if (data.success) {
        message.success('Todo updated successfully!');
      } else {
        message.error('Failed to update todo, please try again');
      }
    },
    onError: (error: Error) => {
      message.error(`${error.message}`);
    },
  });
  return { handleUpdateTodo, isUpdatingTodo };
};

export default useMutateTodo;
