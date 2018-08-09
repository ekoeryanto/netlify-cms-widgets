import React from 'react';
import createReactClass from 'create-react-class';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import VirtualizedSelect from 'react-virtualized-select';
import { library } from '@fortawesome/fontawesome-svg-core';
import Preview from './Preview';

export default function (fontIcons = {}) {
  const [type, icons] = Object.entries(fontIcons)[0];
  if (!icons) {
    // eslint-disable-next-line
    return function({ field }) {
      return (
        <div>
          <strong>
Fontawesome
            {type}
          </strong>
          {' '}
not found but it registered to
          {' '}
          <em>
            {field.get('widget')}
          </em>
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

    handleChange(change = { label: '', value: '' }) {
      const { onChange } = this.props;
      onChange(change.value);
    },

    renderLabel({
      focusedOption,
      focusOption,
      key,
      labelKey,
      option,
      selectValue,
      style,
      valueArray,
      valueKey,
    }) {
      const styles = {
        display: 'flex',
        alignItems: 'center',
        padding: '0 1rem',
      };
      if (option === focusedOption) {
        styles.backgroundColor = 'rgba(0, 126, 255, 0.1)';
      }
      if (valueArray.indexOf(option) >= 0) {
        styles.fontWeight = 'bold';
      }
      return (
        <div
          role="menu"
          key={key}
          tabIndex={0}
          onClick={() => selectValue(option)}
          onKeyDown={e => e.keyCode === 13 && selectValue(option)}
          onMouseEnter={() => focusOption(option)}
          style={Object.assign(styles, style)}
        >
          <div style={{ flex: '1 1 auto' }}>
            {option[labelKey]}
          </div>
          <Preview value={option[valueKey]} />
        </div>
      );
    },

    renderValue({ label, value }) {
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '0 1.5rem 0 0.5rem',
          }}
        >
          <div>
            {label}
          </div>
          <Preview value={value} />
        </div>
      );
    },

    render() {
      const {
        forID,
        field,
        value,
        setActiveStyle,
        setInactiveStyle,
        classNameWrapper,
      } = this.props;
      const currentValue = value || field.get('default');

      return (
        <div
          id={forID}
          className={classNameWrapper}
          onBlur={setInactiveStyle}
          onFocus={setActiveStyle}
        >
          <VirtualizedSelect
            clearable={false}
            options={Object.values(icons).map(i => ({
              label: i.iconName,
              value: `${i.prefix} ${i.iconName}`,
            }))}
            value={currentValue}
            optionRenderer={this.renderLabel}
            valueRenderer={this.renderValue}
            onChange={this.handleChange}
          />
        </div>
      );
    },
  });
}
