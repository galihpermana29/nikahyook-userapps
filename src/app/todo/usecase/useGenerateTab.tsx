import { Button, TabsProps } from 'antd';
import { ITodo } from '@/shared/models/todoInterfaces';
import { useMemo } from 'react';
import TodoListSection from '../container/section/TodoListSection';

const useGenerateTab = (
  todos: ITodo[],
  activeTab: string,
  handleTabChange: (key: string) => void
) => {
  const tabs: TabsProps['items'] = useMemo(() => {
    const categoriesSet = new Set(
      todos.map((todo) => todo.category_name).filter(Boolean)
    );
    const categories = Array.from(categoriesSet);

    const isActive = (key: string) => {
      return key.toLowerCase() === activeTab.toLowerCase();
    };

    const allTabs: TabsProps['items'] = [
      {
        key: 'all',
        label: (
          <Button
            type={isActive('all') ? 'primary' : 'default'}
            className={`${isActive('all') ? 'text-white' : 'text-ny-gray-400'} text-caption-2`}
            shape="round"
            onClick={() => handleTabChange('all')}
          >
            All
          </Button>
        ),
        children: <TodoListSection todo={todos} />,
      },
      {
        key: 'resolved',
        label: (
          <Button
            type={isActive('resolved') ? 'primary' : 'default'}
            className={`${isActive('resolved') ? 'text-white' : 'text-ny-gray-400'} text-caption-2`}
            shape="round"
            onClick={() => handleTabChange('resolved')}
          >
            Resolved
          </Button>
        ),
        children: (
          <TodoListSection
            todo={todos.filter((todo) => todo.status === 'resolved')}
          />
        ),
      },
      ...categories.map((category) => ({
        key: category.toLowerCase(),
        label: (
          <Button
            type={isActive(category) ? 'primary' : 'default'}
            className={`${isActive(category) ? 'text-white' : 'text-ny-gray-400'} capitalize text-caption-2`}
            shape="round"
            onClick={() => handleTabChange(category.toLowerCase())}
          >
            {category}
          </Button>
        ),
        children: (
          <TodoListSection
            todo={todos.filter(
              (todo) =>
                todo.category_name.toLowerCase() === category.toLowerCase()
            )}
          />
        ),
      })),
    ];
    return allTabs;
  }, [todos, activeTab, handleTabChange]);

  return { tabs };
};

export default useGenerateTab;
