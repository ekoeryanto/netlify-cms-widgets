import React from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { SketchPicker } from '@pake/react-color'

const DEFAULT_FORMAT = 'hex'
const DEFAULT_COLOR = '#ffffff'

export class Control extends React.Component {
  static propTypes = {
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
      alpha: PropTypes.bool
    }).isRequired
  }

  static defaultProps = {
    value: ''
  }

  handleChangeComplete = color => {
    const alpha = !this.props.field.get('alpha', true)
    const format = this.props.field.get('format') || DEFAULT_FORMAT
    let selected = color[format]
    if (typeof selected !== 'string') {
      const type = `${format}${alpha ? 'a' : ''}`
      const value = Object.values(selected).join(', ')

      selected = `${type}(${value})`
    }
    this.props.onChange(selected)
  }

  render () {
    const {
      forID,
      field,
      value,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle
    } = this.props

    const props = {
      presetColors: undefined,
      color: value || field.get('default') || DEFAULT_COLOR,
      disableAlpha: !field.get('alpha', true)
    }

    if (field.has('presets')) {
      props.presetColors = field.get('presets').toArray()
    }

    return (
      <div
        id={forID}
        className={classNameWrapper}
        onFocus={setActiveStyle}
        onBlur={setInactiveStyle}
        style={{ borderColor: value }}
      >
        <SketchPicker onChangeComplete={this.handleChangeComplete} {...props} />
      </div>
    )
  }
}
