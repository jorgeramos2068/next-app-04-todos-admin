import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function GET() {
  // Purge table
  await prisma.todo.deleteMany();

  // Create records
  await prisma.todo.createMany({
    data: [
      { description: 'Todo task 01', complete: true },
      { description: 'Todo task 02' },
      { description: 'Todo task 03' },
      { description: 'Todo task 04' },
      { description: 'Todo task 05' },
    ],
  });

  return NextResponse.json({
    message: 'Seed executed',
  });
}
