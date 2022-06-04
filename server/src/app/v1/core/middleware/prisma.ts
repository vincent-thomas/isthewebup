import { PrismaClient } from '@prisma/client';
const client = new PrismaClient();

export const prisma = (req, res, next) => {
  req.prisma = client;
  next();
};
