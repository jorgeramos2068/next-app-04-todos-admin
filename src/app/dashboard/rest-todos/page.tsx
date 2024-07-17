import { Metadata } from 'next';

import { TodosGrid } from '@/components/todos';
import prisma from '@/lib/prisma';

export const metadata: Metadata = {
  title: 'Todos List',
  description: 'Description for Todos List page',
};

export default async function Page() {
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } });

  return (
    <div>
      <TodosGrid todos={todos} />
    </div>
  );
}
