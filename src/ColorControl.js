import {SketchPicker} from 'react-color';

const DEFAULT_FORMAT = 'hex';
const DEFAULT_COLOR = '#ffffff';

export default createClass({
  handleChangeComplete(color) {
    const format = this.props.field.get('format') || DEFAULT_FORMAT
    const alpha = !this.props.field.get('alpha', true)
    let selected = color[format];
    if (typeof selected !== 'string') {
      const type = `${ format }${ alpha ? 'a' : '' }`;
      const value = Object.values(selected).join(', ');

      selected = `${ type }(${ value })`;
    }
    this.props.onChange(selected);
  },
  render() {
    const { forID, field, value, classNameWrapper, setActiveStyle, setInactiveStyle } = this.props;

    const props = {
      presetColors: undefined,
      color: value || field.get('default') || DEFAULT_COLOR,
      disableAlpha: !field.get('alpha', true),
    };

    if (field.has('presets')) {
      props.presetColors = field.get('presets').toArray();
    }

    return h(SketchPicker, {
        id: forID,
        className: classNameWrapper,
        onChangeComplete: this.handleChangeComplete,
        onFocus: setActiveStyle,
        onBlur: setInactiveStyle,
        ...props
      }
    );
  }
})