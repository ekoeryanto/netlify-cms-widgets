import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { SketchPicker } from '@pake/react-color';

const DEFAULT_FORMAT = 'hex';
const DEFAULT_COLOR = '#ffffff';

export default createReactClass({
  propTypes: {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string.isRequired,
    value: PropTypes.node,
    setActiveStyle: PropTypes.func.isRequired,
    setInactiveStyle: PropTypes.func.isRequired,
    classNameWrapper: PropTypes.string.isRequired,
    field: ImmutablePropTypes.mapContains({
      format: PropTypes.oneOf(['hex', 'rgb', 'hsl']),
      default: PropTypes.string,
      presets: ImmutablePropTypes.list,
      alpha: PropTypes.bool,
    }).isRequired,
  },

  getDefaultProps() {
    return {
      value: '',
    };
  },

  getInitialState() {
    return {
      displayColorPicker: false,
      color: {
        r: '255',
        g: '255',
        b: '255',
        a: '1',
      },
      hex: DEFAULT_COLOR,
    };
  },

  handleChangeComplete(color) {
    const { field, onChange } = this.props;
    const alpha = !field.get('alpha', true);
    const format = field.get('format') || DEFAULT_FORMAT;
    let selected = color[format];
    if (typeof selected !== 'string') {
      const type = `${format}${alpha ? 'a' : ''}`;
      const value = Object.values(selected).join(', ');

      selected = `${type}(${value})`;
    }
    this.setState({ color: color.rgb, hex: color.hex });
    onChange(selected);
  },

  handleClick() {
    const { displayColorPicker } = this.state;
    this.setState({ displayColorPicker: !displayColorPicker });
  },

  handleClose() {
    this.setState({ displayColorPicker: false });
  },

  render() {
    const {
      forID,
      field,
      value,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle,
    } = this.props;

    const props = {
      presetColors: undefined,
      color: value || field.get('default') || DEFAULT_COLOR,
      disableAlpha: !field.get('alpha', true),
    };

    if (field.has('presets')) {
      props.presetColors = field.get('presets').toArray();
    }

    const { color, hex, displayColorPicker } = this.state;
    const styles = {
      color: {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
        float: 'left',
        marginRight: '10px',
      },
      swatch: {
        minWidth: '120px',
        padding: '8px',
        background: '#ffffff',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
        borderRadius: '25px',
        textAlign: 'left',
      },
      hex: {
        verticalAlign: 'middle',
        lineHeight: '30px',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    };

    styles.color.boxShadow = hex === DEFAULT_COLOR ? '0 0 0 1px rgba(0,0,0,.1)' : 'none';

    return (
      <div
        id={forID}
        className={classNameWrapper}
        onFocus={setActiveStyle}
        onBlur={setInactiveStyle}
        style={{ borderColor: value }}
      >
        <button style={styles.swatch} onClick={this.handleClick} type="button">
          <div style={styles.color} />
          <span style={styles.hex}>
            {hex}
          </span>
        </button>
        {displayColorPicker
          ? (
            <div style={styles.popover}>
              <div tabIndex={0} role="button" style={styles.cover} onClick={this.handleClose} onKeyPress={this.handleClose} />
              <SketchPicker
                color={color}
                onChangeComplete={this.handleChangeComplete}
                {...props}
              />
            </div>
          ) : null}
      </div>
    );
  },
});
