import AddTodoContainer from './container/AddTodoContainer';
import PageTitle from '@/shared/container/PageTitle/PageTitle';
import React from 'react';
import useGetTodo from '../usecase/useGetTodo';

const AddTodo = async () => {
  const { data } = await useGetTodo();

  const categoriesSet = new Set(
    data.map((todo) => todo.category).filter(Boolean)
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
