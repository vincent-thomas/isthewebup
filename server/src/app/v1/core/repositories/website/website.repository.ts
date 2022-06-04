import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
export const createWebsite = ({ websiteId, name, logo }) => {
  const { websites } = JSON.parse(readFileSync('./assets/data.json', 'utf8'));
  console.log(websiteId, name, logo);

  websites.forEach((website) => {
    if (website.websiteId === websiteId) {
      throw new Error('websiteId already exists');
    }
  });

  const modifiedData = {
    websites: [
      ...websites,
      {
        website_id: websiteId,
        name,
        logo,
      },
    ],
  };
  const bufferData = Buffer.from(JSON.stringify(modifiedData));
  writeFileSync(resolve('./assets/data.json'), bufferData, {});
  return { websiteId, name, logo };
};

export const getWebsite = (data?: { websiteId }) => {
  const { websites } = JSON.parse(readFileSync('./assets/data.json', 'utf8'));

  if (!data) {
    return websites;
  }

  return websites.filter((website) => website.website_id === data.websiteId);
};
