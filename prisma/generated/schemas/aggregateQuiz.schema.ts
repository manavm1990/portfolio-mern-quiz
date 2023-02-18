import { z } from "zod";
import { QuizOrderByWithRelationInputObjectSchema } from "./objects/QuizOrderByWithRelationInput.schema";
import { QuizWhereInputObjectSchema } from "./objects/QuizWhereInput.schema";
import { QuizWhereUniqueInputObjectSchema } from "./objects/QuizWhereUniqueInput.schema";
import { QuizCountAggregateInputObjectSchema } from "./objects/QuizCountAggregateInput.schema";
import { QuizMinAggregateInputObjectSchema } from "./objects/QuizMinAggregateInput.schema";
import { QuizMaxAggregateInputObjectSchema } from "./objects/QuizMaxAggregateInput.schema";

export const QuizAggregateSchema = z.object({
  orderBy: z
    .union([
      QuizOrderByWithRelationInputObjectSchema,
      QuizOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: QuizWhereInputObjectSchema.optional(),
  cursor: QuizWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), QuizCountAggregateInputObjectSchema])
    .optional(),
  _min: QuizMinAggregateInputObjectSchema.optional(),
  _max: QuizMaxAggregateInputObjectSchema.optional(),
});
