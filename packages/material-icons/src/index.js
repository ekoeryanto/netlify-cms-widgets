import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import PropTypes from 'prop-types'
import VirtualizedSelect from 'react-virtualized-select'

export class Control extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string.isRequired,
    value: PropTypes.array.isRequired,
    setActiveStyle: PropTypes.func.isRequired,
    setInactiveStyle: PropTypes.func.isRequired,
    classNameWrapper: PropTypes.string.isRequired,
    field: ImmutablePropTypes.mapContains({
      default: PropTypes.string,
    }).isRequired,
  }

  static defaultProps = {
    value: '',
  }

  handleChange = (option = {name: ''}) => {
    this.props.onChange(option.name)
  }

  renderLabel ({ focusedOption, focusedOptionIndex, focusOption, key, labelKey, option, options, selectValue, style, valueArray, valueKey }) {
    let styles = {
      display: 'flex',
      alignItems: 'center',
      padding: '0 1rem',
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
        <label style={{flex: '1 1 auto'}}>
          {option.name}
        </label>
        <Preview value={option.name} />
      </div>
    )
  }

  renderValue (option) {
    return (
      <div
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0 1.5rem 0 0.5rem' }}
      >
        <label>
          {option.name}
        </label>
        <Preview value={option.name} />
      </div>
    )
  }

  fetchCodepoints (input, callback) {
    // eslint-disable-next-line no-undef
    fetch('https://unpkg.com/material-design-icons/iconfont/codepoints')
      .then(res => res.text())
      .then(text => text.split(/\r?\n/).map(t => ({ name: t.split(' ')[0] })))
      .then(options => {
        input = input.toLowerCase()
        options = options.filter(i => {
          return i.name.includes(input)
        })

        callback(null, {
          options,
          complete: true,
        })
      })
  }

  render () {
    const { forID, field, value, setActiveStyle, setInactiveStyle, classNameWrapper } = this.props
    let currentValue = value || field.get('default')

    return (
      <div
        id={forID}
        className={classNameWrapper}
        onBlur={setInactiveStyle}
        onFocus={setActiveStyle}
      >
        <VirtualizedSelect
          async
          labelKey='name'
          valueKey='name'
          clearable={false}
          loadOptions={this.fetchCodepoints}
          value={currentValue}
          optionRenderer={this.renderLabel}
          valueRenderer={this.renderValue}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export class Preview extends React.Component {
  static propTypes = {
    value: PropTypes.node,
  }

  render () {
    return (
      <i className='material-icons'>{ this.props.value }</i>
    )
  }
}
