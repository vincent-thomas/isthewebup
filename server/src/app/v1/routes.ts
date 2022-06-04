import { Router as ExpressRouter } from 'express';
import { WebsiteControllers } from './controllers/website';
import { services } from './core/repositories';
import { PATHS } from '../paths';

export const v1Routes = ExpressRouter({
  strict: true,
});

v1Routes.use(services);
v1Routes.use(PATHS.WEBSITE, WebsiteControllers);
