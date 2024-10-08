'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

import { updateTodo } from '@/helpers';
import { Todo } from '@prisma/client';
import { TodoItem } from './todo-item';

interface Props {
  todos?: Todo[];
}

export const TodosGrid: React.FC<Props> = ({ todos = [] }) => {
  const router = useRouter();

  const toggleTodo = async (id: string, complete: boolean): Promise<Todo> => {
    const updatedTodo = await updateTodo(id, complete);
    router.refresh();
    return updatedTodo;
  };

  return (
    <div className="gap-2 grid grid-cols-1 sm:grid-cols-3">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};
