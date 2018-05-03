import ImmutablePropTypes from 'react-immutable-proptypes'
import PropTypes from 'prop-types'
import React from 'react'

export default class NativeColorControl extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    setActiveStyle: PropTypes.func,
    setInactiveStyle: PropTypes.func,
    classNameWrapper: PropTypes.string.isRequired,
    field: ImmutablePropTypes.mapContains({
      default: PropTypes.string,
    }),
  }

  static defaultProps = {
    value: '',
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
