import { Router } from 'express';
import { WebsiteRoutes } from './routes';

const router = Router({
  strict: true,
});

router.get(...WebsiteRoutes.Get).post(...WebsiteRoutes.Post);

export { router as WebsiteControllers };
