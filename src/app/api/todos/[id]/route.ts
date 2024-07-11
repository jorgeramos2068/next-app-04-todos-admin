import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

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
