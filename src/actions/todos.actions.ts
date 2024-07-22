'use server';

import { revalidatePath } from 'next/cache';

import prisma from '@/lib/prisma';
import { Todo } from '@prisma/client';

export const toggleTodo = async (id: string, complete: boolean): Promise<Todo> => {
  const todo = await prisma.todo.findUnique({ where: { id } });

  if (!todo) {
    throw `Todo not found`;
  }
  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { complete },
  });

  revalidatePath('/dashboard/server-todos');
  return updatedTodo;
};
