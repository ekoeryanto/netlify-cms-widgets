import React from 'react';
import PropTypes from 'prop-types';

const Preview = ({ value }) => (value ? (
  <i className="material-icons">
    {value}
  </i>
) : '');

Preview.propTypes = {
  value: PropTypes.node.isRequired,
};

export default Preview;
