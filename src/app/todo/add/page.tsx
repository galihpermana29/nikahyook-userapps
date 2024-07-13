import AddTodoContainer from './container/AddTodoContainer';
import PageTitle from '@/shared/container/PageTitle/PageTitle';
import React from 'react';
import { getAllTodos } from '@/shared/actions/todoService';

const AddTodo = async () => {
  const { data } = await getAllTodos();

  if (typeof data === 'string') throw Error(data);

  const categoriesSet = new Set(
    data.data.todos.map((todo) => todo.category_name).filter(Boolean)
  );
  const categories = Array.from(categoriesSet);

  return (
    <>
      <PageTitle title="Add To Do" />
      <AddTodoContainer categories={categories} />
    </>
  );
};

export default AddTodo;
