import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const Preview = ({ value, ...props }) => (value ? <FontAwesomeIcon icon={value.split(' ')} {...props} /> : '');

Preview.propTypes = {
  value: PropTypes.node.isRequired,
};

export default Preview;
