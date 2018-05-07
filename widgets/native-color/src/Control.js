import React from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'

export class Control extends React.Component {
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

  render () {
    const { forID, field, value, setActiveStyle, setInactiveStyle, onChange, classNameWrapper } = this.props
    const currentValue = value || field.get('default')
    return (
      <label
        onBlur={setInactiveStyle}
        onFocus={setActiveStyle}
        htmlFor={forID}
        className={classNameWrapper}
        style={{borderColor: currentValue}}
      >
        <input
          id={forID}
          value={currentValue}
          type='color'
          onChange={e => onChange(e.target.value)}
        />
      </label>
    )
  }
}
