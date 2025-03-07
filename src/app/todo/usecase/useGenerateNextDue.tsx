import { ITodo } from '@/shared/models/todoInterfaces';
import dayjs from 'dayjs';

export const useGenerateNextDue = (todos: ITodo[]) => {
  const now = dayjs();
  const unresolved = todos.filter((todo) => todo.status !== 'resolved');

  if (unresolved.length === 0) {
    return 'No tasks due';
  }

  const nextDue = unresolved.reduce(
    (nearest, todo) => {
      const todoDate = dayjs(`${todo.date} ${todo.time}`);
      if (
        todoDate.isAfter(now) &&
        (nearest === null || todoDate.isBefore(nearest))
      ) {
        return todoDate;
      }
      return nearest;
    },
    null as dayjs.Dayjs | null
  );

  if (!nextDue) {
    return 'No upcoming tasks';
  }

  const diff = nextDue.diff(now, 'minute');

  const days = Math.floor(diff / 1440);
  const hours = Math.floor((diff % 1440) / 60);
  const minutes = diff % 60;

  if (days > 0) {
    return `${days} day${days !== 1 ? 's' : ''}`;
  }

  if (hours > 0) {
    return `${hours} hour${hours !== 1 ? 's' : ''}`;
  }

  if (minutes > 0) {
    return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
  }

  return 'Due now';
};
