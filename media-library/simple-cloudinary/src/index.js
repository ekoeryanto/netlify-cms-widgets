import cloudinary from './library';

import('netlify-cms')
  .then(({ default: CMS }) => {
    CMS.registerMediaLibrary(cloudinary);
  });
