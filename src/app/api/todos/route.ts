import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';
import { postTodosSchema } from '@/schemas';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = searchParams.get('take') ?? '10';
  const skip = searchParams.get('skip') ?? '0';
  const parsedTake = parseInt(take);
  const parsedSkip = parseInt(skip);

  if (isNaN(parsedTake) || isNaN(parsedSkip)) {
    return NextResponse.json({ message: 'The take and skip parameters must be numbers' }, { status: 400 });
  }

  const todos = await prisma.todo.findMany({
    take: parsedTake,
    skip: parsedSkip,
    orderBy: {
      id: 'desc',
    },
  });

  return NextResponse.json(todos);
}

export async function POST(request: Request) {
  try {
    const body = await postTodosSchema.validate(await request.json());
    const newTodo = {
      description: body.description,
      complete: body.complete,
    };
    const todo = await prisma.todo.create({ data: newTodo });
    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

export async function DELETE() {
  try {
    const todos = await prisma.todo.deleteMany({
      where: {
        complete: true,
      },
    });
    return NextResponse.json(todos);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
