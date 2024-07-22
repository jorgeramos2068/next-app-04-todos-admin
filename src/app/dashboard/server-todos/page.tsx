import { Metadata } from 'next';

import { NewTodo } from '@/components/todos/new-todo';
import { SATodosGrid } from '@/components/todos/sa-todos-grid';
import prisma from '@/lib/prisma';

export const metadata: Metadata = {
  title: 'Server Todos List',
  description: 'Description for Todos List page',
};

export default async function Page() {
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } });

  return (
    <div>
      <span className="text-3xl mb-10"></span>
      <div className="mb-5 mx-5 px-5 w-full">
        <NewTodo />
      </div>
      <SATodosGrid todos={todos} />
    </div>
  );
}
