import { Metadata } from 'next';

import { TodosGrid } from '@/components/todos';
import prisma from '@/lib/prisma';
import { NewTodo } from '@/components/todos/new-todo';

export const metadata: Metadata = {
  title: 'Todos List',
  description: 'Description for Todos List page',
};

export default async function Page() {
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } });

  return (
    <div>
      <div className="mb-5 mx-5 px-5 w-full">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  );
}
