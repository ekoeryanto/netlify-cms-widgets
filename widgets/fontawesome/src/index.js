import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Preview from './Preview';
import withIcon from './withIcon';

const Brands = withIcon({ fab });
const Regular = withIcon({ far });
const Solid = withIcon({ fas });

export default {
  Preview,
  Brands,
  Regular,
  Solid,
  withIcon,
};
