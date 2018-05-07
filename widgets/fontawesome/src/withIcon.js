import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import PropTypes from 'prop-types'
import VirtualizedSelect from 'react-virtualized-select'
import fontawesome from '@fortawesome/fontawesome'
import { Preview } from './Preview'

export default function (option = {}) {
  const [type, icons] = Object.entries(option)[0]
  if (!icons) {
    // eslint-disable-next-line
    return function ({ field }) {
      return (
        <div>
          <strong>Fontawesome {type}</strong> not found
          but it's registered to <em>{field.get('widget')}</em> widget.
        </div>
      )
    }
  }

  fontawesome.library.add(icons)

  return class Base extends React.Component {
    static propTypes = {
      onChange: PropTypes.func.isRequired,
      forID: PropTypes.string.isRequired,
      value: PropTypes.node,
      setActiveStyle: PropTypes.func.isRequired,
      setInactiveStyle: PropTypes.func.isRequired,
      classNameWrapper: PropTypes.string.isRequired,
      field: ImmutablePropTypes.mapContains({
        default: PropTypes.string
      }).isRequired
    }

    static defaultProps = {
      value: ''
    }

    handleChange = (option = { label: '', value: '' }) => {
      this.props.onChange(option.value)
    }

    renderLabel ({
      focusedOption,
      focusedOptionIndex,
      focusOption,
      key,
      labelKey,
      option,
      options,
      selectValue,
      style,
      valueArray,
      valueKey
    }) {
      let styles = {
        display: 'flex',
        alignItems: 'center',
        padding: '0 1rem'
      }
      if (option === focusedOption) {
        styles.backgroundColor = 'rgba(0, 126, 255, 0.1)'
      }
      if (valueArray.indexOf(option) >= 0) {
        styles.fontWeight = 'bold'
      }
      return (
        <div
          key={key}
          onClick={() => selectValue(option)}
          onMouseEnter={() => focusOption(option)}
          style={Object.assign(styles, style)}
        >
          <label style={{ flex: '1 1 auto' }}>{option.label}</label>
          <Preview value={option.value} />
        </div>
      )
    }

    renderValue (option) {
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '0 1.5rem 0 0.5rem'
          }}
        >
          <label>{option.label}</label>
          <Preview value={option.value} />
        </div>
      )
    }

    render () {
      const {
        forID,
        field,
        value,
        setActiveStyle,
        setInactiveStyle,
        classNameWrapper
      } = this.props
      let currentValue = value || field.get('default')

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
              value: `${i.prefix} ${i.iconName}`
            }))}
            value={currentValue}
            optionRenderer={this.renderLabel}
            valueRenderer={this.renderValue}
            onChange={this.handleChange}
          />
        </div>
      )
    }
  }
}
