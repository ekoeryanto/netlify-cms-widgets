import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const Preview = props =>
  (props.value ? <FontAwesomeIcon icon={props.value.split(' ')} {...props} /> : '');

Preview.propTypes = {
  value: PropTypes.node.isRequired,
};

export default Preview;
