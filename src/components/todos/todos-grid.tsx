'use client';

import * as React from 'react';

import { Todo } from '@prisma/client';
import { updateTodo } from '@/helpers';
import { TodoItem } from './todo-item';

interface Props {
  todos?: Todo[];
}

export const TodosGrid: React.FC<Props> = ({ todos = [] }) => {
  return (
    <div className="gap-2 grid grid-cols-1 sm:grid-cols-3">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} />
      ))}
    </div>
  );
};
