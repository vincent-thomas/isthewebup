import { TController } from './v1/core/types';

export const VersionTable: TController = (req, res) => {
  res.json({
    prefix: '/api',
    latest: '1',
    current: {
      path: '/v1',
      version: '1',
    },
  });
};
