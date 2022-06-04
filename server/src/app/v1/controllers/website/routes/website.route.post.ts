import { TController } from '../../../core/types';

export const WebsitePostRoute: [string, TController] = [
  '/',
  (req, res) => {
    if (!(req.query?.website_id && req.query?.name && req.query?.logo)) {
      return res.status(400).json({ error: 'not website id' });
    }

    const { website_id: websiteId, name, logo } = req.query;

    const data = req.db.createWebsite({ websiteId, name, logo });

    res.json(data);
  },
];
