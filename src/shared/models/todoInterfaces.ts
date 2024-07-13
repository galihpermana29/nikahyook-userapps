export interface ITodo {
  name: string;
  category: string;
  date: string;
  time: string;
  resolved: boolean;
}

export interface IAllTodoResponse {
  todos: ITodoo[];
  total_tasks: number;
  progress: string;
}

export interface ITodoo {
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