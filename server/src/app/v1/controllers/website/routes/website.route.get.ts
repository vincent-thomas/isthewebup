import { TController } from '../../../core/types';

export const WebsiteGetRoute: [string, TController] = [
  '/',
  async (req, res) => {
    if (!req.query?.website_id) {
      return res.json(req.db.getWebsite());
    }

    res.json(req.db.getWebsite({ websiteId: req.query.website_id }));
  },
];
