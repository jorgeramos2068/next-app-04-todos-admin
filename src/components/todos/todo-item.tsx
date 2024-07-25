'use client';

import * as React from 'react';

import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';

import { Todo } from '@prisma/client';
import styles from './todo-item.module.css';

interface Props {
  todo: Todo;
  toggleTodo: (id: string, complete: boolean) => Promise<Todo>;
}

export const TodoItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  const [optimisticTodo, toggleOptimisticTodo] = React.useOptimistic(todo, (state, newCompleteValue: boolean) => ({
    ...state,
    complete: newCompleteValue,
  }));

  const handleToggleTodo = async (): Promise<void> => {
    try {
      React.startTransition(() => toggleOptimisticTodo(!optimisticTodo.complete));
      await toggleTodo(optimisticTodo.id, !optimisticTodo.complete);
    } catch (error) {
      React.startTransition(() => toggleOptimisticTodo(!optimisticTodo.complete));
    }
  };

  return (
    <div className={optimisticTodo.complete ? styles.todoDone : styles.todoPending}>
      <div className="flex flex-col gap-4 items-center justify-start sm:flex-row">
        <div
          className={`cursor-pointer flex p-2 rounded-md hover:bg-opacity-60 ${
            optimisticTodo.complete ? 'bg-blue-100' : 'bg-red-100'
          }`}
          onClick={handleToggleTodo}
        >
          {optimisticTodo.complete ? <IoCheckboxOutline size={30} /> : <IoSquareOutline size={30} />}
        </div>
        <div className="text-center sm:text-left">{optimisticTodo.description}</div>
      </div>
    </div>
  );
};
