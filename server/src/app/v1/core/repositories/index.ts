import { createWebsite, getWebsite } from './website';
import { TController } from '../types';
export const services: TController = (req, res, next) => {
  req.db = {
    createWebsite,
    getWebsite,
  };
  next();
};
