import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { createWebsite, getWebsite } from '../repositories/website';

interface Services {
  createWebsite: typeof createWebsite;
  getWebsite: typeof getWebsite;
}

export type TController = (
  req: Request & { prisma: PrismaClient; db: Services },
  res: Response,
  next?: () => void
) => any;
