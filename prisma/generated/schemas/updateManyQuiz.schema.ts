import { z } from "zod";
import { QuizUpdateManyMutationInputObjectSchema } from "./objects/QuizUpdateManyMutationInput.schema";
import { QuizWhereInputObjectSchema } from "./objects/QuizWhereInput.schema";

export const QuizUpdateManySchema = z.object({
  data: QuizUpdateManyMutationInputObjectSchema,
  where: QuizWhereInputObjectSchema.optional(),
});
