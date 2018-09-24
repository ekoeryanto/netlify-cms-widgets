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
        iconLibrary: Object.values(icons),
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

      const { iconLibrary } = this.state;

      const pageSize = 10;

      const valueType = field.get('type', 'string');
      let cux = 0;
      let currentValue = value || field.get('default');

      // normalize current value
      if (currentValue) {
        if (typeof currentValue === 'string') {
          currentValue = currentValue.split(' ');
        } else if (currentValue.toJS) {
          // expect object or array
          currentValue = currentValue.toJS();
        }

        if (Array.isArray(currentValue)) {
          currentValue = { prefix: currentValue[0], iconName: currentValue[1] };
        }

        cux = iconLibrary.findIndex(
          l => l.prefix === currentValue.prefix && l.iconName === currentValue.iconName,
        );
      } else {
        currentValue = iconLibrary[cux];
      }

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
            length={iconLibrary.length}
            type="uniform"
            itemRenderer={(x, key) => {
              const color = cux === x ? '#1976D2' : '#3F51B5';

              return (
                <i
                  key={key}
                  role="button"
                  tabIndex={0}
                  title={iconLibrary[x].iconName}
                  onKeyDown={e => e}
                  onClick={() => {
                    let selected;
                    switch (valueType) {
                      case 'object':
                        selected = iconLibrary[x];
                        break;
                      case 'array':
                        selected = [iconLibrary[x].prefix, iconLibrary[x].iconName];
                        break;
                      case 'string':
                      default:
                        selected = `${iconLibrary[x].prefix} ${iconLibrary[x].iconName}`;
                        break;
                    }

                    onChange(selected);
                  }}
                  style={{
                    cursor: 'pointer', color, fontSize: 50, padding: 8,
                  }}
                >
                  <Preview value={iconLibrary[x]} />
                </i>
              );
            }}
          />
        </div>
      );
    },
  });
}
