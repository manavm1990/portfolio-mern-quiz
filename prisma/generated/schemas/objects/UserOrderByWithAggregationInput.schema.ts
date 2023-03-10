import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { UserCountOrderByAggregateInputObjectSchema } from "./UserCountOrderByAggregateInput.schema";
import { UserMaxOrderByAggregateInputObjectSchema } from "./UserMaxOrderByAggregateInput.schema";
import { UserMinOrderByAggregateInputObjectSchema } from "./UserMinOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    mobile: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    username: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => UserCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => UserMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => UserMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const UserOrderByWithAggregationInputObjectSchema = Schema;
