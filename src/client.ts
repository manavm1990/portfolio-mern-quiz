import { PrismaClient } from "@prisma/client";
import { prepareUser } from "./user/utils.js";

const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
  const ret = { ...params };

  if (
    params.model === "User" &&
    (params.action === "create" || params.action === "update")
  )
    ret.args.data = await prepareUser(ret.args.data);

  return await next(ret);
});

export default prisma;
