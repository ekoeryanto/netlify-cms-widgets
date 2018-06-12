import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import VirtualizedSelect from 'react-virtualized-select';

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

  handleChange(option = { name: '' }) {
    this.props.onChange(option.name);
  },

  fetchCodepoints(input, callback) {
    // eslint-disable-next-line no-undef
    fetch('https://unpkg.com/material-design-icons/iconfont/codepoints')
      .then(res => res.text())
      .then(text => text.split(/\r?\n/).map(t => ({ name: t.split(' ')[0] })))
      .then((options) => {
        callback(null, {
          options: options.filter(i => i.name.includes(input.toLowerCase())),
          complete: true,
        });
      });
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
        tabIndex={0}
        key={key}
        onClick={() => selectValue(option)}
        onKeyDown={e => e.keyCode === 13 && selectValue(option)}
        onMouseEnter={() => focusOption(option)}
        style={Object.assign(styles, style)}
      >
        <div style={{ flex: '1 1 auto' }}>{option[labelKey]}</div>
        <i className="material-icons">{option[valueKey]}</i>
      </div>
    );
  },

  renderValue(option) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '0 1.5rem 0 0.5rem',
        }}
      >
        <div>{option.name}</div>
        <i className="material-icons">{option.name}</i>
      </div>
    );
  },

  render() {
    const {
      forID, field, value, setActiveStyle, setInactiveStyle, classNameWrapper,
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
          async
          labelKey="name"
          valueKey="name"
          clearable={false}
          loadOptions={this.fetchCodepoints}
          value={currentValue}
          optionRenderer={this.renderLabel}
          valueRenderer={this.renderValue}
          onChange={this.handleChange}
        />
      </div>
    );
  },
});
