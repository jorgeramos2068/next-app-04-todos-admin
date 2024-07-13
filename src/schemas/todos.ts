import * as yup from 'yup';

export const postTodosSchema = yup.object({
  description: yup.string().required(),
  complete: yup.boolean().optional().default(false),
});

export const putTodosSchema = yup.object({
  description: yup.string().optional(),
  complete: yup.boolean().optional(),
});
