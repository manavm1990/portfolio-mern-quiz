import { z } from "zod";
import { QuizWhereUniqueInputObjectSchema } from "./objects/QuizWhereUniqueInput.schema";

export const QuizFindUniqueSchema = z.object({
  where: QuizWhereUniqueInputObjectSchema,
});
