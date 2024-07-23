'use client';

import * as React from 'react';

import { toggleTodo } from '@/actions/todos.actions';
import { Todo } from '@prisma/client';
import { TodoItem } from './todo-item';

interface Props {
  todos?: Todo[];
}

export const SATodosGrid: React.FC<Props> = ({ todos = [] }) => {
  return (
    <div className="gap-2 grid grid-cols-1 sm:grid-cols-3">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};
