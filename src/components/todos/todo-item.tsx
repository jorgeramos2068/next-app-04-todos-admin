'use client';

import * as React from 'react';

import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';

import { Todo } from '@prisma/client';
import styles from './todo-item.module.css';

interface Props {
  todo: Todo;
  updateTodo: (id: string, complete: boolean) => Promise<Todo>;
}

export const TodoItem: React.FC<Props> = ({ todo, updateTodo }) => {
  const toggleTodo = (): void => {
    updateTodo(todo.id, !todo.complete);
  };

  return (
    <div className={todo.complete ? styles.todoDone : styles.todoPending}>
      <div className="flex flex-col gap-4 items-center justify-start sm:flex-row">
        <div
          className={`cursor-pointer flex p-2 rounded-md hover:bg-opacity-60 ${
            todo.complete ? 'bg-blue-100' : 'bg-red-100'
          }`}
          onClick={toggleTodo}
        >
          {todo.complete ? <IoCheckboxOutline size={30} /> : <IoSquareOutline size={30} />}
        </div>
        <div className="text-center sm:text-left">{todo.description}</div>
      </div>
    </div>
  );
};
