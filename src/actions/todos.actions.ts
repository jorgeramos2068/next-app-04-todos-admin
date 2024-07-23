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

export const addTodo = async (description: string): Promise<Todo | null> => {
  try {
    const newTodo = {
      description: description,
    };
    const todo = await prisma.todo.create({ data: newTodo });
    revalidatePath('/dashboard/server-todos');
    return todo;
  } catch (error) {
    return null;
  }
};

export const deleteCompleted = async (): Promise<void> => {
  try {
    await prisma.todo.deleteMany({
      where: {
        complete: true,
      },
    });
    revalidatePath('/dashboard/server-todos');
  } catch (error) {
    return;
  }
};
