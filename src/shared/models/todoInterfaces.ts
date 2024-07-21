export interface IAllTodoResponse {
  todos: ITodo[];
  total_tasks: number;
  progress: string;
}

export interface ITodo {
  id: number;
  name: string;
  category_id: number;
  category_name: string;
  user_id: string;
  date: string;
  time: string;
  status: string;
}

export interface IPostTodoPayload {
  name: string;
  category_name: string;
  date: string;
  time: string;
  status: string;
}