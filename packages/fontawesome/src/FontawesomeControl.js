import ImmutablePropTypes from 'react-immutable-proptypes'
import PropTypes from 'prop-types'
import React from 'react'

export default class FontawesomeControl extends React.Component {
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

  render () {
    const { forID, field, value, setActiveStyle, setInactiveStyle, onChange, classNameWrapper } = this.props
    const currentValue = field.get('default', value)
    return (
      <input
        id={forID}
        className={classNameWrapper}
        type='text'
        value={currentValue}
        onBlur={setInactiveStyle}
        onFocus={setActiveStyle}
        onChange={e => onChange(e.target.value)}
      />
    )
  }
}
