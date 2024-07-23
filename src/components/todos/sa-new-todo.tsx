'use client';

import * as React from 'react';

import { IoTrashOutline } from 'react-icons/io5';

import { addTodo, deleteCompleted } from '@/actions/todos.actions';

export const NewTodo = () => {
  const [description, setDescription] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDescription(e.target.value);
  };

  const handleDelete = async () => {
    await deleteCompleted();
  };

  const onSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (description.trim().length === 0) {
      return;
    }
    await addTodo(description);
    setDescription('');
  };

  return (
    <form className="flex w-full" onSubmit={onSubmit}>
      <input
        type="text"
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="New Todo description"
        onChange={handleChange}
        value={description}
      />
      <button
        type="submit"
        className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
      >
        Create
      </button>
      <span className="flex flex-1"></span>
      <button
        type="button"
        className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all"
        onClick={handleDelete}
      >
        <IoTrashOutline />
        Delete completed
      </button>
    </form>
  );
};
