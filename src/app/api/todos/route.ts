import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

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
  });

  return NextResponse.json(todos);
}
