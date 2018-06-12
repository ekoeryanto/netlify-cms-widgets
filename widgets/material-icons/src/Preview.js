import React from 'react';
import PropTypes from 'prop-types';

const Preview = props => (props.value ? <i className="material-icons">{props.value}</i> : '');

Preview.propTypes = {
  value: PropTypes.node.isRequired,
};

export default Preview;
