import createReactClass from 'create-react-class';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import VirtualizedSelect from 'react-virtualized-select';
import fontawesome from '@fortawesome/fontawesome';
import Preview from './Preview';

export default function (option = {}) {
  const [type, icons] = Object.entries(option)[0];
  if (!icons) {
    // eslint-disable-next-line
    return function({ field }) {
      return (
        <div>
          <strong>Fontawesome {type}</strong> not found but it has registered to{' '}
          <em>{field.get('widget')}</em> widget.
        </div>
      );
    };
  }

  fontawesome.library.add(icons);

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

    handleChange(opts = { label: '', value: '' }) {
      this.props.onChange(opts.value);
    },

    renderLabel({
      focusedOption, focusOption, key, selectValue, style, valueArray,
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
          key={key}
          onClick={() => selectValue(option)}
          onMouseEnter={() => focusOption(option)}
          style={Object.assign(styles, style)}
        >
          <div style={{ flex: '1 1 auto' }}>{option.label}</div>
          <Preview value={option.value} />
        </div>
      );
    },

    renderValue(roption) {
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '0 1.5rem 0 0.5rem',
          }}
        >
          <div>{roption.label}</div>
          <Preview value={roption.value} />
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
