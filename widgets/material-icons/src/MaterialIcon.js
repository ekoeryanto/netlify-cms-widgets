import React from 'react';
import PropTypes from 'prop-types';

const MaterialIcon = (props) => {
  const {
    icon, color, onClick, onKeyDown,
  } = props;
  return (
    <i
      onClick={onClick}
      onKeyDown={onKeyDown}
      title={icon.replace(/_/g, ' ').toUpperCase()}
      className="material-icons"
      role="button"
      tabIndex={0}
      style={{
        cursor: 'pointer',
        color,
        fontSize: 62,
        width: 62,
        height: 62,
      }}
    >
      {icon}
    </i>
  );
};

MaterialIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

export default MaterialIcon;
