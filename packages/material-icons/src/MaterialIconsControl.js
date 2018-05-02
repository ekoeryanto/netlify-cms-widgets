import 'react-select/dist/react-select.css'
import { Async } from 'react-select'
import ImmutablePropTypes from 'react-immutable-proptypes'
import PropTypes from 'prop-types'
import React from 'react'

export default class MaterialIconsControl extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string.isRequired,
    value: PropTypes.node,
    setActiveStyle: PropTypes.func.isRequired,
    setInactiveStyle: PropTypes.func.isRequired,
    classNameWrapper: PropTypes.string.isRequired,
    field: ImmutablePropTypes.mapContains({
      default: PropTypes.string
    })
  }

  static defaultProps = {
    value: ''
  }

  state = {}

  renderOption (option) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginRight: '1rem' }}>
        <span>{option.name.replace('_', ' ').toUpperCase()}</span>
        <i className='material-icons'>{option.name}</i>
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
          options: input.length > 0 ? options.slice(0, 50) : options,
          complete: input.length > 0 ? options.length <= 50 : true
        })
      })
  }

  render () {
    const { forID, field, value, setActiveStyle, setInactiveStyle, onChange, classNameWrapper } = this.props

    return (
      <Async
        id={forID}
        className={classNameWrapper}
        loadOptions={this.fetchCodepoints}
        value={value || field.get('default')}
        onBlur={setInactiveStyle}
        onFocus={setActiveStyle}
        onChange={o => onChange(o.name)}
        optionRenderer={this.renderOption}
        valueRenderer={this.renderOption}
        clearable={false}
        labelKey='name'
        valueKey='name'
      />
    )
  }
}