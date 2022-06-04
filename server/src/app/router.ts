import { Router as ExpressRouter } from 'express';
import { v1Routes } from './v1/routes';

export const Router = ExpressRouter({
  strict: true,
});

Router.use('/v1', v1Routes);
