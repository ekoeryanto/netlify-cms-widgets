import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Preview = ({ value, ...props }) => {
  if (!value) return '';
  const icon = typeof value === 'string' ? value.split(' ') : value;
  return <FontAwesomeIcon {...props} icon={icon} />;
};

export default Preview;
