import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';
import { putTodosSchema } from '@/schemas';

interface Context {
  params: Params;
}

interface Params {
  id: string;
}

export async function GET(_request: Request, context: Context) {
  const { params } = context;
  const { id } = params;

  const todo = await prisma.todo.findUnique({
    where: {
      id: id,
    },
  });

  if (!todo) {
    NextResponse.json({ message: 'Record not found' }, { status: 404 });
  }

  return NextResponse.json(todo);
}

export async function PUT(request: Request, context: Context) {
  const { params } = context;
  const { id } = params;

  const todo = await prisma.todo.findUnique({
    where: {
      id: id,
    },
  });

  if (!todo) {
    NextResponse.json({ message: 'Record not found' }, { status: 404 });
  }

  try {
    const body = await putTodosSchema.validate(await request.json());
    const newData = {
      description: body.description,
      complete: body.complete,
    };
    const updatedTodo = await prisma.todo.update({ where: { id }, data: newData });
    return NextResponse.json(updatedTodo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
