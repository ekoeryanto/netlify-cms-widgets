import React from 'react';
import createReactClass from 'create-react-class';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import ReactList from '@pake/react-list/esm/react-list.min';
import Preview from './Preview';

export default function (icons) {
  const types = {
    fab: 'brands',
    far: 'regular',
    fas: 'solid',
  };

  if (!icons) {
    // eslint-disable-next-line
    return function({ field }) {
      return (
        <div>
          <strong>
            Fontawesome
            {types[icons.prefix]}
          </strong>
          {' '}
          not found but it registered to
          {' '}
          <em>{field.get('widget')}</em>
          {' '}
widget.
        </div>
      );
    };
  }

  library.add(icons);

  return createReactClass({
    propTypes: {
      onChange: PropTypes.func.isRequired,
      forID: PropTypes.string.isRequired,
      value: PropTypes.node,
      setActiveStyle: PropTypes.func.isRequired,
      setInactiveStyle: PropTypes.func.isRequired,
      classNameWrapper: PropTypes.string.isRequired,
      field: ImmutablePropTypes.mapContains({
        default: PropTypes.string,
      }).isRequired,
    },

    getDefaultProps() {
      return { value: '' };
    },

    getInitialState() {
      return {
        iconList: Object.values(icons).map(i => `${i.prefix} ${i.iconName}`),
      };
    },

    render() {
      const {
        forID,
        field,
        value,
        setActiveStyle,
        setInactiveStyle,
        classNameWrapper,
        onChange,
      } = this.props;
      const { iconList } = this.state;
      const currentValue = value || field.get('default');
      const pageSize = 10;
      const cux = iconList.indexOf(currentValue);
      return (
        <div
          id={forID}
          className={classNameWrapper}
          onBlur={setInactiveStyle}
          onFocus={setActiveStyle}
          style={{ overflow: 'auto' }}
        >
          <ReactList
            axis="x"
            useStaticSize
            initialIndex={cux - (pageSize / 2 - 1)}
            pageSize={pageSize}
            length={iconList.length}
            type="uniform"
            itemRenderer={(x, key) => {
              const color = cux === x ? '#1976D2' : '#3F51B5';

              return (
                <i
                  key={key}
                  role="button"
                  tabIndex={0}
                  title={iconList[x]}
                  onKeyDown={e => e.keyCode === 13 && onChange(e.target.textContent)}
                  onClick={e => onChange(e.currentTarget.title)}
                  style={{
                    cursor: 'pointer', color, fontSize: 50, padding: 8,
                  }}
                >
                  <Preview value={iconList[x]} />
                </i>
              );
            }}
          />
        </div>
      );
    },
  });
}
