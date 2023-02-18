import { z } from "zod";
import { QuizWhereInputObjectSchema } from "./objects/QuizWhereInput.schema";

export const QuizDeleteManySchema = z.object({
  where: QuizWhereInputObjectSchema.optional(),
});
