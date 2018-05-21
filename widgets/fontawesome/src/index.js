import brands from '@fortawesome/fontawesome-free-brands';
import regular from '@fortawesome/fontawesome-free-regular';
import solid from '@fortawesome/fontawesome-free-solid';

import Preview from './Preview';
import withIcon from './withIcon';

const Brands = withIcon({ brands });
const Regular = withIcon({ regular });
const Solid = withIcon({ solid });

export default {
  Preview,
  Brands,
  Regular,
  Solid,
  withIcon,
};
