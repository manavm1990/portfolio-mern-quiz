import { z } from "zod";
import { QuizWhereInputObjectSchema } from "./objects/QuizWhereInput.schema";
import { QuizOrderByWithAggregationInputObjectSchema } from "./objects/QuizOrderByWithAggregationInput.schema";
import { QuizScalarWhereWithAggregatesInputObjectSchema } from "./objects/QuizScalarWhereWithAggregatesInput.schema";
import { QuizScalarFieldEnumSchema } from "./enums/QuizScalarFieldEnum.schema";

export const QuizGroupBySchema = z.object({
  where: QuizWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      QuizOrderByWithAggregationInputObjectSchema,
      QuizOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: QuizScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(QuizScalarFieldEnumSchema),
});
