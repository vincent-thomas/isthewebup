import { TController } from '../types';

import { Response } from 'express';

/** Controller Transform */
export const CTJson = async (req, res: Response, fn: TController) =>
  res.json(await fn(req, res));
