import { Todo } from '@prisma/client';

export const updateTodo = async (id: string, complete: boolean): Promise<Todo> => {
  const body = { complete };
  return await fetch(`/api/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  }).then(resp => resp.json());
};
