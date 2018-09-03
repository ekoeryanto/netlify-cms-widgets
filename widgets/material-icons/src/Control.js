import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ReactList from '@pake/react-list/esm/react-list.min';
import icons from 'material-design-icon-list/data/list.json';

export default createReactClass({
  propTypes: {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string.isRequired,
    value: PropTypes.node.isRequired,
    setActiveStyle: PropTypes.func.isRequired,
    setInactiveStyle: PropTypes.func.isRequired,
    classNameWrapper: PropTypes.string.isRequired,
    field: ImmutablePropTypes.mapContains({
      default: PropTypes.string,
    }).isRequired,
  },

  getDdefaultProps() {
    return { value: '' };
  },

  render() {
    const {
      forID, field, value, setActiveStyle, setInactiveStyle, classNameWrapper, onChange,
    } = this.props;
    const currentValue = value || field.get('default');

    const pageSize = 10;
    const cux = icons.indexOf(currentValue);
    return (
      <div
        id={forID}
        className={classNameWrapper}
        onBlur={setInactiveStyle}
        onFocus={setActiveStyle}
        style={{ overflow: 'auto' }}
      >
        <ReactList
          useStaticSize
          axis="x"
          initialIndex={cux - (pageSize / 2 - 1)}
          pageSize={pageSize}
          length={icons.length}
          type="uniform"
          itemRenderer={(x, key) => {
            const color = cux === x ? '#1976D2' : '#3F51B5';
            return (
              <i
                role="button"
                title={icons[x].replace(/_/g, ' ').toUpperCase()}
                onKeyDown={e => e.keyCode === 13 && onChange(e.target.textContent)}
                tabIndex={0}
                key={key}
                className="material-icons"
                style={{
                  cursor: 'pointer', color, fontSize: 62, width: 62, height: 62,
                }}
                onClick={e => onChange(e.target.textContent)}
              >
                {icons[x]}
              </i>
            );
          }}
        />
      </div>
    );
  },
});
