import * as yup from 'yup';

export const postTodosSchema = yup.object({
  description: yup.string().required(),
  complete: yup.boolean().optional().default(false),
});
